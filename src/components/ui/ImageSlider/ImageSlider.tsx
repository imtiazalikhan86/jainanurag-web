import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import styles from './ImageSlider.module.css';

export interface Slide {
  src: string;
  /** Empty for decorative imagery, which is the case for the banners. */
  alt: string;
  width: number;
  height: number;
  /** Which part of the image to keep when it is cropped. */
  objectPosition?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  /** How long each slide holds before advancing. The fade and drift are in the stylesheet. */
  intervalMs?: number;
  className?: string;
  label: string;
  /** Told whenever the visible slide changes, so a consumer can pair copy with a banner. */
  onIndexChange?: (index: number) => void;
}

/**
 * A cross-fading auto-advancing slider, hand-rolled rather than pulled from a library:
 * two images and a fade do not justify a dependency, and this way the motion rules are
 * ours to control.
 *
 * Three behaviours matter more than the animation itself:
 *   - `prefers-reduced-motion` stops the rotation entirely and shows the first slide,
 *     because an unstoppable moving background is exactly what that setting is for.
 *   - Hovering or focusing the dots pauses it, so reaching for a control does not change
 *     the slide under your cursor. The banner itself does not pause: scoped to the whole
 *     hero, a pointer merely resting on the page stopped it advancing at all.
 *   - A hidden tab pauses it too; there is no reason to animate what nobody is watching.
 */
export function ImageSlider({ slides, intervalMs = 10000, className = '', label, onIndexChange }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const timer = useRef<number | undefined>(undefined);

  /* Every change goes through here, so the consumer hears about dots and auto-advance alike. */
  const goTo = useCallback(
    (next: number) => {
      setIndex(next);
      onIndexChange?.(next);
    },
    [onIndexChange],
  );

  /*
   * Which slides have been given a `src` yet.
   *
   * Every slide used to load on first paint. With two banners that is a fair trade for a
   * seamless first cross-fade; with six it would put five images the visitor may never see
   * on the critical path. So the first slide and the one behind it load up front, and each
   * advance primes the one after — the set only ever grows, so a slide already fetched is
   * never dropped and the browser serves it from cache on the way round again.
   *
   * Adjusted during render rather than in an effect: the new slide needs its `src` in the
   * same pass that activates it, or the cross-fade reveals an empty frame.
   */
  const [primed, setPrimed] = useState<ReadonlySet<number>>(
    () => new Set(slides.length > 1 ? [0, 1] : [0]),
  );
  const [lastIndex, setLastIndex] = useState(0);

  if (index !== lastIndex) {
    setLastIndex(index);
    const upcoming = (index + 1) % slides.length;
    if (!primed.has(index) || !primed.has(upcoming)) {
      setPrimed(new Set(primed).add(index).add(upcoming));
    }
  }

  useEffect(() => {
    if (reducedMotion || paused || slides.length < 2) return;
    /* A timeout per slide rather than one interval, so a dot click restarts the hold. */
    timer.current = window.setTimeout(() => goTo((index + 1) % slides.length), intervalMs);
    return () => window.clearTimeout(timer.current);
  }, [goTo, index, intervalMs, paused, reducedMotion, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const active = reducedMotion ? 0 : index;

  return (
    <div
      className={`${styles.slider} ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((slide, slideIndex) => (
        <img
          /* Index is part of the key because the same image may legitimately appear twice,
             for instance the same artwork cropped differently. */
          key={`${slide.src}-${slideIndex}`}
          className={`${styles.slide} ${slideIndex === active ? styles.active : ''}`}
          src={primed.has(slideIndex) ? slide.src : undefined}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
          /* The first slide is the largest contentful paint; anything primed behind it is
             fetched at low priority so it never competes with the visible one. */
          fetchPriority={slideIndex === 0 ? 'high' : 'low'}
          decoding="async"
          aria-hidden={slideIndex === active ? undefined : true}
        />
      ))}

      {slides.length > 1 && !reducedMotion && (
        /*
         * The pause is scoped to the controls, not the banner.
         *
         * It used to cover the whole hero so that hovering the copy would pause it. That
         * made the hero — most of the viewport — one big pause target, so a pointer simply
         * resting there stopped the slider indefinitely. A background banner does not need
         * to hold still for a reader; the controls do, so that reaching for a dot does not
         * change the slide under your cursor.
         */
        <div
          className={styles.dots}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.dot} ${slideIndex === active ? styles.dotActive : ''}`}
              aria-label={`Show banner ${slideIndex + 1} of ${slides.length}`}
              aria-current={slideIndex === active ? 'true' : undefined}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
