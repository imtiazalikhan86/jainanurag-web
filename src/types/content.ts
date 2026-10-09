import type { IconName } from '../components/common/Icon/Icon';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  icon: IconName;
}

export interface NavItem {
  label: string;
  href: string;
}
