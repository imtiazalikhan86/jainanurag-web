import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { CALCULATORS } from '../../constants/resources';
import styles from './Resources.module.css';

export default function CalculatorsPage() {
  useDocumentMeta({
    title: 'Calculators | Jainanurag & Associates',
    description:
      'Planning tools for entity choice, India setup cost, the compliance calendar and withholding tax rates.',
  });

  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Tax, funding and business planning"
        lead="Tools for the questions that come up before an engagement starts, built around the current year's rates and thresholds."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Calculators' }]}
      />

      <Section>
        <Container>
          <h2 className={styles.heading}>Planned tools</h2>
          <ul className={styles.cards}>
            {CALCULATORS.map((calculator) => (
              <li key={calculator.title}>
                <div className={`${styles.card} ${styles.cardStatic}`}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={calculator.icon} size={22} />
                  </span>
                  <strong>{calculator.title}</strong>
                  <small>{calculator.description}</small>
                  <span className={styles.badge}>In preparation</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Rates and thresholds change every year, and a stale calculator is worse than none. */}
          <div className={styles.pending}>
            <Icon name="clock" size={22} aria-hidden />
            <div>
              <strong>Why these are not live yet</strong>
              <p>
                Each of these depends on rates and thresholds for a specific assessment year. We would
                rather publish them once the current year's figures are confirmed than publish
                something that quietly goes out of date.
              </p>
              <Link to="/contact" className={styles.pendingLink}>
                Ask us to run the numbers <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Need a figure now?"
        lead="Send us the position and we will work it out against the rules in force for the relevant year."
      />
    </>
  );
}
