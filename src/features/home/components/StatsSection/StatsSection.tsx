import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { useCountUp } from '../../../../hooks/useCountUp';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { STATS } from '../../../../constants/home-content';
import styles from './StatsSection.module.css';

function Stat({ value, label, active }: { value: string; label: string; active: boolean }) {
  const match = value.match(/\d+/);
  const target = match ? Number(match[0]) : 0;
  const suffix = value.slice(match ? match[0].length : 0);
  const count = useCountUp(target, active);

  return (
    <div className={styles.stat}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>
        {count}
        {suffix}
      </dd>
    </div>
  );
}

/**
 * The figures are the client's own, from their content sheet. A description list keeps
 * each figure paired with its label for assistive tech, and the visible order is the
 * figure first, which is how a reader scans it.
 *
 * Each counts up from zero the moment the band scrolls into view, rather than on mount —
 * most visitors would never see it start otherwise. `useCountUp` jumps straight to the
 * final value under `prefers-reduced-motion`.
 */
export function StatsSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="dark" aria-labelledby="stats-title" className={styles.section}>
      <Container>
        <h2 id="stats-title" className={`${styles.heading} ruled-label reveal`}>Success Count</h2>
        <dl className={`${styles.stats} reveal-group`}>
          {STATS.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} active={inView} />
          ))}
        </dl>
      </Container>
    </Section>
  );
}
