import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { findEntryRoute } from '../../constants/india-entry';
import { findService, serviceHref } from '../../constants/services';
import styles from './StartInIndia.module.css';

export default function EntryRoutePage() {
  const { slug } = useParams();
  const route = findEntryRoute(slug);
  const { ref: sequenceRef, inView: sequenceInView } = useInViewOnce<HTMLElement>();
  const { ref: relatedRef, inView: relatedInView } = useInViewOnce<HTMLElement>();

  if (!route) return <Navigate to="/404" replace />;

  return (
    <>
      <RouteMeta title={route.title} summary={route.intro} />

      <PageHero
        eyebrow={route.tagline}
        title={route.title}
        lead={route.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Start in India', href: '/start-in-india' },
          { label: route.title },
        ]}
      >
        <Button to="/contact" variant="primary" withArrow>Talk to an Expert</Button>
      </PageHero>

      <Section ref={sequenceRef} data-inview={sequenceInView}>
        <Container>
          <div className={styles.split}>
            <div>
              <h2 className={`${styles.heading} reveal`}>The sequence</h2>
              <ol className={`${styles.sequence} reveal-group`}>
                {route.steps.map((step, index) => (
                  <li key={step.title}>
                    <span className={styles.seqNumber} aria-hidden="true">{index + 1}</span>
                    <div>
                      <h3 className={styles.seqTitle}>{step.title}</h3>
                      <p className={styles.seqText}>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className={`${styles.aside} reveal`} aria-labelledby="documents-title">
              <h2 id="documents-title" className={styles.asideTitle}>What you will need</h2>
              <ul className={styles.asideList}>
                {route.documents.map((doc) => (
                  <li key={doc}>
                    <Icon name="check" size={16} aria-hidden />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className={styles.asideNote}>
                Exact requirements vary by jurisdiction and by sector. We confirm the list for your
                case before you start collecting anything.
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section ref={relatedRef} data-inview={relatedInView} tone="tint">
        <Container>
          <h2 className={`${styles.heading} reveal`}>Services that carry this out</h2>
          <ul className={`${styles.related} reveal-group`}>
            {route.relatedServices.map((serviceSlug) => {
              const service = findService(serviceSlug);
              if (!service) return null;
              return (
                <li key={service.slug}>
                  <Link to={serviceHref(service.slug)} className={styles.routeCard}>
                    <span className={styles.routeIcon} aria-hidden="true">
                      <Icon name={service.icon} size={20} />
                    </span>
                    <strong>{service.title}</strong>
                    <small>{service.summary}</small>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title={`Thinking about this route?`}
        lead="We will confirm whether it fits your facts, what it needs from the parent company, and where the deadlines fall."
      />
    </>
  );
}

function RouteMeta({ title, summary }: { title: string; summary: string }) {
  useDocumentMeta({
    title: `${title} | Jainanurag & Associates`,
    description: summary.slice(0, 180),
  });
  return null;
}
