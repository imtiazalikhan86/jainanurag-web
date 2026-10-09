import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { ServiceCard } from '../../../../components/ui/ServiceCard/ServiceCard';
import { SERVICES } from '../../../../constants/home-content';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <Container>
        <SectionTitle
          id="services-title"
          eyebrow="What we do"
          title="Services for every stage of your business"
          description="Taxation, compliance and advisory handled by one professional team, so responsibilities never fall between advisers."
        />

        <ul className={`grid ${styles.grid}`}>
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
          <Button to="/services" variant="secondary" withArrow>View all services</Button>
        </div>
      </Container>
    </Section>
  );
}
