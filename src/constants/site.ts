import type { NavItem } from '../types/content';

/**
 * Single source of truth for firm details. Anything the client has not supplied yet is
 * marked as a placeholder rather than invented, because a CA firm's credibility depends
 * on every published claim being true.
 */
export const SITE = {
  name: 'Jainanurag & Associates',
  shortName: 'Jainanurag',
  descriptor: 'Chartered Accountants',
  tagline: 'Helping businesses start, operate and grow in India.',
  location: 'Mumbai, Maharashtra, India',
  // TODO(client): replace with the firm's published contact details.
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'contact@jainanurag.example',
  emailHref: 'mailto:contact@jainanurag.example',
  officeHours: 'Monday to Saturday, 10:00 - 19:00 IST',
} as const;

/**
 * Kept for anywhere that needs a flat list of destinations. The header and the drawer
 * build from `PRIMARY_NAV` in `constants/navigation.ts`, which carries the menu structure.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Start in India', href: '/start-in-india' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Private Limited company', href: '/services/private-limited-company' },
    { label: 'Foreign subsidiary registration', href: '/services/foreign-subsidiary-registration' },
    { label: 'GST registration', href: '/services/gst-registration' },
    { label: 'Income tax returns', href: '/services/income-tax-returns' },
    { label: 'Accounting and bookkeeping', href: '/services/accounting-and-bookkeeping' },
    { label: 'Annual company compliance', href: '/services/annual-company-compliance' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Start in India', href: '/start-in-india' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
