import type { NavEntry } from '../types/navigation';
import { SERVICE_GROUPS, serviceHref, servicesInGroup } from './services';
import { ENTRY_ROUTES, entryHref } from './india-entry';

/*
 * One nav model drives the desktop menus, the mobile drawer and the footer, so a new
 * destination is added once. Every top-level entry is itself a real page: the panels are
 * a shortcut into the section, never the only way to reach it.
 */
export const PRIMARY_NAV: NavEntry[] = [
  { kind: 'link', label: 'Home', href: '/' },
  { kind: 'link', label: 'About', href: '/about' },
  {
    kind: 'mega',
    label: 'Services',
    href: '/services',
    columns: SERVICE_GROUPS.map((group) => ({
      heading: group.heading,
      links: servicesInGroup(group.id).map((service) => ({
        label: service.title,
        href: serviceHref(service.slug),
        icon: service.icon,
      })),
    })),
    note: 'Not sure which applies to you? Start with the stage your business is at.',
    cta: { label: 'Discuss your requirements', href: '/contact' },
  },
  {
    kind: 'panel',
    label: 'Start in India',
    href: '/start-in-india',
    heading: 'For global founders',
    links: ENTRY_ROUTES.map((route) => ({
      label: route.title,
      description: route.tagline,
      href: entryHref(route.slug),
    })),
    cta: { label: 'Read the India entry guide', href: '/start-in-india' },
  },
  { kind: 'link', label: 'Pricing', href: '/pricing' },
  {
    kind: 'panel',
    label: 'Resources',
    href: '/resources',
    heading: 'Learn and plan',
    links: [
      { label: 'Insights', description: 'Company law, tax and business guides', href: '/resources/insights' },
      { label: 'Corridors', description: 'Your country to India', href: '/resources/corridors' },
      { label: 'Calculators', description: 'Tax, funding and business planning', href: '/resources/calculators' },
    ],
    cta: { label: 'Explore all resources', href: '/resources' },
  },
  { kind: 'link', label: 'Contact', href: '/contact' },
];
