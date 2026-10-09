import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import { PRIMARY_NAV } from '../../../constants/navigation';
import type { NavEntry } from '../../../types/navigation';
import { isNavItemCurrent } from '../../../utils/navigation';
import styles from './PrimaryNav.module.css';

/**
 * The desktop navigation, including the two kinds of dropdown.
 *
 * Which menu is open is local state. It belongs to this component tree and nothing else
 * reads it, so it has no business in Redux.
 *
 * Every trigger is a real link to a real page. The panel is a shortcut into the section,
 * never the only route in — which is what keeps the nav usable on a touch screen, where
 * there is no hover, and for anyone who clicks before a panel has opened.
 */
export function PrimaryNav() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const { pathname, hash } = useLocation();

  /*
   * A route change means the user has gone somewhere, so the panel should not survive it —
   * including a change from the browser's back button, which no click handler would catch.
   * Adjusting state during render closes it in the same pass that renders the new route,
   * rather than painting one frame with a stale menu hanging open.
   */
  const [lastLocation, setLastLocation] = useState(pathname + hash);
  if (pathname + hash !== lastLocation) {
    setLastLocation(pathname + hash);
    setOpenLabel(null);
  }

  useEffect(() => {
    if (!openLabel) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenLabel(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openLabel]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  /*
   * A grace period, so moving diagonally from the trigger across the gap into the panel
   * does not close it mid-travel. Long enough to be forgiving, short enough that the menu
   * still feels like it is tracking the pointer.
   */
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenLabel(null), 180);
  };
  const cancelClose = () => window.clearTimeout(closeTimer.current);

  const open = (label: string) => {
    cancelClose();
    setOpenLabel(label);
  };

  /* A section is current when the browser is anywhere inside it, not only on its hub. */
  const isSectionCurrent = (entry: NavEntry) =>
    entry.href === '/'
      ? isNavItemCurrent('/', pathname, hash)
      : pathname === entry.href || pathname.startsWith(`${entry.href}/`);

  return (
    <nav
      className={styles.nav}
      aria-label="Primary"
      ref={navRef}
      onBlurCapture={(event) => {
        if (!navRef.current?.contains(event.relatedTarget as Node | null)) setOpenLabel(null);
      }}
    >
      <ul className={styles.list}>
        {PRIMARY_NAV.map((entry) => {
          const hasPanel = entry.kind !== 'link';
          const isOpen = openLabel === entry.label;
          const panelId = `nav-panel-${entry.label.replace(/\s+/g, '-').toLowerCase()}`;

          return (
            <li
              key={entry.href}
              className={`${styles.item} ${hasPanel ? styles.hasPanel : ''} ${isOpen ? styles.itemOpen : ''}`}
              /*
                * `mouseover`, not `mouseenter`. mouseenter fires only when the pointer
                * crosses into the item from outside it, so after moving down into the
                * panel and back up to the trigger — both inside this item — nothing fired
                * and the pending close ran: the menu shut while the pointer sat on the
                * trigger, and would not reopen until the pointer left the item entirely.
                * mouseover bubbles from every descendant, so any movement anywhere in the
                * item re-asserts the open state and cancels a pending close.
                */
              onMouseOver={hasPanel ? () => open(entry.label) : undefined}
              onMouseLeave={hasPanel ? scheduleClose : undefined}
            >
              <Link
                to={entry.href}
                className={styles.trigger}
                aria-current={isSectionCurrent(entry) ? 'page' : undefined}
                aria-expanded={hasPanel ? isOpen : undefined}
                aria-controls={hasPanel ? panelId : undefined}
                onFocus={hasPanel ? () => open(entry.label) : undefined}
              >
                {entry.label}
                {hasPanel && <Icon name="chevronDown" size={14} className={styles.chevron} />}
              </Link>

              {entry.kind === 'mega' && (
                /*
                 * `inert` rather than `hidden`: a hidden element is display:none, which
                 * cannot transition, so the panel used to appear with an animation and
                 * then vanish instantly. `inert` keeps it out of the tab order and the
                 * accessibility tree while CSS fades and lifts it in both directions.
                 */
                <div
                  id={panelId}
                  className={`${styles.panel} ${styles.mega} ${isOpen ? styles.panelOpen : ''}`}
                  inert={!isOpen}
                >
                  <div className={styles.megaColumns}>
                    {entry.columns.map((column) => (
                      <div key={column.heading} className={styles.column}>
                        <p className={styles.columnHeading}>{column.heading}</p>
                        <ul className={styles.columnList}>
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link to={link.href} className={styles.megaLink}>
                                <span className={styles.megaIcon} aria-hidden="true">
                                  <Icon name={link.icon} size={18} />
                                </span>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panelFoot}>
                    <p className={styles.note}>{entry.note}</p>
                    <Link to={entry.cta.href} className={styles.panelCta}>
                      {entry.cta.label} <Icon name="arrowRight" size={16} />
                    </Link>
                  </div>
                </div>
              )}

              {entry.kind === 'panel' && (
                <div
                  id={panelId}
                  className={`${styles.panel} ${styles.narrow} ${isOpen ? styles.panelOpen : ''}`}
                  inert={!isOpen}
                >
                  <p className={styles.columnHeading}>{entry.heading}</p>
                  <ul className={styles.panelList}>
                    {entry.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className={styles.panelLink}>
                          <span>
                            <strong>{link.label}</strong>
                            <small>{link.description}</small>
                          </span>
                          <Icon name="arrowRight" size={16} className={styles.panelArrow} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={entry.cta.href} className={styles.panelButton}>
                    {entry.cta.label} <Icon name="arrowRight" size={16} />
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
