import type { IconName } from '../components/common/Icon/Icon';

export interface ResourceTopic {
  title: string;
  description: string;
  icon: IconName;
  /** Where the topic sends someone until written guides exist. */
  href: string;
}

/*
 * The resources area is built and routed, but the library itself is client content.
 * Rather than publish invented guides, each topic links to the service that covers it and
 * the page states plainly that the written guides are being prepared.
 *
 * TODO(client): supply guide articles, country corridor notes and the inputs each
 * calculator should use, then replace these topic cards with the real index.
 */
export const INSIGHT_TOPICS: ResourceTopic[] = [
  { title: 'India entry', description: 'Choosing a structure, legalising documents and the sequence an overseas parent follows.', icon: 'globe', href: '/start-in-india' },
  { title: 'FEMA and RBI', description: 'Reporting foreign investment, pricing guidelines and the annual return on foreign liabilities.', icon: 'bank', href: '/services/fema-and-rbi-reporting' },
  { title: 'Company law', description: 'Board meetings, statutory registers and the annual filings every company carries.', icon: 'building', href: '/services/annual-company-compliance' },
  { title: 'Goods and Services Tax', description: 'Registration triggers, the return cycle and keeping input credit intact.', icon: 'receipt', href: '/services/gst-registration' },
  { title: 'Direct tax', description: 'Advance tax, withholding, tax audit and the annual return.', icon: 'percent', href: '/services/income-tax-returns' },
  { title: 'Transfer pricing', description: 'Documenting related party transactions and certifying them.', icon: 'exchange', href: '/services/transfer-pricing' },
];

export interface Corridor {
  country: string;
  note: string;
  /** Hague Apostille Convention membership decides how documents are legalised. */
  legalisation: 'Apostille' | 'Consular legalisation';
}

/*
 * Legalisation route only. Nothing here describes tax treatment, because that depends on
 * the treaty position and the specific facts, and it is not something to generalise on a
 * marketing page.
 */
export const CORRIDORS: Corridor[] = [
  { country: 'United States', note: 'Documents are apostilled at state level, which is worth starting early.', legalisation: 'Apostille' },
  { country: 'United Kingdom', note: 'Apostille is issued centrally after notarisation.', legalisation: 'Apostille' },
  { country: 'Singapore', note: 'A common holding location for groups investing into India.', legalisation: 'Apostille' },
  { country: 'United Arab Emirates', note: 'Legalisation runs through the relevant ministry and the Indian mission.', legalisation: 'Consular legalisation' },
  { country: 'Germany', note: 'Apostille is issued by the competent regional authority.', legalisation: 'Apostille' },
  { country: 'Netherlands', note: 'Apostille is issued by the district court.', legalisation: 'Apostille' },
  { country: 'Australia', note: 'Apostille is issued by the Department of Foreign Affairs and Trade.', legalisation: 'Apostille' },
  { country: 'Japan', note: 'Apostille is issued by the Ministry of Foreign Affairs.', legalisation: 'Apostille' },
];

export interface CalculatorEntry {
  title: string;
  description: string;
  icon: IconName;
}

/*
 * TODO(client): each of these needs the rates and thresholds for the relevant assessment
 * year confirmed before it is built, since publishing a calculator that is a year out of
 * date is worse than not publishing one.
 */
export const CALCULATORS: CalculatorEntry[] = [
  { title: 'Entity comparison', description: 'Private limited, LLP and One Person Company side by side on compliance and suitability.', icon: 'layers' },
  { title: 'Setup cost estimator', description: 'What an India entry involves, broken down by stage.', icon: 'receipt' },
  { title: 'Compliance calendar', description: 'The filing dates that apply to your entity type and registrations.', icon: 'clock' },
  { title: 'Withholding tax finder', description: 'The rate applicable to a payment, including the treaty position for cross-border payments.', icon: 'percent' },
];
