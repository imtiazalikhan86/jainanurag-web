import { Button } from '../components/common/Button/Button';
import { Container } from '../components/common/Container/Container';
import { Section } from '../components/common/Section/Section';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import styles from './PagePlaceholder.module.css';

interface PagePlaceholderProps {
  title: string;
  description: string;
}

/**
 * Routes referenced by the homepage exist from day one, so no navigation or CTA leads to a
 * dead end while the remaining screens are built.
 */
export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  useDocumentMeta({
    title: `${title} | Jainanurag & Associates`,
    description,
  });

  return (
    <Section>
      <Container width="narrow" className={styles.wrap}>
        <p className={styles.eyebrow}>Coming next</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button to="/" variant="secondary">Back to home</Button>
          <Button to="/contact" variant="primary" withArrow>Talk to an Expert</Button>
        </div>
      </Container>
    </Section>
  );
}
