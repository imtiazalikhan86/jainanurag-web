import { Button } from '../../../../components/common/Button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Container } from '../../../../components/common/Container/Container';
import { Icon } from '../../../../components/common/Icon/Icon';
import { ImageSlider, type Slide } from '../../../../components/ui/ImageSlider/ImageSlider';
import heroImage from '../../../../assets/images/hero-mumbai-advisory.jpg';
import networkImage from '../../../../assets/images/global-india-network.jpg';
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
          {/*
            * The banner headline is an h2 by design. A document still needs exactly one
            * h1, though — without it the homepage has no top-level heading for search
            * engines or for a screen reader's heading navigation — so the page's real
            * title sits here, read aloud but not drawn.
            */}
          <h1 className="visually-hidden">
            Jainanurag &amp; Associates &mdash; Chartered Accountants in Mumbai, India
          </h1>

          <p className={`${styles.eyebrow} rise`}>
            <span className={styles.dot} aria-hidden="true" />
            Chartered Accountants &middot; Mumbai, India
          </p>

          <h2 id="hero-title" className={`${styles.title} rise rise-1`}>
            Your trusted partner for business, tax&nbsp;&amp; compliance in <span className={styles.accent}>India</span>
          </h2>

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
