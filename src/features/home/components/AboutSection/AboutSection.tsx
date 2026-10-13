import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { Icon } from '../../../../components/common/Icon/Icon';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { ABOUT, ABOUT_HIGHLIGHTS } from '../../../../constants/home-content';
import { SITE } from '../../../../constants/site';
import styles from './AboutSection.module.css';

/**
 * The client's six paragraphs are all still here, just regrouped: the first two stay as
 * prose, the rest become four scannable highlight cards plus a one-line close, so the
 * section reads rather than scrolls past as a wall of text.
 */
export function AboutSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} className={styles.section} aria-labelledby="about-title">
      <Container className={styles.inner}>
        {/* A typographic plate rather than stock imagery: original, and nothing to download. */}
        <div className={`${styles.media} reveal`} aria-hidden="true">
          <div className={styles.plate}>
            <span className={styles.mark}>J&amp;A</span>
            <p className={styles.plateName}>{SITE.name}</p>
            <p className={styles.plateRole}>{SITE.descriptor}</p>
            <p className={styles.plateCity}>
              <Icon name="pin" size={14} /> {SITE.location}
            </p>
          </div>
        </div>

        <div className={`${styles.copy} reveal`}>
          <p className={`${styles.eyebrow} ruled-label`}>{ABOUT.eyebrow}</p>
          <h2 id="about-title" className={styles.title}>{ABOUT.title}</h2>
          <p className={styles.lead}>{ABOUT.lead}</p>
          {ABOUT.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>{paragraph}</p>
          ))}

          <p className={styles.closing}>{ABOUT.closing}</p>

          <ul className={`grid ${styles.grid} reveal-group`}>
            {ABOUT_HIGHLIGHTS.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </ul>

          <Button to="/about" variant="secondary" withArrow className={styles.more}>Know More About Us</Button>
        </div>
      </Container>
    </Section>
  );
}
