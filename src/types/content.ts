import type { IconName } from '../components/common/Icon/Icon';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

/** Icon, heading and a line or paragraph of substance. Rendered by FeatureCard. */
export interface FeatureItem {
  title: string;
  description: string;
  icon: IconName;
  /** Makes the whole card a link to this route. */
  href?: string;
}

export interface IndustryItem {
  name: string;
  description?: string;
  icon: IconName;
}

export interface CountryItem {
  name: string;
  flag: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
