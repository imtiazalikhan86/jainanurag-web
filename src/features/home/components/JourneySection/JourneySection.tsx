import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { JOURNEY_STEPS } from '../../../../constants/home-content';
import styles from './JourneySection.module.css';

/**
 * Start, comply, operate, grow. An ordered list is the honest markup here: the steps have
 * a sequence, and the connecting line is drawn in CSS so screen readers hear the order
 * rather than a decorative arrow between every item.
 */
export function JourneySection() {
  return (
    <Section aria-labelledby="journey-title">
      <Container>
        <SectionTitle
          id="journey-title"
          eyebrow="How we support you"
          title="Start &rarr; Comply &rarr; Operate &rarr; Grow"
          description="Where a business needs professional support changes over time. The engagement is built to move with it."
        />

        <ol className={styles.steps}>
          {JOURNEY_STEPS.map((step) => (
            <li key={step.step} className={styles.step}>
              <span className={styles.marker} aria-hidden="true">{step.step}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
