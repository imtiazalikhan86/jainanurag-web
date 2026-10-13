import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { IndustryCard } from '../../../../components/ui/IndustryCard/IndustryCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { INDUSTRIES, INDUSTRIES_INTRO } from '../../../../constants/home-content';
import styles from './IndustriesSection.module.css';

export function IndustriesSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} id="industries" tone="warm" className={styles.section} aria-labelledby="industries-title">
      <Container>
        <SectionTitle
          id="industries-title"
          eyebrow={INDUSTRIES_INTRO.eyebrow}
          title={INDUSTRIES_INTRO.title}
          description={INDUSTRIES_INTRO.description}
        />
        <ul className={`grid ${styles.grid} reveal-group`}>
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.name} icon={industry.icon} name={industry.name} description={industry.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
