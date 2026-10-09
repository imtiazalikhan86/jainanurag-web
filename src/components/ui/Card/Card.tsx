import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  /** `lift` adds the hover elevation used by interactive cards. */
  interactive?: boolean;
  tone?: 'light' | 'dark';
  className?: string;
  as?: 'div' | 'li' | 'article';
}

export function Card({ children, interactive = false, tone = 'light', className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag className={`${styles.card} ${styles[tone]} ${interactive ? styles.interactive : ''} ${className}`}>
      {children}
    </Tag>
  );
}
