import { useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
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

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const RIPPLE_DURATION_MS = 650;

/**
 * A ripple on click rather than hover: a circle sized to the button's own diagonal,
 * centred on the pointer and scaled up from zero while it fades — the classic Material
 * ripple, hand-rolled since this project carries no animation library. Each one is
 * removed from state once its animation finishes, so a long click-heavy session never
 * accumulates stale nodes. Skipped entirely under `prefers-reduced-motion`.
 */
function useRipple(reducedMotion: boolean) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const trigger = (event: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now() + Math.random();

    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, RIPPLE_DURATION_MS);
  };

  return { ripples, trigger };
}

/**
 * One button, three renderings. A call to action is sometimes a route, sometimes a phone
 * number and sometimes an action; letting the component decide keeps the markup semantic
 * instead of styling a div to look like a button.
 */
export function Button({ children, variant = 'primary', size = 'md', withArrow = false, fullWidth = false, className = '', ...rest }: ButtonProps) {
  const reducedMotion = useReducedMotion();
  const { ripples, trigger } = useRipple(reducedMotion);

  const classes = [styles.btn, styles[variant], styles[size], fullWidth ? styles.full : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={styles.ripple}
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
          aria-hidden="true"
        />
      ))}
      <span>{children}</span>
      {withArrow && <Icon name="arrowRight" size={18} className={styles.arrow} />}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, onClick, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link
        to={to}
        className={classes}
        onClick={(event) => {
          trigger(event);
          onClick?.(event);
        }}
        {...(linkRest as Record<string, unknown>)}
      >
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, onClick, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          trigger(event);
          onClick?.(event);
        }}
        {...(anchorRest as Record<string, unknown>)}
      >
        {content}
      </a>
    );
  }

  const { onClick, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type="button"
      className={classes}
      onClick={(event) => {
        trigger(event);
        onClick?.(event);
      }}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
