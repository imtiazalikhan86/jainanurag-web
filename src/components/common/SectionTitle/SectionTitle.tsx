import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  /** Supplied when a section uses aria-labelledby to name itself by this heading. */
  id?: string;
}

export function SectionTitle({ eyebrow, title, description, align = 'center', tone = 'light', id }: SectionTitleProps) {
  return (
    <header className={`${styles.wrap} ${styles[align]} ${tone === 'dark' ? styles.onDark : ''} reveal`}>
      {eyebrow && <p className={`${styles.eyebrow} ruled-label`}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
