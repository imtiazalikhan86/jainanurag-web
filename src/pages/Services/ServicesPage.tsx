import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SERVICE_GROUPS, serviceHref, servicesInGroup, type ServiceGroupId } from '../../constants/services';
import styles from './ServicesPage.module.css';

/**
 * The hub mirrors the three groups in the Services menu, so someone who arrives here from
 * a search engine sees the same structure as someone who opened the dropdown.
 */
export default function ServicesPage() {
  useDocumentMeta({
    title: 'Services | Jainanurag & Associates',
    description:
      'Company incorporation, annual compliance, GST, income tax, accounting, payroll, transfer pricing, valuation and trade mark services for businesses operating in India.',
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a business needs to start and stay compliant in India"
        lead="Grouped by the stage your business is at, from choosing a structure through to the filings that repeat every year."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {SERVICE_GROUPS.map((group, index) => (
        <ServiceGroupSection key={group.id} group={group} tone={index % 2 === 1 ? 'warm' : 'default'} />
      ))}

      <CtaBand
        title="Not sure which of these you need?"
        lead="Tell us where the business is today and what you are trying to do next. We will tell you what applies, and what does not."
      />
    </>
  );
}

interface ServiceGroupSectionProps {
  group: { id: ServiceGroupId; heading: string; description: string };
  tone: 'default' | 'warm';
}

/* One Section per group, each with its own scroll-triggered reveal — split out because a
   hook can't be called once per loop iteration inside the page component's own body. */
function ServiceGroupSection({ group, tone }: ServiceGroupSectionProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} id={group.id} tone={tone}>
      <Container>
        <header className={`${styles.groupHead} reveal`}>
          <h2 className={styles.groupTitle}>{group.heading}</h2>
          <p className={styles.groupDescription}>{group.description}</p>
        </header>

        <ul className={`${styles.grid} reveal-group`}>
          {servicesInGroup(group.id).map((service) => (
            <li key={service.slug}>
              <Link to={serviceHref(service.slug)} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.summary}</p>
                <span className={styles.more}>
                  Read more <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
