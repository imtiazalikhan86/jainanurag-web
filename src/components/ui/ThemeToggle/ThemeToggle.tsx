import { Icon } from '../../common/Icon/Icon';
import { useTheme } from '../../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
}

/**
 * A two-state switch rather than a three-way light/dark/system control.
 *
 * The system preference is still honoured: it decides the theme until someone makes a
 * choice, and that choice then sticks. Exposing "system" as a third visible state buys
 * very little and costs a control most people have to think about.
 */
export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const nextIsDark = theme === 'light';

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggle}
      /* The label says what the control does, not what it currently shows. */
      aria-label={`Switch to ${nextIsDark ? 'dark' : 'light'} theme`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextIsDark ? 'dark' : 'light'} theme`}
    >
      <Icon name={nextIsDark ? 'moon' : 'sun'} size={18} />
    </button>
  );
}
