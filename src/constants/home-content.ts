import type { DifferentiatorItem, IndustryItem, JourneyStep, ServiceItem, TrustItem } from '../types/content';

export const TRUST_ITEMS: TrustItem[] = [
  { icon: 'badge', title: 'Chartered Accountants', description: 'Qualified professional practice handling taxation, audit and compliance.' },
  { icon: 'compass', title: 'Business Advisory', description: 'Guidance that considers your business model, not just the filing deadline.' },
  { icon: 'shield', title: 'Tax & Compliance', description: 'Direct tax, GST and statutory obligations managed end to end.' },
  { icon: 'globe', title: 'India Market Support', description: 'A single point of contact for international businesses entering India.' },
  { icon: 'lock', title: 'Confidential Service', description: 'Financial and business information handled with professional discretion.' },
];

export const SERVICES: ServiceItem[] = [
  { id: 'business-setup', icon: 'building', title: 'Business Setup', description: 'Company registration, LLP formation and the approvals needed to begin trading in India.', href: '/services#business-setup' },
  { id: 'gst', icon: 'receipt', title: 'GST Services', description: 'GST registration, periodic returns, reconciliations and advisory on classification and input credit.', href: '/services#gst' },
  { id: 'taxation', icon: 'percent', title: 'Taxation', description: 'Income tax and corporate taxation, including planning, filings and assessment support.', href: '/services#taxation' },
  { id: 'accounting', icon: 'ledger', title: 'Accounting & Bookkeeping', description: 'Accurate books, management reporting and financial records kept ready for audit.', href: '/services#accounting' },
  { id: 'compliance', icon: 'shield', title: 'Business Compliance', description: 'Ongoing statutory and regulatory obligations tracked and filed on schedule.', href: '/services#compliance' },
  { id: 'banking', icon: 'bank', title: 'Bank Account Assistance', description: 'Support through business banking requirements and account-opening documentation.', href: '/services#banking' },
  { id: 'advisory', icon: 'chart', title: 'Business Advisory', description: 'Financial and strategic guidance for structuring, growth and decision making.', href: '/services#advisory' },
  { id: 'india-entry', icon: 'globe', title: 'India Market Entry', description: 'End-to-end support for international businesses establishing an Indian presence.', href: '/services#india-entry' },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  { icon: 'layers', title: 'One Professional Partner', description: 'Business setup, taxation, accounting and compliance handled together, so nothing falls between advisers.' },
  { icon: 'map', title: 'India Expertise', description: 'Practical understanding of India’s regulatory and taxation environment, applied to your situation.' },
  { icon: 'target', title: 'Business-Focused Approach', description: 'Advice shaped around how your business actually operates rather than a standard package.' },
  { icon: 'message', title: 'Transparent Communication', description: 'Clear scope, defined processes and predictable engagement from the first conversation.' },
  { icon: 'handshake', title: 'Long-Term Partnership', description: 'Support that continues well beyond registration and the first filing season.' },
  { icon: 'lock', title: 'Confidential & Professional', description: 'Financial and business information treated with the discretion the profession requires.' },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  { step: '01', title: 'Start', description: 'Choose the right structure and set up your business in India.' },
  { step: '02', title: 'Register', description: 'Complete GST, tax and the registrations your activity requires.' },
  { step: '03', title: 'Operate', description: 'Keep accounting, taxation and compliance running without surprises.' },
  { step: '04', title: 'Grow', description: 'Use financial and advisory support to make better decisions.' },
  { step: '05', title: 'Expand', description: 'Scale into new states, entities or markets with the structure in place.' },
];

export const INDUSTRIES: IndustryItem[] = [
  { icon: 'rocket', name: 'Startups', description: 'Structure, registrations and compliance from day one.' },
  { icon: 'building', name: 'SMEs', description: 'Day-to-day accounting, GST and taxation support.' },
  { icon: 'tower', name: 'Corporates', description: 'Statutory compliance and corporate tax matters.' },
  { icon: 'user', name: 'Entrepreneurs', description: 'Guidance for founders setting up a first venture.' },
  { icon: 'globe', name: 'International Companies', description: 'Entry, subsidiary setup and ongoing India operations.' },
  { icon: 'cart', name: 'E-commerce', description: 'Marketplace GST, reconciliations and reporting.' },
  { icon: 'code', name: 'Technology', description: 'Service exports, cross-border billing and compliance.' },
  { icon: 'briefcase', name: 'Professional Services', description: 'Practices and consultancies with recurring compliance.' },
  { icon: 'exchange', name: 'Trading Businesses', description: 'Indirect tax, documentation and regular filings.' },
];

export const GLOBAL_SUPPORT = [
  'Business and entity registration',
  'Corporate taxation and planning',
  'GST registration and returns',
  'Accounting and bookkeeping',
  'Bank account opening assistance',
  'Ongoing regulatory compliance',
];
