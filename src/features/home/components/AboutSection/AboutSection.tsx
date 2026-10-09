import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { Icon } from '../../../../components/common/Icon/Icon';
import { SITE } from '../../../../constants/site';
import styles from './AboutSection.module.css';

const PRACTICE_AREAS = [
  'Direct and indirect taxation',
  'Statutory and regulatory compliance',
  'Accounting and financial reporting',
  'Business structuring and advisory',
];

export function AboutSection() {
  return (
    <Section aria-labelledby="about-title">
      <Container className={styles.inner}>
        {/* A typographic plate rather than stock imagery: original, and nothing to download. */}
        <div className={styles.media} aria-hidden="true">
          <div className={styles.plate}>
            <span className={styles.mark}>J&amp;A</span>
            <p className={styles.plateName}>{SITE.name}</p>
            <p className={styles.plateRole}>{SITE.descriptor}</p>
            <p className={styles.plateCity}>
              <Icon name="pin" size={14} /> {SITE.location}
            </p>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>About the firm</p>
          <h2 id="about-title" className={styles.title}>
            A Mumbai Chartered Accountancy practice focused on your business
          </h2>
          <p className={styles.body}>
            Jainanurag &amp; Associates is a professional Chartered Accountancy practice based in Mumbai,
            working with Indian businesses and with international companies establishing a presence in India.
          </p>
          <p className={styles.body}>
            The approach is straightforward: understand how the business actually operates, apply the
            relevant tax and regulatory requirements to that reality, and keep those obligations running
            predictably year after year. Clients deal with professionals who know their file.
          </p>

          <ul className={styles.areas}>
            {PRACTICE_AREAS.map((area) => (
              <li key={area}>
                <Icon name="check" size={16} />
                {area}
              </li>
            ))}
          </ul>

          <Button to="/about" variant="secondary" withArrow>Know More About Us</Button>
        </div>
      </Container>
    </Section>
  );
}
