import { forwardRef, type ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Alternating tones give the page rhythm without extra dividers. */
  tone?: 'default' | 'warm' | 'tint' | 'dark';
  className?: string;
  'aria-labelledby'?: string;
  /** Set once the section has scrolled into view, to drive the `.reveal` / `.reveal-group`
   *  entrance of its own contents (see responsive.css). Pair with `useInViewOnce` and the
   *  forwarded ref. */
  'data-inview'?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, id, tone = 'default', className = '', ...rest },
  ref,
) {
  return (
    <section ref={ref} id={id} className={`${styles.section} ${styles[tone]} ${className}`} {...rest}>
      {children}
    </section>
  );
});
