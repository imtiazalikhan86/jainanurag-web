import type { IconName } from '../components/common/Icon/Icon';

export interface EntryRoute {
  slug: string;
  title: string;
  tagline: string;
  icon: IconName;
  intro: string;
  steps: { title: string; description: string }[];
  documents: string[];
  relatedServices: string[];
}

/*
 * The India entry journeys. These describe the route a founder takes rather than a single
 * service, and each one ends by pointing at the services that carry it out.
 */
export const ENTRY_ROUTES: EntryRoute[] = [
  {
    slug: 'register-a-subsidiary',
    title: 'Register a subsidiary',
    tagline: 'For an overseas parent company',
    icon: 'globe',
    intro:
      'The parent company holds the shares, and the Indian entity is a company in its own right. This is the usual route where an overseas business wants to trade in India under its own name, hire locally and sign contracts as an Indian entity.',
    steps: [
      { title: 'Confirm the entry route', description: 'Whether the investment falls under the automatic route or needs prior government approval, which depends on the sector and the shareholding.' },
      { title: 'Prepare parent company documents', description: 'Board resolution, charter documents and identity papers for the authorised signatory, apostilled or consularised as the parent’s jurisdiction requires.' },
      { title: 'Appoint directors', description: 'At least two, with at least one resident in India. Each needs a digital signature and a director identification number.' },
      { title: 'Incorporate', description: 'Name reservation followed by the incorporation filing with the Ministry of Corporate Affairs.' },
      { title: 'Register for tax and open a bank account', description: 'PAN and TAN, GST where applicable, and a current account the parent can remit into.' },
      { title: 'Report the investment', description: 'Share allotment reported to the Reserve Bank of India in the prescribed form, within its deadline.' },
    ],
    documents: [
      'Certificate of incorporation of the parent company',
      'Charter documents of the parent company',
      'Board resolution authorising the Indian investment and naming a signatory',
      'Passport and address proof for each proposed director',
      'Proof of the registered office address in India',
    ],
    relatedServices: ['foreign-subsidiary-registration', 'fema-and-rbi-reporting', 'annual-company-compliance'],
  },
  {
    slug: 'foreign-founder',
    title: 'Register as a foreign founder',
    tagline: 'For founders investing personally',
    icon: 'rocket',
    intro:
      'Here the shares are held by individuals rather than a company. The incorporation is similar, but the documentation is personal, and the reporting obligations attach to the individuals who invested.',
    steps: [
      { title: 'Confirm who is investing', description: 'Residency status drives both the documentation and the foreign exchange reporting that follows.' },
      { title: 'Choose the structure', description: 'Usually a private limited company, since it supports outside investment and employee equity.' },
      { title: 'Legalise personal documents', description: 'Passport and address proof, apostilled or consularised in the country of residence.' },
      { title: 'Appoint a resident director', description: 'At least one director must be resident in India, which founders based abroad need to plan for.' },
      { title: 'Incorporate and register', description: 'Incorporation, then PAN, TAN and the registrations the business needs to trade.' },
      { title: 'Report the share subscription', description: 'Shares subscribed by a non-resident are reported to the Reserve Bank of India in the prescribed form.' },
    ],
    documents: [
      'Passport for each founder, apostilled or consularised',
      'Overseas address proof for each founder',
      'Photographs and specimen signatures',
      'Proof of the registered office address in India',
      'Details of the proposed resident director',
    ],
    relatedServices: ['private-limited-company', 'fema-and-rbi-reporting', 'accounting-and-bookkeeping'],
  },
  {
    slug: 'country-guides',
    title: 'Find your country guide',
    tagline: 'Documents and local preparation',
    icon: 'map',
    intro:
      'What India asks for is consistent. What changes is how a document from your country is legalised before it gets here, and that depends on whether your country is party to the Hague Apostille Convention.',
    steps: [
      { title: 'Identify the legalisation route', description: 'Apostille where the country is a party to the Hague Convention, consular legalisation where it is not.' },
      { title: 'Notarise first', description: 'Most documents need notarisation in the home country before they can be apostilled or legalised.' },
      { title: 'Check translation requirements', description: 'Documents not in English need a certified translation.' },
      { title: 'Confirm validity windows', description: 'Some documents are only accepted if they were issued recently, so order matters.' },
      { title: 'Send ahead', description: 'Legalisation abroad is usually the longest part of an India entry, and it can run in parallel with everything else.' },
    ],
    documents: [
      'Corporate documents of the parent, notarised and apostilled or legalised',
      'Board resolution naming an authorised signatory',
      'Identity and address proof for each director and shareholder',
      'Certified English translations where documents are in another language',
    ],
    relatedServices: ['foreign-subsidiary-registration', 'private-limited-company'],
  },
  {
    slug: 'ongoing-compliance',
    title: 'Plan ongoing compliance',
    tagline: 'FEMA, tax and company filings',
    icon: 'compass',
    intro:
      'Incorporation is the short part. From the first day the entity exists it carries a repeating calendar across three authorities, and those obligations apply whether or not the business has started trading.',
    steps: [
      { title: 'Company filings', description: 'Board meetings, statutory registers, annual financial statements and the annual return with the Registrar of Companies.' },
      { title: 'Income tax', description: 'Advance tax across the year, withholding tax returns each quarter, and the annual return. A tax audit applies above prescribed thresholds.' },
      { title: 'Goods and Services Tax', description: 'Where registered, monthly or quarterly returns and an annual return, with input credit reconciled against supplier filings.' },
      { title: 'Foreign exchange reporting', description: 'Share issues and transfers involving non-residents, plus the annual return on foreign liabilities and assets.' },
      { title: 'Payroll', description: 'Monthly withholding and statutory contributions once employees are on the books.' },
    ],
    documents: [
      'Certificate of incorporation and constitutional documents',
      'Details of shareholders, directors and any non-resident holdings',
      'Bank statements and accounting records for the period',
      'Prior filings, where an entity is moving advisers',
    ],
    relatedServices: ['annual-company-compliance', 'fema-and-rbi-reporting', 'income-tax-returns', 'gst-registration'],
  },
];

export const findEntryRoute = (slug: string | undefined) => ENTRY_ROUTES.find((route) => route.slug === slug);

export const entryHref = (slug: string) => `/start-in-india/${slug}`;
