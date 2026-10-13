import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { Icon } from '../../../../components/common/Icon/Icon';
import { ABOUT } from '../../../../constants/home-content';
import { SITE } from '../../../../constants/site';
import styles from './AboutSection.module.css';

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
          <p className={`${styles.eyebrow} ruled-label`}>{ABOUT.eyebrow}</p>
          <h2 id="about-title" className={styles.title}>{ABOUT.title}</h2>
          <p className={styles.lead}>{ABOUT.lead}</p>
          {ABOUT.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>{paragraph}</p>
          ))}

          <Button to="/about" variant="secondary" withArrow className={styles.more}>Know More About Us</Button>
        </div>
      </Container>
    </Section>
  );
}
