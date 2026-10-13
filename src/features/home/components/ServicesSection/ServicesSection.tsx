import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { ServiceCard } from '../../../../components/ui/ServiceCard/ServiceCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { SERVICES, SERVICES_INTRO } from '../../../../constants/home-content';
import skyline from '../../../../assets/images/mumbai-skyline-night.jpg';
import styles from './ServicesSection.module.css';

/*
 * Set over a photograph of the Mumbai skyline at dusk, behind a navy veil. This is not the
 * `dark` section tone on purpose: that tone whitens every h3, which would blank out the
 * titles on the white service cards. The section takes light text only where it needs it.
 */
export function ServicesSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} id="services" aria-labelledby="services-title" className={styles.section}>
      {/* Decorative: below the fold, so it loads lazily rather than competing with the hero. */}
      <img src={skyline} alt="" width={2000} height={1125} loading="lazy" decoding="async" className={styles.backdrop} />

      <Container className={styles.inner}>
        <SectionTitle
          id="services-title"
          eyebrow={SERVICES_INTRO.eyebrow}
          title={SERVICES_INTRO.title}
          description={SERVICES_INTRO.description}
          tone="dark"
        />

        <ul className={`grid ${styles.grid} reveal-group`}>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index + 1}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </ul>

        <div className={styles.foot}>
          <Button to="/services" variant="onDark" withArrow className={styles.more}>View all services</Button>
        </div>
      </Container>
    </Section>
  );
}
