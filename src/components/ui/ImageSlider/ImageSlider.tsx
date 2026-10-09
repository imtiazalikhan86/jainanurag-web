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
  intervalMs?: number;
  className?: string;
  label: string;
}

/**
 * A cross-fading auto-advancing slider, hand-rolled rather than pulled from a library:
 * two images and a fade do not justify a dependency, and this way the motion rules are
 * ours to control.
 *
 * Three behaviours matter more than the animation itself:
 *   - `prefers-reduced-motion` stops the rotation entirely and shows the first slide,
 *     because an unstoppable moving background is exactly what that setting is for.
 *   - Hovering or focusing anywhere in the banner pauses it, so it never moves out
 *     from under someone reading or tabbing through.
 *   - A hidden tab pauses it too; there is no reason to animate what nobody is watching.
 */
export function ImageSlider({ slides, intervalMs = 6000, className = '', label }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const timer = useRef<number | undefined>(undefined);
  const root = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => setIndex((current) => (current + 1) % slides.length), [slides.length]);

  useEffect(() => {
    if (reducedMotion || paused || slides.length < 2) return;
    timer.current = window.setInterval(advance, intervalMs);
    return () => window.clearInterval(timer.current);
  }, [advance, intervalMs, paused, reducedMotion, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  /* The slider is a backdrop: the content that sits on top of it is a sibling, not a
     child, so pointer and focus events over that content never reach this element.
     Listening on the parent makes the pause cover the whole banner area, which is what
     someone reading or tabbing through it expects. */
  useEffect(() => {
    const region = root.current?.parentElement;
    if (!region) return;
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);
    region.addEventListener('pointerenter', pause);
    region.addEventListener('pointerleave', resume);
    region.addEventListener('focusin', pause);
    region.addEventListener('focusout', resume);
    return () => {
      region.removeEventListener('pointerenter', pause);
      region.removeEventListener('pointerleave', resume);
      region.removeEventListener('focusin', pause);
      region.removeEventListener('focusout', resume);
    };
  }, []);

  const active = reducedMotion ? 0 : index;

  return (
    <div
      ref={root}
      className={`${styles.slider} ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((slide, slideIndex) => (
        <img
          key={slide.src}
          className={`${styles.slide} ${slideIndex === active ? styles.active : ''}`}
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
          /* The first slide is the largest contentful paint; the rest are prefetched
             eagerly so a cross-fade never reveals a half-loaded image. */
          fetchPriority={slideIndex === 0 ? 'high' : 'low'}
          decoding="async"
          aria-hidden={slideIndex === active ? undefined : true}
        />
      ))}

      {slides.length > 1 && !reducedMotion && (
        <div className={styles.dots}>
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.dot} ${slideIndex === active ? styles.dotActive : ''}`}
              aria-label={`Show banner ${slideIndex + 1} of ${slides.length}`}
              aria-current={slideIndex === active ? 'true' : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
