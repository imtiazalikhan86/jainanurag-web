import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { TRUST_ITEMS } from '../../../../constants/home-content';
import styles from './TrustStrip.module.css';

/**
 * Credibility without invented numbers. The references lean on client counts and logos;
 * until the firm supplies verified figures, trust here is built from what the practice
 * actually offers rather than claims that cannot be substantiated.
 */
export function TrustStrip() {
  return (
    <Section tone="warm" aria-labelledby="trust-title">
      <Container>
        <SectionTitle
          id="trust-title"
          eyebrow="Why businesses work with us"
          title="Professional expertise. Practical solutions. Long-term partnership."
          description="A Chartered Accountancy practice built around how businesses actually operate in India."
        />
        <ul className={`grid ${styles.grid}`}>
          {TRUST_ITEMS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
