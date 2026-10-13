import { Button } from '../../../../components/common/Button/Button';
import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { Icon } from '../../../../components/common/Icon/Icon';
import { FAQ_INTRO, FAQS } from '../../../../constants/home-content';
import styles from './FaqSection.module.css';

/**
 * Introduction on the left, questions on the right. The left column holds still on wide
 * screens so the invitation to ask stays beside whichever answer is open.
 */
export function FaqSection() {
  return (
    <Section id="faq" tone="tint" aria-labelledby="faq-title">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <p className={`${styles.eyebrow} ruled-label`}>{FAQ_INTRO.eyebrow}</p>
          <h2 id="faq-title" className={styles.title}>{FAQ_INTRO.title}</h2>
          {FAQ_INTRO.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>{paragraph}</p>
          ))}

          <div className={styles.ask}>
            <h3 className={styles.askTitle}>{FAQ_INTRO.askTitle}</h3>
            <p className={styles.askBody}>{FAQ_INTRO.askBody}</p>
            <Button to="/contact" variant="primary" withArrow>{FAQ_INTRO.askAction}</Button>
          </div>
        </div>

        <div className={styles.faqs}>
          {FAQS.map((faq) => (
            /* A native disclosure: keyboard accessible and searchable with no JavaScript. */
            <details key={faq.question} className={styles.faq}>
              <summary>
                {faq.question}
                <Icon name="chevronDown" size={18} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
