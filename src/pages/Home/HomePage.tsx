import { Hero } from '../../features/home/components/Hero/Hero';
import { PartnerSection } from '../../features/home/components/PartnerSection/PartnerSection';
import { ServicesSection } from '../../features/home/components/ServicesSection/ServicesSection';
import { GlobalBusiness } from '../../features/home/components/GlobalBusiness/GlobalBusiness';
import { IndustriesSection } from '../../features/home/components/IndustriesSection/IndustriesSection';
import { HowWeWork } from '../../features/home/components/HowWeWork/HowWeWork';
import { StatsSection } from '../../features/home/components/StatsSection/StatsSection';
import { AboutSection } from '../../features/home/components/AboutSection/AboutSection';
import { FaqSection } from '../../features/home/components/FaqSection/FaqSection';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { CLOSING_CTA } from '../../constants/home-content';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

/**
 * Composition only. Every section owns its own markup, styles and content, so this file
 * stays readable and sections can be reordered or reused on other pages.
 *
 * The order follows the client's content sheet, except that Industries sits before Global
 * Business so the bands alternate dark and light from the hero down to Stats.
 */
export default function HomePage() {
  useDocumentMeta({
    title: 'Jainanurag & Associates | Chartered Accountants in Mumbai',
    description:
      'Chartered Accountants in Mumbai helping Indian and international businesses with business setup, GST, taxation, accounting, compliance and advisory in India.',
  });

  return (
    <>
      <Hero />
      <PartnerSection />
      <ServicesSection />
      <IndustriesSection />
      <GlobalBusiness />
      <HowWeWork />
      <StatsSection />
      <AboutSection />
      <FaqSection />
      <CtaBand
        eyebrow={CLOSING_CTA.eyebrow}
        title={CLOSING_CTA.title}
        lead={CLOSING_CTA.lead}
        actionLabel={CLOSING_CTA.action}
      />
    </>
  );
}
