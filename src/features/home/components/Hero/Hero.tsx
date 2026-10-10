import { Button } from '../../../../components/common/Button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Container } from '../../../../components/common/Container/Container';
import { Icon } from '../../../../components/common/Icon/Icon';
import { ImageSlider, type Slide } from '../../../../components/ui/ImageSlider/ImageSlider';
import heroImage from '../../../../assets/images/hero-mumbai-advisory.jpg';
import networkImage from '../../../../assets/images/global-india-network.jpg';
import founderImage from '../../../../assets/images/founder-advisory.jpg';
import styles from './Hero.module.css';

const HIGHLIGHTS = ['Business setup', 'GST & taxation', 'Accounting', 'Ongoing compliance'];

/* Matches the layout breakpoint in Hero.module.css; below it the hero is copy only. */
const BANNER_MIN_WIDTH = 861;

/*
 * Both banners are illustrative, so their alt text is empty: everything they depict is
 * already stated in the headline and lead. objectPosition keeps the subject in frame as
 * the crop tightens on narrow viewports.
 */
const SLIDES: Slide[] = [
  { src: heroImage, alt: '', width: 1600, height: 775, objectPosition: '78% center' },
  { src: networkImage, alt: '', width: 1376, height: 768, objectPosition: '62% center' },
  /*
   * Composed rather than photographed: the source was a studio headshot on a light grey
   * backdrop, which at banner size would have meant a 2.5x upscale, a crop through the
   * face and a grey field fighting the navy. The backdrop is keyed out and the figure set
   * on the site's own navy, right of centre where the copy never reaches.
   */
  { src: founderImage, alt: '', width: 1600, height: 900, objectPosition: '72% 28%' },
];

/**
 * The hero answers three questions above the fold: what the firm does, who it is for, and
 * what to do next.
 *
 * The artwork runs full bleed across the whole hero and cross-fades between two banners.
 * Both carry their own navy weighting on the left, which is where the copy sits, and a
 * gradient overlay does the actual contrast work so the headline stays legible over either
 * slide.
 *
 * Below the layout breakpoint there is no room for a photograph beside the copy, and
 * stacking one underneath only pushed it past the fold where it did no work, so the
 * banner is dropped entirely on phones. It is skipped in the render rather than hidden in
 * CSS: `display: none` would still have cost a phone both downloads.
 */
export function Hero() {
  const showBanner = useMediaQuery(`(min-width: ${BANNER_MIN_WIDTH}px)`);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {showBanner && (
        <ImageSlider slides={SLIDES} className={styles.banner} label="Jainanurag & Associates banner" />
      )}

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} rise`}>
            <span className={styles.dot} aria-hidden="true" />
            Chartered Accountants &middot; Mumbai, India
          </p>

          <h1 id="hero-title" className={`${styles.title} rise rise-1`}>
            Your trusted partner for business, tax&nbsp;&amp; compliance in <span className={styles.accent}>India</span>
          </h1>

          <p className={`${styles.lead} rise rise-2`}>
            From business setup and GST registration to taxation, accounting and ongoing compliance,
            Jainanurag &amp; Associates helps businesses confidently navigate India&rsquo;s financial
            and regulatory landscape.
          </p>

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
