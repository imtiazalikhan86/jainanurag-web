import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { PARTNER, PARTNER_PILLARS } from '../../../../constants/home-content';
import elephant from '../../../../assets/images/india_elephant.png';
import styles from './PartnerSection.module.css';

/**
 * The opening argument: why India needs an adviser, then the four things the firm brings to
 * it. The argument sits in one card beside the elephant artwork, so it reads in one glance.
 */
export function PartnerSection() {
  return (
    <Section tone="warm" className={styles.section} aria-labelledby="partner-title">
      <Container>
        <h2 id="partner-title" className={`${styles.label} ruled-label`}>{PARTNER.sectionTitle}</h2>
        <div className={styles.card}>
          {/* Decorative: the copy already says India. */}
          <div className={styles.media}>
            <img src={elephant} alt="" width={1130} height={928} loading="lazy" decoding="async" />
          </div>
          <div className={styles.copy}>
            <p className={`${styles.eyebrow} ruled-label`}>{PARTNER.eyebrow}</p>
            <h3 className={styles.title}>
              {PARTNER.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <div className={styles.body}>
              {PARTNER.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <ul className={`grid ${styles.grid}`}>
          {PARTNER_PILLARS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} href={item.href} stacked />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
