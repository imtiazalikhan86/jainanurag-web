import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { IndustryCard } from '../../../../components/ui/IndustryCard/IndustryCard';
import { INDUSTRIES } from '../../../../constants/home-content';
import styles from './IndustriesSection.module.css';

export function IndustriesSection() {
  return (
    <Section id="industries" tone="tint" aria-labelledby="industries-title">
      <Container>
        <SectionTitle
          id="industries-title"
          eyebrow="Who we work with"
          title="Built for the way different businesses operate"
          description="Compliance obligations differ by structure, sector and scale. The engagement is shaped accordingly."
        />
        <ul className={`grid ${styles.grid}`}>
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.name} icon={industry.icon} name={industry.name} description={industry.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
