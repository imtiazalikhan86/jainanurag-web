import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { ENTRY_ROUTES, entryHref } from '../../constants/india-entry';
import styles from './StartInIndia.module.css';

const STAGES = [
  { title: 'Decide the structure', description: 'A subsidiary of the parent, or a company held by the founders personally. The choice changes the documents and the reporting.' },
  { title: 'Legalise documents abroad', description: 'Apostille or consular legalisation in the home country. This is usually the longest step, and it can start before anything else.' },
  { title: 'Incorporate in India', description: 'Name reservation, directors, and the incorporation filing with the Ministry of Corporate Affairs.' },
  { title: 'Register and open a bank account', description: 'PAN, TAN, GST where applicable, and an account the parent can remit into.' },
  { title: 'Report the investment', description: 'Foreign investment is reported to the Reserve Bank of India within its own deadline, separate from the incorporation.' },
  { title: 'Begin the compliance calendar', description: 'Company filings, income tax, GST and payroll each run on their own cycle from the first year.' },
];

export default function StartInIndiaPage() {
  useDocumentMeta({
    title: 'Start in India | Jainanurag & Associates',
    description:
      'How an overseas company or a foreign founder sets up in India: choosing a structure, legalising documents, incorporating, reporting the investment and planning ongoing compliance.',
  });

  return (
    <>
      <PageHero
        eyebrow="For global founders"
        title="Setting up in India, in the order it actually happens"
        lead="India entry is a sequence, not a single filing. These pages set out each route, what it needs from you, and where the deadlines fall."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Start in India' }]}
      >
        <Button to="/contact" variant="primary" withArrow>Talk to an Expert</Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className={styles.heading}>Choose your route</h2>
          <ul className={styles.routes}>
            {ENTRY_ROUTES.map((route) => (
              <li key={route.slug}>
                <Link to={entryHref(route.slug)} className={styles.routeCard}>
                  <span className={styles.routeIcon} aria-hidden="true">
                    <Icon name={route.icon} size={22} />
                  </span>
                  <strong>{route.title}</strong>
                  <small>{route.tagline}</small>
                  <span className={styles.more}>Read the route <Icon name="arrowRight" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <h2 className={styles.heading}>What an India entry involves</h2>
          <ol className={styles.stages}>
            {STAGES.map((stage, index) => (
              <li key={stage.title}>
                <span className={styles.stageNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageText}>{stage.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Planning an India entry?"
        lead="Tell us where the parent company sits and what it wants to do here. We will map the route, the documents and the deadlines before you commit to anything."
      />
    </>
  );
}
