import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Alternating tones give the page rhythm without extra dividers. */
  tone?: 'default' | 'warm' | 'tint' | 'dark';
  className?: string;
  'aria-labelledby'?: string;
}

export function Section({ children, id, tone = 'default', className = '', ...rest }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${className}`} {...rest}>
      {children}
    </section>
  );
}
