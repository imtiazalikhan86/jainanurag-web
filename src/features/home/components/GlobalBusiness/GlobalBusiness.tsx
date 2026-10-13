import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { COUNTRIES, GLOBAL } from '../../../../constants/home-content';
import styles from './GlobalBusiness.module.css';

/**
 * The commercial centrepiece. A dark band interrupts the light page so the section for
 * international businesses reads as a distinct proposition rather than another card grid.
 *
 * Flags are decorative: each sits beside its country's name, so they carry empty alt.
 */
export function GlobalBusiness() {
  return (
    <Section id="global-business" tone="dark" aria-labelledby="global-title" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ruled-label`}>
            For international businesses
          </p>
          <h2 id="global-title" className={styles.title}>{GLOBAL.title}</h2>
          <p className={styles.lead}>{GLOBAL.lead}</p>

          <div className={styles.actions}>
            <Button to="/start-in-india" variant="primary" withArrow>Start in India</Button>
            <Button to="/contact" variant="onDark">Talk to an Expert</Button>
          </div>
        </div>

        <ul className={styles.countries}>
          {COUNTRIES.map((country) => (
            <li key={country.name}>
              <img src={country.flag} alt="" width={30} height={20} className={styles.flag} />
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
