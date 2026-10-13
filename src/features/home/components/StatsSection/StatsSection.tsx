import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { STATS } from '../../../../constants/home-content';
import styles from './StatsSection.module.css';

/**
 * The figures are the client's own, from their content sheet. A description list keeps
 * each figure paired with its label for assistive tech, and the visible order is the
 * figure first, which is how a reader scans it.
 */
export function StatsSection() {
  return (
    <Section tone="dark" aria-labelledby="stats-title" className={styles.section}>
      <Container>
        <h2 id="stats-title" className="visually-hidden">The firm in numbers</h2>
        <dl className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
