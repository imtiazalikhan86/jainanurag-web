import type { CountryItem, FaqItem, FeatureItem, IndustryItem, ServiceItem, StatItem } from '../types/content';
import flagUs from '../assets/images/flags/us.png';
import flagGb from '../assets/images/flags/gb.png';
import flagAe from '../assets/images/flags/ae.png';
import flagCa from '../assets/images/flags/ca.png';
import flagAu from '../assets/images/flags/au.png';
import flagDe from '../assets/images/flags/de.png';
import flagJp from '../assets/images/flags/jp.png';
import flagSg from '../assets/images/flags/sg.png';
import flagKr from '../assets/images/flags/kr.png';
import flagNl from '../assets/images/flags/nl.png';
import flagOm from '../assets/images/flags/om.png';
import flagIn from '../assets/images/flags/in.svg';

/*
 * Homepage copy, taken from the client's content sheet ("Web design and content.xlsx").
 * Wording is theirs; only spelling slips have been corrected.
 */

export const HERO = {
  eyebrow: 'India · Cross-border advisory',
  /* Shown in the eyebrow pill, ending on India: where they come from, where they land. */
  flags: [
    { name: 'United States', flag: flagUs },
    { name: 'United Kingdom', flag: flagGb },
    { name: 'Canada', flag: flagCa },
    { name: 'UAE', flag: flagAe },
    { name: 'Oman', flag: flagOm },
    { name: 'Singapore', flag: flagSg },
    { name: 'Australia', flag: flagAu },
    { name: 'India', flag: flagIn },
  ] satisfies CountryItem[],
  kicker: 'Your India Advisory Partner',
  lead: 'Specialist advice. Global perspective. Personalised solutions for international businesses establishing, operating, and growing in India.',
};

export const PARTNER = {
  /* Centred above the card, outside it. */
  sectionTitle: 'What We Do',
  eyebrow: 'Your partner in India',
  /* Two lines in the design: the claim, then what it takes. */
  title: ['India Is an Opportunity.', 'Navigating It Takes the Right Expertise.'],
  body: [
    'Entering and operating in India involves more than establishing a business. It requires a clear understanding of local regulations, cross-border taxation, foreign investment rules, and ongoing compliance obligations.',
    'We bring these considerations together through a coordinated, personalised advisory approach—helping international businesses make informed decisions at every stage of their India journey.',
  ],
};

/* Each tile opens the page that substantiates it. */
export const PARTNER_PILLARS: FeatureItem[] = [
  { icon: 'globe', title: 'Global Perspective', description: 'Advice that considers the wider cross-border picture.', href: '/start-in-india' },
  { icon: 'map', title: 'Indian Expertise', description: 'A practical understanding of India’s regulatory environment.', href: '/services' },
  { icon: 'user', title: 'Personalised Approach', description: 'Solutions aligned with your business objectives.', href: '/pricing' },
  { icon: 'shield', title: 'Proactive Support', description: 'A focus on anticipating obligations and addressing risks.', href: '/services/annual-company-compliance' },
];

export const SERVICES_INTRO = {
  eyebrow: 'Why Us?',
  title: 'From Market Entry to Long-Term Compliance',
  description: 'From setting up your Indian entity to managing ongoing finance, taxation, and compliance, we support your business at every stage of its India journey.',
};

export const SERVICES: ServiceItem[] = [
  { id: 'india-entry', icon: 'globe', title: 'India Entry & Business Setup', description: 'Company formation, foreign subsidiaries and market entry support.', href: '/start-in-india' },
  { id: 'fema', icon: 'bank', title: 'FEMA & RBI Compliance', description: 'Foreign investment reporting and regulatory compliance.', href: '/services/fema-and-rbi-reporting' },
  { id: 'transfer-pricing', icon: 'percent', title: 'Transfer Pricing & Tax Advisory', description: 'Cross-border transaction compliance and tax support.', href: '/services/transfer-pricing' },
  { id: 'annual-compliance', icon: 'ledger', title: 'Corporate & Annual Compliance', description: 'Ongoing statutory filings, governance and audit coordination.', href: '/services/annual-company-compliance' },
  { id: 'cfo', icon: 'chart', title: 'Finance, Reporting & Virtual CFO', description: 'Financial reporting, planning and outsourced finance functions.', href: '/services/cfo-services' },
  { id: 'resolution', icon: 'shield', title: 'Compliance Resolution & Representation', description: 'Support with notices, regulatory issues and representation before authorities, as applicable.', href: '/services/compliance-rescue' },
];

export const GLOBAL = {
  title: 'Empowering Founders Across Borders',
  lead: 'We support global founders and international businesses with seamless company formation, accounting, taxation, and compliance services in India.',
};

export const COUNTRIES: CountryItem[] = [
  { name: 'United States', flag: flagUs },
  { name: 'United Kingdom', flag: flagGb },
  { name: 'UAE', flag: flagAe },
  { name: 'Canada', flag: flagCa },
  { name: 'Australia', flag: flagAu },
  { name: 'Germany', flag: flagDe },
  { name: 'Japan', flag: flagJp },
  { name: 'Singapore', flag: flagSg },
  { name: 'South Korea', flag: flagKr },
  { name: 'Netherlands', flag: flagNl },
  { name: 'Oman', flag: flagOm },
];

export const INDUSTRIES_INTRO = {
  eyebrow: 'Industries',
  title: 'Industries We Serve',
  description: 'Sector-specific insight. Cross-border perspective. Tailored professional advice to help businesses navigate complexity and grow with confidence.',
};

export const INDUSTRIES: IndustryItem[] = [
  { icon: 'code', name: 'Technology, SaaS & GCCs' },
  { icon: 'sparkle', name: 'AI & Emerging Technologies' },
  { icon: 'cpu', name: 'Electronics & Advanced Manufacturing' },
  { icon: 'factory', name: 'Manufacturing & Industry' },
  { icon: 'graduation', name: 'Education & EdTech' },
  { icon: 'tower', name: 'Infrastructure & Projects' },
  { icon: 'exchange', name: 'International Trade & Distribution' },
  { icon: 'truck', name: 'Logistics & Supply Chain' },
  { icon: 'rocket', name: 'Startups & India Market Entry' },
  { icon: 'briefcase', name: 'Professional & Consulting Services' },
  { icon: 'heartPulse', name: 'Healthcare & Life Sciences' },
  { icon: 'bolt', name: 'Energy & Renewable Resources' },
];

export const HOW_WE_WORK_INTRO = {
  eyebrow: 'How we work',
  title: 'A Better Standard of Professional Advice',
  description: 'Expertise matters. So does the way it is delivered. We believe great advisory relationships are built on trust, clarity, accessibility, and a thorough understanding of your business.',
};

export const HOW_WE_WORK: FeatureItem[] = [
  { icon: 'user', title: 'Personal Attention, Every Step', description: 'We take the time to understand your business, its history, and your objectives. You receive considered advice from professionals who understand your matter, maintain continuity, and remain closely involved throughout the engagement.' },
  { icon: 'target', title: 'Clarity Before Commitment', description: 'We believe expectations should be clear from the outset. Our engagements are structured around a defined scope, transparent fee arrangements, agreed timelines, and a shared understanding of the work involved.' },
  { icon: 'message', title: 'Accessible, Responsive Advice', description: 'Professional advice should be accessible when it matters. We value timely communication, practical answers, and open conversations that help clients understand their options and move forward with confidence.' },
  { icon: 'shield', title: 'Anticipating Risks, Not Just Responding', description: 'Our role extends beyond meeting filing deadlines. We look at the wider implications of business decisions, identify potential compliance and regulatory concerns, and help clients address emerging issues before they become more complex.' },
];

/* Supplied by the client in the content sheet ("Success Count"). Do not change without them. */
export const STATS: StatItem[] = [
  { value: '200+', label: 'Clients Served' },
  { value: '20+', label: 'Years of Experience' },
  { value: '100+', label: 'International Groups Served' },
  { value: '100+', label: 'Professional Advisors' },
];

export const ABOUT = {
  eyebrow: 'About the firm',
  title: 'Navigating Cross-Border Business with Confidence',
  lead: 'Specialist advice. Global perspective. Personalised solutions for complex business and regulatory challenges.',
  body: [
    'We are a boutique professional advisory firm based in Mumbai, focused on helping businesses navigate the complexities of international operations, cross-border transactions, taxation, regulatory compliance, and financial reporting.',
    'Our approach combines technical expertise with a practical understanding of how businesses operate across jurisdictions. We work with businesses, promoters, international groups, and their advisors to address the challenges that arise when commercial objectives intersect with tax regulations, corporate laws, foreign exchange regulations, and compliance requirements.',
    'Cross-border business requires more than an understanding of individual regulations. It demands a broader perspective—one that considers the implications of a transaction across jurisdictions, the expectations of regulators, the requirements of stakeholders, and the long-term interests of the business.',
    'We bring this perspective to every engagement, helping clients assess risks, understand their obligations, structure their decisions, and navigate complex matters with greater clarity and confidence.',
    'We believe that effective professional advice is built on continuity, accessibility, and a thorough understanding of each client’s business. Our boutique model allows us to offer a personalised approach, with direct partner involvement, considered analysis, and solutions tailored to the specific circumstances of each engagement.',
    'Our focus is simple: to make complex matters clearer, help businesses make informed decisions, and provide dependable professional guidance as they grow across borders.',
  ],
};

export const FAQ_INTRO = {
  eyebrow: 'Frequently asked questions',
  title: 'The Right Questions Before We Begin.',
  body: [
    'We understand that choosing an advisory partner is about more than technical expertise. It is about trust, accessibility, clarity, and confidence in the people handling your matters.',
    'Explore answers to common questions about our approach, engagement process, professional services, and how we support businesses navigating cross-border complexities.',
  ],
  askTitle: 'Have a question that isn’t covered here?',
  askBody: 'Every business is different. Reach out to us directly, and our team will help you understand how we can assist with your specific requirements.',
  askAction: 'Speak With Our Team',
};

/*
 * TODO(client): the questions are the client's; the answers are drafted from the scope the
 * service pages already describe and need the firm's approval before launch.
 */
export const FAQS: FaqItem[] = [
  {
    question: 'Can you assist foreign companies establishing a business in India?',
    answer: 'Yes. We help overseas companies choose the right entry structure, then handle incorporation, tax registrations, bank account documentation and the foreign investment reporting that follows, so the Indian entity is ready to operate.',
  },
  {
    question: 'What services do you provide after incorporation?',
    answer: 'Accounting and bookkeeping, GST and income tax filings, annual company compliance, payroll, FEMA reporting and, where needed, outsourced finance and CFO support — the obligations that begin once the company exists, managed on one calendar.',
  },
  {
    question: 'Can you support FEMA, RBI, and foreign investment reporting?',
    answer: 'Yes. That includes reporting share issues and transfers involving non-residents to the Reserve Bank of India, the annual return on foreign liabilities and assets, and advice on whether a proposed transaction needs prior approval.',
  },
  {
    question: 'Do you assist with international tax and transfer pricing matters?',
    answer: 'Yes. We advise on cross-border transactions, withholding tax and treaty positions, and prepare transfer pricing documentation and the related filings for transactions with associated enterprises.',
  },
  {
    question: 'How are professional fees and engagement scope determined?',
    answer: 'Every engagement is scoped and quoted before work begins: a fixed fee for defined work, a monthly retainer for recurring compliance, or a scoped fee for advisory. The scope, deliverables and timeline are agreed up front.',
  },
  {
    question: 'Can you coordinate with our overseas finance team or existing advisors?',
    answer: 'Yes. We work alongside group finance teams, auditors and overseas advisors, aligning with their reporting calendars and formats so the Indian entity fits cleanly into group reporting.',
  },
  {
    question: 'Can you assist with GST notices and other regulatory proceedings?',
    answer: 'Yes. We review the notice, prepare the reply and supporting reconciliations, and represent the business before the authorities where professional representation is permitted.',
  },
];

export const CLOSING_CTA = {
  eyebrow: 'Let’s start a conversation',
  title: 'Planning Your Business Journey in India?',
  lead: 'Whether you are entering the Indian market, managing cross-border operations, or addressing a complex regulatory matter, let’s discuss how we may assist.',
  action: 'Talk to Our Advisors',
};
