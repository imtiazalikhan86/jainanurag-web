import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { PARTNER, PARTNER_PILLARS, PARTNER_TAGS } from '../../../../constants/home-content';
import elephant from '../../../../assets/images/india_elephant.png';
import styles from './PartnerSection.module.css';

/**
 * The opening argument: why India needs an adviser, then the four things the firm brings
 * to it. The claim now carries the section's one heading, same as every section after it —
 * it used to share the stage with a second, mismatched "What We Do" label (that eyebrow
 * belongs to Services, which actually says what the firm does) stacked awkwardly above it.
 */
export function PartnerSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="warm" className={styles.section} aria-labelledby="partner-title">
      <Container>
        <SectionTitle
          id="partner-title"
          eyebrow={PARTNER.eyebrow}
          title={`${PARTNER.title[0]} ${PARTNER.title[1]}`}
          description={PARTNER.body[0]}
        />

        <div className={`${styles.card} reveal`}>
          {/* Decorative: the copy already says India. */}
          <div className={styles.media}>
            <img src={elephant} alt="" width={1130} height={928} loading="lazy" decoding="async" />
          </div>
          <div className={styles.copy}>
            <p className={styles.body}>{PARTNER.body[1]}</p>
            <ul className={styles.tags}>
              {PARTNER_TAGS.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={`grid ${styles.grid} reveal-group`}>
          {PARTNER_PILLARS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} href={item.href} stacked />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
