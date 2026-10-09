import { Hero } from '../../features/home/components/Hero/Hero';
import { TrustStrip } from '../../features/home/components/TrustStrip/TrustStrip';
import { ServicesSection } from '../../features/home/components/ServicesSection/ServicesSection';
import { GlobalBusiness } from '../../features/home/components/GlobalBusiness/GlobalBusiness';
import { WhyChooseUs } from '../../features/home/components/WhyChooseUs/WhyChooseUs';
import { JourneySection } from '../../features/home/components/JourneySection/JourneySection';
import { IndustriesSection } from '../../features/home/components/IndustriesSection/IndustriesSection';
import { AboutSection } from '../../features/home/components/AboutSection/AboutSection';
import { CtaBand } from '../../components/ui/CtaBand/CtaBand';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

/**
 * Composition only. Every section owns its own markup, styles and content, so this file
 * stays readable and sections can be reordered or reused on other pages.
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
      <TrustStrip />
      <ServicesSection />
      <GlobalBusiness />
      <WhyChooseUs />
      <JourneySection />
      <IndustriesSection />
      <AboutSection />
      <CtaBand />
    </>
  );
}
