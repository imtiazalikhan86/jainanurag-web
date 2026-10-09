import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container';
import { Icon } from '../../components/common/Icon/Icon';
import { Section } from '../../components/common/Section/Section';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import styles from './PricingPage.module.css';

/*
 * TODO(client): supply the fee for each engagement model, and any package amounts the firm
 * wants published. Until then this page explains how work is priced and what changes the
 * number, which is true and useful; it publishes no figure, because an invented fee is the
 * one thing a prospective client would test first.
 */
const MODELS = [
  {
    title: 'Fixed fee',
    icon: 'receipt' as const,
    summary: 'For work with a defined scope and a defined output.',
    examples: ['Company or LLP incorporation', 'GST or trade mark registration', 'A single return or filing'],
    note: 'Quoted in advance. If the scope changes, we re-quote before doing the extra work.',
  },
  {
    title: 'Monthly retainer',
    icon: 'clock' as const,
    summary: 'For the obligations that repeat on a calendar.',
    examples: ['Accounting and bookkeeping', 'Payroll and withholding', 'The GST and compliance cycle'],
    note: 'Priced on transaction volume, headcount and the number of registrations in scope.',
  },
  {
    title: 'Advisory',
    icon: 'compass' as const,
    summary: 'For work where the answer is the deliverable.',
    examples: ['Structuring an India entry', 'Transfer pricing positions', 'Valuations and transaction support'],
    note: 'Scoped against the question. We agree an estimate and tell you if it is going to move.',
  },
];

const FACTORS = [
  { title: 'Entity type', description: 'A private limited company carries more statutory compliance than an LLP, and that difference runs through every year, not just the first.' },
  { title: 'Transaction volume', description: 'Bookkeeping and GST work scale with the number of invoices and bank lines, not with revenue.' },
  { title: 'Registrations in scope', description: 'Each GST registration, each state for professional tax, and each additional authority adds its own filings.' },
  { title: 'Cross-border activity', description: 'Foreign shareholding brings reporting under the foreign exchange rules; related party transactions bring transfer pricing documentation.' },
  { title: 'Starting condition', description: 'Taking over books and filings that are current is different work from bringing a backlog up to date.' },
  { title: 'Headcount', description: 'Payroll pricing follows the number of employees and the states they sit in.' },
];

export default function PricingPage() {
  useDocumentMeta({
    title: 'Pricing | Jainanurag & Associates',
    description:
      'How engagements are priced: fixed fee for defined work, a monthly retainer for recurring compliance, and scoped advisory. What changes the number, and how to get a quote.',
  });

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="How our fees work"
        lead="Every engagement is quoted before it starts. This page explains the three ways we price work and what moves the number, so a quote arrives with no surprises in it."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      >
        <Button to="/contact" variant="primary" withArrow>Request a quote</Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className={styles.heading}>Three engagement models</h2>
          <ul className={styles.models}>
            {MODELS.map((model) => (
              <li key={model.title} className={styles.model}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={model.icon} size={22} />
                </span>
                <h3 className={styles.modelTitle}>{model.title}</h3>
                <p className={styles.modelSummary}>{model.summary}</p>

                <ul className={styles.examples}>
                  {model.examples.map((example) => (
                    <li key={example}>
                      <Icon name="check" size={16} aria-hidden />
                      {example}
                    </li>
                  ))}
                </ul>

                <p className={styles.modelNote}>{model.note}</p>
                <p className={styles.quote}>
                  <span>Fee</span>
                  <strong>On request</strong>
                </p>
              </li>
            ))}
          </ul>

          <p className={styles.disclosure}>
            We publish no standard price list, because the same service costs different amounts
            depending on the factors below. Ask for a quote and you will get a figure, in writing,
            against a written scope.
          </p>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <h2 className={styles.heading}>What changes the number</h2>
          <dl className={styles.factors}>
            {FACTORS.map((factor) => (
              <div key={factor.title}>
                <dt>{factor.title}</dt>
                <dd>{factor.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container width="narrow">
          <h2 className={styles.heading}>What you can expect</h2>
          <ul className={styles.promises}>
            <li><Icon name="check" size={18} aria-hidden /> A written scope before work starts, so both sides know what is included.</li>
            <li><Icon name="check" size={18} aria-hidden /> Government fees, stamp duty and third-party charges shown separately from our fee.</li>
            <li><Icon name="check" size={18} aria-hidden /> A re-quote before any work outside the agreed scope, not an invoice afterwards.</li>
            <li><Icon name="check" size={18} aria-hidden /> A plain answer if what you are asking for is not work we should be doing.</li>
          </ul>
          <p className={styles.footNote}>
            Looking for what a specific engagement covers? Each <Link to="/services">service page</Link> sets
            out the scope in detail.
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Want a quote?"
        lead="Tell us the entity type, roughly how much activity there is, and what you need covered. That is usually enough for us to price it."
      />
    </>
  );
}
