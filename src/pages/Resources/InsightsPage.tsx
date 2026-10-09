import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { INSIGHT_TOPICS } from '../../constants/resources';
import styles from './Resources.module.css';

export default function InsightsPage() {
  useDocumentMeta({
    title: 'Insights | Jainanurag & Associates',
    description:
      'Topics we write about: India entry, FEMA and RBI reporting, company law, GST, direct tax and transfer pricing.',
  });

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides on India entry, FEMA, tax and compliance"
        lead="Written by the people who do the filing, not a content team. The topics below are what we cover; each one links to the service that carries it out."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Insights' }]}
      />

      <Section>
        <Container>
          <h2 className={styles.heading}>Topics</h2>
          <ul className={styles.cards}>
            {INSIGHT_TOPICS.map((topic) => (
              <li key={topic.title}>
                <Link to={topic.href} className={styles.card}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={topic.icon} size={22} />
                  </span>
                  <strong>{topic.title}</strong>
                  <small>{topic.description}</small>
                  <span className={styles.more}>Go to the detail <Icon name="arrowRight" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* An honest empty state beats a library of invented articles. */}
          <div className={styles.pending}>
            <Icon name="ledger" size={22} aria-hidden />
            <div>
              <strong>Written guides are being prepared</strong>
              <p>
                The articles for each topic are in progress. In the meantime the service pages
                carry the detail, and anything specific to your business is better answered
                directly.
              </p>
              <Link to="/contact" className={styles.pendingLink}>
                Ask a question <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have a question the guides do not answer?"
        lead="Most India questions turn on specifics. Send us yours and we will tell you how it applies to your facts."
      />
    </>
  );
}
