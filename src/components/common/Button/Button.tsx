import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';
type Size = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  to?: never;
  href?: never;
}

type AnchorRest = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'>;

interface ButtonAsLink extends BaseProps, AnchorRest {
  /** Internal route: rendered as a react-router Link so navigation stays client side. */
  to: string;
  href?: never;
}

interface ButtonAsAnchor extends BaseProps, AnchorRest {
  /** External or protocol link (tel:, mailto:): rendered as a plain anchor. */
  href: string;
  to?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/**
 * One button, three renderings. A call to action is sometimes a route, sometimes a phone
 * number and sometimes an action; letting the component decide keeps the markup semantic
 * instead of styling a div to look like a button.
 */
export function Button({ children, variant = 'primary', size = 'md', withArrow = false, fullWidth = false, className = '', ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], styles[size], fullWidth ? styles.full : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Icon name="arrowRight" size={18} className={styles.arrow} />}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...(linkRest as Record<string, unknown>)}>
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...(anchorRest as Record<string, unknown>)}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
