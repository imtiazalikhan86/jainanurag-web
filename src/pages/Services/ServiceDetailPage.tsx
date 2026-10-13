import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SERVICE_GROUPS, SERVICES, findService, serviceHref, type ServiceSummary } from '../../constants/services';
import { SERVICE_DETAILS, type ServiceBody } from '../../constants/service-details';
import styles from './ServiceDetailPage.module.css';

/**
 * One template for all fifteen services, driven by `constants/services.ts`. Adding a
 * service is a data change: no new route file, no new component, and no risk of fifteen
 * near-identical pages drifting apart.
 */
export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = findService(slug);
  const body = service ? SERVICE_DETAILS[service.slug] : undefined;

  // An unknown slug is a 404, not an empty page.
  if (!service || !body) return <Navigate to="/404" replace />;

  const group = SERVICE_GROUPS.find((candidate) => candidate.id === service.group);
  const related = SERVICES.filter((other) => other.group === service.group && other.slug !== service.slug).slice(0, 3);

  return (
    <>
      <ServiceMeta title={service.title} summary={service.summary} />

      <PageHero
        eyebrow={group?.heading}
        title={service.title}
        lead={service.summary}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.title }]}
      >
        <Button to="/contact" variant="primary" withArrow>Talk to an Expert</Button>
        <Button to="/services" variant="onDark">All services</Button>
      </PageHero>

      <WhatThisCoversSection body={body} />
      <ProcessSection body={body} />
      <FaqsSection body={body} />
      {related.length > 0 && <RelatedSection related={related} />}

      <CtaBand
        title={`Need help with ${service.title.toLowerCase()}?`}
        lead="Tell us where things stand and we will set out what applies, what it involves and what we need from you."
      />
    </>
  );
}

/*
 * Each section below is its own component purely so useInViewOnce has somewhere safe to
 * live: ServiceDetailPage itself returns early (a <Navigate>) before any of this renders,
 * and a hook can't sit after a conditional return in the same function body — the same
 * reason ServiceMeta, below, is split out rather than called inline.
 */

function WhatThisCoversSection({ body }: { body: ServiceBody }) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView}>
      <Container>
        <div className={styles.split}>
          <div className={styles.prose}>
            <h2 className={`${styles.heading} reveal`}>What this covers</h2>
            <p className={`${styles.intro} reveal`}>{body.intro}</p>

            <dl className={`${styles.included} reveal-group`}>
              {body.included.map((item) => (
                <div key={item.title}>
                  <dt>
                    <Icon name="check" size={18} aria-hidden />
                    {item.title}
                  </dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className={`${styles.aside} reveal`} aria-labelledby="who-title">
            <h2 id="who-title" className={styles.asideTitle}>Who this is for</h2>
            <ul className={styles.asideList}>
              {body.whoItIsFor.map((item) => (
                <li key={item}>
                  <Icon name="arrowRight" size={16} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.asideNote}>
              Requirements and thresholds change from year to year. We confirm the current position
              for your facts before anything is filed.
            </p>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function ProcessSection({ body }: { body: ServiceBody }) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="warm">
      <Container>
        <h2 className={`${styles.heading} reveal`}>How we work through it</h2>
        <ol className={`${styles.steps} reveal-group`}>
          {body.process.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function FaqsSection({ body }: { body: ServiceBody }) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView}>
      <Container width="narrow">
        <h2 className={`${styles.heading} reveal`}>Common questions</h2>
        <div className={`${styles.faqs} reveal-group`}>
          {body.faqs.map((faq) => (
            /* A native disclosure: keyboard accessible and searchable with no JavaScript. */
            <details key={faq.question} className={styles.faq}>
              <summary>
                {faq.question}
                <Icon name="chevronDown" size={18} aria-hidden />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function RelatedSection({ related }: { related: ServiceSummary[] }) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="tint">
      <Container>
        <h2 className={`${styles.heading} reveal`}>Related services</h2>
        <ul className={`${styles.related} reveal-group`}>
          {related.map((item) => (
            <li key={item.slug}>
              <Link to={serviceHref(item.slug)} className={styles.relatedCard}>
                <span className={styles.relatedIcon} aria-hidden="true">
                  <Icon name={item.icon} size={20} />
                </span>
                <strong>{item.title}</strong>
                <small>{item.summary}</small>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* Split out so the hook runs unconditionally, after the not-found branch has returned. */
function ServiceMeta({ title, summary }: { title: string; summary: string }) {
  useDocumentMeta({
    title: `${title} | Jainanurag & Associates`,
    description: summary,
  });
  return null;
}
