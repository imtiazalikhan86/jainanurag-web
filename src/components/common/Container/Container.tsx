import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  /** `narrow` suits prose; the default suits grids and full sections. */
  width?: 'default' | 'narrow';
  as?: ElementType;
  className?: string;
}

export function Container({ children, width = 'default', as: Tag = 'div', className = '' }: ContainerProps) {
  return <Tag className={`${styles.container} ${width === 'narrow' ? styles.narrow : ''} ${className}`}>{children}</Tag>;
}
