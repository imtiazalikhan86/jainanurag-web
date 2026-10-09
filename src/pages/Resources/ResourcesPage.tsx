import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import styles from './Resources.module.css';

const AREAS = [
  { title: 'Insights', description: 'Guides on company law, foreign exchange reporting, tax and the compliance cycle.', href: '/resources/insights', icon: 'ledger' as const },
  { title: 'Corridors', description: 'What founders from a given country need to prepare before an India entry.', href: '/resources/corridors', icon: 'map' as const },
  { title: 'Calculators', description: 'Planning tools for entity choice, setup cost and the filing calendar.', href: '/resources/calculators', icon: 'percent' as const },
];

export default function ResourcesPage() {
  useDocumentMeta({
    title: 'Resources | Jainanurag & Associates',
    description:
      'Guides, country corridors and planning tools for businesses setting up and operating in India.',
  });

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn and plan"
        lead="Reference material for founders and finance teams working with India, organised by what you are trying to work out."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      <Section>
        <Container>
          <ul className={styles.cards}>
            {AREAS.map((area) => (
              <li key={area.href}>
                <Link to={area.href} className={styles.card}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={area.icon} size={22} />
                  </span>
                  <strong>{area.title}</strong>
                  <small>{area.description}</small>
                  <span className={styles.more}>Open <Icon name="arrowRight" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Cannot find what you are looking for?"
        lead="If the question is specific to your business, it is usually quicker to ask than to read around it."
      />
    </>
  );
}
