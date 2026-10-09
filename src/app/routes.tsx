import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

/**
 * The homepage is the landing route and ships in the main bundle; everything else is
 * split out, so a first-time visitor downloads only what they are looking at.
 *
 * The fifteen service pages and the four India-entry routes share one component each,
 * driven by data, so the route table stays this short however many are added.
 */
import HomePage from '../pages/Home/HomePage';

const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage'));
const ServiceDetailPage = lazy(() => import('../pages/Services/ServiceDetailPage'));
const StartInIndiaPage = lazy(() => import('../pages/StartInIndia/StartInIndiaPage'));
const EntryRoutePage = lazy(() => import('../pages/StartInIndia/EntryRoutePage'));
const PricingPage = lazy(() => import('../pages/Pricing/PricingPage'));
const ResourcesPage = lazy(() => import('../pages/Resources/ResourcesPage'));
const InsightsPage = lazy(() => import('../pages/Resources/InsightsPage'));
const CorridorsPage = lazy(() => import('../pages/Resources/CorridorsPage'));
const CalculatorsPage = lazy(() => import('../pages/Resources/CalculatorsPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

export const routes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'about', element: <AboutPage /> },

  { path: 'services', element: <ServicesPage /> },
  { path: 'services/:slug', element: <ServiceDetailPage /> },

  { path: 'start-in-india', element: <StartInIndiaPage /> },
  { path: 'start-in-india/:slug', element: <EntryRoutePage /> },

  { path: 'pricing', element: <PricingPage /> },

  { path: 'resources', element: <ResourcesPage /> },
  { path: 'resources/insights', element: <InsightsPage /> },
  { path: 'resources/corridors', element: <CorridorsPage /> },
  { path: 'resources/calculators', element: <CalculatorsPage /> },

  { path: 'contact', element: <ContactPage /> },

  // An unknown service or route slug redirects here, so a bad link lands on a real 404.
  { path: '404', element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];
