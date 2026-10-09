import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Icon } from '../../common/Icon/Icon';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { SITE } from '../../../constants/site';
import { PRIMARY_NAV } from '../../../constants/navigation';
import { isNavItemCurrent } from '../../../utils/navigation';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Open/close lives in the header's local state, not Redux: it is UI state owned by one
 * component tree. Escape closes it, the page behind cannot scroll, and focus moves into
 * the drawer so keyboard users are not left behind on the page.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  /* Which section is expanded. One at a time, so the drawer never becomes a long scroll. */
  const [expanded, setExpanded] = useState<string | null>(null);
  const { pathname, hash } = useLocation();
  useLockBodyScroll(open);

  // Closing the drawer should also collapse it, so it reopens in a predictable state.
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (!open) setExpanded(null);
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  /*
   * Rendered into document.body rather than in place.
   *
   * The header sets backdrop-filter, and a filter on an ancestor makes position: fixed
   * resolve against that ancestor instead of the viewport. Left inside the header, the
   * drawer was confined to a 76px-tall box. A portal puts it back on the viewport.
   */
  return createPortal(
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        // While closed the drawer is still in the DOM, so `inert` removes it from the tab
        // order and the accessibility tree. React 19 supports this as a real boolean prop.
        inert={!open}
      >
        <div className={styles.head}>
          <span className={styles.brand}>{SITE.shortName}</span>
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <Icon name="close" size={22} />
          </button>
        </div>

        <nav aria-label="Mobile" className={styles.nav}>
          <ul className={styles.list}>
            {PRIMARY_NAV.map((entry) => {
              /*
               * A section heading is both a destination and a disclosure. Splitting them
               * into two controls keeps each one honest: the link navigates, the button
               * expands, and neither pretends to be the other.
               */
              if (entry.kind === 'link') {
                return (
                  <li key={entry.href}>
                    <Link
                      to={entry.href}
                      onClick={onClose}
                      className={styles.link}
                      aria-current={isNavItemCurrent(entry.href, pathname, hash) ? 'page' : undefined}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === entry.label;
              const regionId = `drawer-${entry.label.replace(/\s+/g, '-').toLowerCase()}`;
              const children =
                entry.kind === 'mega'
                  ? entry.columns.flatMap((column) =>
                      column.links.map((link) => ({ label: link.label, href: link.href, group: column.heading })),
                    )
                  : entry.links.map((link) => ({ label: link.label, href: link.href, group: undefined }));

              return (
                <li key={entry.href} className={styles.group}>
                  <div className={styles.groupHead}>
                    <Link
                      to={entry.href}
                      onClick={onClose}
                      className={styles.link}
                      aria-current={pathname === entry.href ? 'page' : undefined}
                    >
                      {entry.label}
                    </Link>
                    <button
                      type="button"
                      className={`${styles.disclosure} ${isOpen ? styles.disclosureOpen : ''}`}
                      onClick={() => setExpanded(isOpen ? null : entry.label)}
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${entry.label}`}
                    >
                      <Icon name="chevronDown" size={18} />
                    </button>
                  </div>

                  {/*
                    * The wrapper exists so the list can animate open: a grid row of 0fr to
                    * 1fr is the only way to transition to a content-derived height. `inert`
                    * keeps the collapsed links out of the tab order without `display: none`,
                    * which would make the transition impossible.
                    */}
                  <div
                    id={regionId}
                    className={`${styles.subWrap} ${isOpen ? styles.subWrapOpen : ''}`}
                    inert={!isOpen}
                  >
                    <ul className={styles.subList}>
                      {children.map((child, index) => (
                        <li key={child.href}>
                          {child.group && child.group !== children[index - 1]?.group && (
                            <p className={styles.subHeading}>{child.group}</p>
                          )}
                          <Link
                            to={child.href}
                            onClick={onClose}
                            className={styles.subLink}
                            aria-current={pathname === child.href ? 'page' : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Button to="/contact" variant="primary" fullWidth withArrow onClick={onClose}>
            Book a Consultation
          </Button>
          <a className={styles.contact} href={SITE.phoneHref}>
            <Icon name="phone" size={16} /> {SITE.phone}
          </a>
          <a className={styles.contact} href={SITE.emailHref}>
            <Icon name="mail" size={16} /> {SITE.email}
          </a>
        </div>
      </div>
    </>,
    document.body,
  );
}
