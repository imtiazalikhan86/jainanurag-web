import { useState } from 'react';
import { Button } from '../../../../components/common/Button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Container } from '../../../../components/common/Container/Container';
import { Icon } from '../../../../components/common/Icon/Icon';
import { ImageSlider, type Slide } from '../../../../components/ui/ImageSlider/ImageSlider';
import heroImage from '../../../../assets/images/hero-mumbai-advisory.jpg';
import networkImage from '../../../../assets/images/global-india-network.jpg';
import raceImage from '../../../../assets/images/hero-race-ahead.jpg';
import { HERO } from '../../../../constants/home-content';
import styles from './Hero.module.css';

const HIGHLIGHTS = ['Business setup', 'GST & taxation', 'Accounting', 'Ongoing compliance'];

/* Matches the layout breakpoint in Hero.module.css; below it the hero is copy only. */
const BANNER_MIN_WIDTH = 861;

/* Headlines a banner can carry. `main` is also the only one shown on phones. */
const HEADLINES = {
  main: (
    <>
      Navigating Cross-Border Business with <span className={styles.accent}>Confidence</span>
    </>
  ),
  race: (
    <>
      Always stay ahead with our expert <span className={styles.accent}>tax consultation</span>
    </>
  ),
};

type HeadlineKey = keyof typeof HEADLINES;
const HEADLINE_KEYS = Object.keys(HEADLINES) as HeadlineKey[];

/*
 * All banners are illustrative, so their alt text is empty: everything they depict is
 * already stated in the headline and lead.
 *
 * All three are the same 1600x695 frame, which is the shape the hero takes (see
 * Hero.module.css), so each one shows whole. A new banner must match that size, or it
 * will be cropped. Anchored right so that, where the copy makes the hero taller than the
 * frame, it is the navy on the left that is trimmed rather than the subject.
 */
const SLIDES: (Slide & { headline: HeadlineKey })[] = [
  { src: heroImage, alt: '', width: 1600, height: 695, objectPosition: 'right top', headline: 'main' },
  { src: networkImage, alt: '', width: 1600, height: 695, objectPosition: 'right top', headline: 'main' },
  { src: raceImage, alt: '', width: 1600, height: 695, objectPosition: 'right top', headline: 'race' },
];

/**
 * The hero answers three questions above the fold: what the firm does, who it is for, and
 * what to do next.
 *
 * The artwork runs full bleed across the whole hero, shown whole rather than cropped. It
 * carries its own navy weighting on the left, which is where the copy sits, so there is
 * no gradient overlay on top of it.
 *
 * Below the layout breakpoint there is no room for a photograph beside the copy, and
 * stacking one underneath only pushed it past the fold where it did no work, so the
 * banner is dropped entirely on phones. It is skipped in the render rather than hidden in
 * CSS: `display: none` would still have cost a phone both downloads.
 */
export function Hero() {
  const showBanner = useMediaQuery(`(min-width: ${BANNER_MIN_WIDTH}px)`);
  const [slideIndex, setSlideIndex] = useState(0);
  /* No banner, no banner headline: a phone always reads the main one. */
  const headline: HeadlineKey = showBanner ? SLIDES[slideIndex].headline : 'main';

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {showBanner && (
        <ImageSlider
          slides={SLIDES}
          className={styles.banner}
          label="Jainanurag & Associates banner"
          onIndexChange={setSlideIndex}
        />
      )}

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} rise`}>
            {/* Decorative: the label already says cross-border. */}
            <span className={styles.flags} aria-hidden="true">
              {HERO.flags.map((country) => (
                <img key={country.name} src={country.flag} alt="" width={24} height={16} className={styles.flag} />
              ))}
            </span>
            {HERO.eyebrow}
          </p>
          <p className={`${styles.kicker} rise rise-1`}>{HERO.kicker}</p>

          {/*
            Every headline is rendered, stacked in one grid cell, so the h1 is always as tall
            as the longest and the lead below never jumps when a shorter one fades in. Only
            the visible one is exposed, so the h1 reads as a single headline.
          */}
          <h1 id="hero-title" className={`${styles.title} rise rise-1`}>
            {HEADLINE_KEYS.map((key) => (
              <span
                key={key}
                className={`${styles.headline} ${key === headline ? styles.headlineActive : ''}`}
                aria-hidden={key === headline ? undefined : true}
              >
                {HEADLINES[key]}
              </span>
            ))}
          </h1>

          <p className={`${styles.lead} rise rise-2`}>{HERO.lead}</p>

          <div className={`${styles.actions} rise rise-3`}>
            <Button to="/contact" variant="primary" withArrow>Talk to an Expert</Button>
            <Button to="/services" variant="secondary">Explore Our Services</Button>
          </div>

          <ul className={styles.highlights}>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
