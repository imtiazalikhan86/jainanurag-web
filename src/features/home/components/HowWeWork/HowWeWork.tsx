import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { HOW_WE_WORK, HOW_WE_WORK_INTRO } from '../../../../constants/home-content';
import styles from './HowWeWork.module.css';

/** Four principles, each a full paragraph, so two columns rather than three. */
export function HowWeWork() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="warm" className={styles.section} aria-labelledby="how-title">
      <Container>
        <SectionTitle
          id="how-title"
          eyebrow={HOW_WE_WORK_INTRO.eyebrow}
          title={HOW_WE_WORK_INTRO.title}
          description={HOW_WE_WORK_INTRO.description}
        />
        <ul className={`grid ${styles.grid} reveal-group`}>
          {HOW_WE_WORK.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
