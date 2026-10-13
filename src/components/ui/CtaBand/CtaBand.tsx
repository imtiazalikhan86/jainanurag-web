import { Button } from '../../common/Button/Button';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import { SITE } from '../../../constants/site';
import styles from './CtaBand.module.css';

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  /** Label for the primary button, which always leads to the contact page. */
  actionLabel?: string;
}

/**
 * The closing call to action, shared by every page. Defaults suit the homepage; a page
 * with a narrower subject passes its own wording so the ask matches what was just read.
 */
export function CtaBand({
  eyebrow,
  title = 'Planning to start or expand your business in India?',
  lead = 'Whether you are setting up a new business, managing taxation and compliance, or entering India from overseas, our team can help.',
  actionLabel = 'Talk to an Expert',
}: CtaBandProps = {}) {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            {eyebrow && <p className={`${styles.eyebrow} ruled-label`}>{eyebrow}</p>}
            <h2 id="cta-title" className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
            <div className={styles.actions}>
              <Button to="/contact" variant="primary" withArrow>{actionLabel}</Button>
              <Button href={SITE.phoneHref} variant="onDark">
                <Icon name="phone" size={16} /> {SITE.phone}
              </Button>
            </div>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Office</dt>
              <dd>{SITE.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={SITE.emailHref}>{SITE.email}</a></dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{SITE.officeHours}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
