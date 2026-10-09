import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { Icon } from '../../../../components/common/Icon/Icon';
import { GLOBAL_SUPPORT } from '../../../../constants/home-content';
import styles from './GlobalBusiness.module.css';

/**
 * The commercial centrepiece. A dark band interrupts the light page so the section for
 * international businesses reads as a distinct proposition rather than another card grid.
 */
export function GlobalBusiness() {
  return (
    <Section id="global-business" tone="dark" aria-labelledby="global-title" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <Icon name="globe" size={16} />
            For international businesses
          </p>
          <h2 id="global-title" className={styles.title}>Expanding your business into India?</h2>
          <p className={styles.lead}>
            India rewards businesses that get their structure and compliance right from the start.
            We act as a single professional point of contact through registration, taxation and the
            ongoing obligations that follow, so your team can focus on the market rather than the paperwork.
          </p>

          <div className={styles.actions}>
            <Button to="/services#india-entry" variant="primary" withArrow>Explore India Business Services</Button>
            <Button to="/contact" variant="onDark">Talk to an Expert</Button>
          </div>
        </div>

        <ul className={styles.list}>
          {GLOBAL_SUPPORT.map((item) => (
            <li key={item}>
              <Icon name="check" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
