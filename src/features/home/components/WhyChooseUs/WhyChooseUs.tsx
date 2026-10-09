import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { DIFFERENTIATORS } from '../../../../constants/home-content';

export function WhyChooseUs() {
  return (
    <Section tone="warm" aria-labelledby="why-title">
      <Container>
        <SectionTitle
          id="why-title"
          eyebrow="Why choose us"
          title="A professional partner, not a filing service"
          description="What it is like to work with the firm, from the first conversation through to each year's compliance cycle."
        />
        <ul className="grid grid--3">
          {DIFFERENTIATORS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
