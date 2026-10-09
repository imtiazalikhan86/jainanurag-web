import type { IconName } from '../components/common/Icon/Icon';

export type ServiceGroupId = 'build' | 'run' | 'tax';

/** What the menu, the hub grid and every cross-link need. The page body lives separately. */
export interface ServiceSummary {
  slug: string;
  title: string;
  group: ServiceGroupId;
  icon: IconName;
  /** One line, used in the menu, the hub grid and the meta description. */
  summary: string;
}

export const SERVICE_GROUPS: { id: ServiceGroupId; heading: string; description: string }[] = [
  {
    id: 'build',
    heading: 'Build in India',
    description: 'Choosing a structure and getting it incorporated, whether the owners are in India or overseas.',
  },
  {
    id: 'run',
    heading: 'Run your business',
    description: 'The filings, books and reporting that keep an operating entity in good standing.',
  },
  {
    id: 'tax',
    heading: 'Tax and specialist support',
    description: 'Registrations, returns and one-off engagements that sit alongside the regular cycle.',
  },
];

/*
 * The index is the single source for the Services menu, the services hub and every
 * cross-link, so a new service is added in exactly one place. It carries only the fields
 * those places need.
 *
 * The header imports this, so anything added here ships in the main bundle to every
 * visitor. The long-form page body therefore lives in `service-details.ts`, which only
 * the service route imports and which loads with that route.
 */
export const SERVICES: ServiceSummary[] = [
  {
    slug: 'foreign-subsidiary-registration',
    title: 'Foreign subsidiary registration',
    group: 'build',
    icon: 'globe',
    summary: 'Set up an Indian subsidiary of an overseas parent company, end to end.',
  },
  {
    slug: 'private-limited-company',
    title: 'Private Limited company',
    group: 'build',
    icon: 'building',
    summary: 'The default structure for a business that plans to raise funding or scale.',
  },
  {
    slug: 'llp-registration',
    title: 'LLP registration',
    group: 'build',
    icon: 'handshake',
    summary: 'A lighter structure for professional firms and partner-run businesses.',
  },
  {
    slug: 'one-person-company',
    title: 'One Person Company',
    group: 'build',
    icon: 'user',
    summary: 'Corporate structure and limited liability for a single founder.',
  },
  {
    slug: 'annual-company-compliance',
    title: 'Annual company compliance',
    group: 'run',
    icon: 'clock',
    summary: 'Board, registrar and statutory records kept current through the year.',
  },
  {
    slug: 'fema-and-rbi-reporting',
    title: 'FEMA and RBI reporting',
    group: 'run',
    icon: 'bank',
    summary: 'Foreign investment reported correctly, on time, in the prescribed form.',
  },
  {
    slug: 'transfer-pricing',
    title: 'Transfer pricing',
    group: 'run',
    icon: 'exchange',
    summary: 'Documentation and certification for transactions within a group.',
  },
  {
    slug: 'cfo-services',
    title: 'CFO services',
    group: 'run',
    icon: 'chart',
    summary: 'Senior financial oversight without a full-time hire.',
  },
  {
    slug: 'accounting-and-bookkeeping',
    title: 'Accounting and bookkeeping',
    group: 'run',
    icon: 'ledger',
    summary: 'Books kept current, reconciled and ready for every filing.',
  },
  {
    slug: 'payroll-management',
    title: 'Payroll management',
    group: 'run',
    icon: 'briefcase',
    summary: 'Salaries, withholding and employee filings run on schedule.',
  },
  {
    slug: 'gst-registration',
    title: 'GST registration',
    group: 'tax',
    icon: 'receipt',
    summary: 'Registration, returns and input credit handled as one cycle.',
  },
  {
    slug: 'income-tax-returns',
    title: 'Income tax returns',
    group: 'tax',
    icon: 'percent',
    summary: 'Returns, advance tax and assessments for companies and individuals.',
  },
  {
    slug: 'compliance-rescue',
    title: 'Compliance rescue',
    group: 'tax',
    icon: 'shield',
    summary: 'Overdue filings brought current and kept that way.',
  },
  {
    slug: 'business-valuation',
    title: 'Business valuation',
    group: 'tax',
    icon: 'target',
    summary: 'Valuations for funding, transfers and regulatory filings.',
  },
  {
    slug: 'trademark-registration',
    title: 'Trademark registration',
    group: 'tax',
    icon: 'badge',
    summary: 'Protecting a name or mark, from search through to registration.',
  },
];

export function findService(slug: string | undefined): ServiceSummary | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function servicesInGroup(group: ServiceGroupId): ServiceSummary[] {
  return SERVICES.filter((service) => service.group === group);
}

export const serviceHref = (slug: string) => `/services/${slug}`;
