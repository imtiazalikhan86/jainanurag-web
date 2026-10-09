import type { IconName } from '../components/common/Icon/Icon';

export interface MegaLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

export interface PanelLink {
  label: string;
  description: string;
  href: string;
}

interface NavBase {
  label: string;
  /** Every top-level entry is a real page, so the trigger itself is always a link. */
  href: string;
}

/** A plain destination with nothing beneath it. */
export interface NavLinkEntry extends NavBase {
  kind: 'link';
}

/** The wide three-column panel used for the service catalogue. */
export interface NavMegaEntry extends NavBase {
  kind: 'mega';
  columns: MegaColumn[];
  note: string;
  cta: { label: string; href: string };
}

/** The narrow panel used where each entry needs a line of explanation. */
export interface NavPanelEntry extends NavBase {
  kind: 'panel';
  heading: string;
  links: PanelLink[];
  cta: { label: string; href: string };
}

export type NavEntry = NavLinkEntry | NavMegaEntry | NavPanelEntry;
