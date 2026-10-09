import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { useScrolled } from '../../../hooks/useScrolled';
import { SITE } from '../../../constants/site';
import styles from './Header.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={`${SITE.name}, home`}>
          <span className={styles.mark} aria-hidden="true">J&amp;A</span>
          <span className={styles.brandText}>
            <strong>{SITE.name}</strong>
            <small>{SITE.descriptor}</small>
          </span>
        </Link>

        <div className={styles.nav}>
          <PrimaryNav />
        </div>

        {/*
          * No phone number here. The container caps at 1200px, and the brand, the seven-item
          * nav and the CTA already need about 1150 of it, so a phone number could only ever
          * overlap the nav. It stays in the drawer, the footer and the closing call to action.
          */}
        <div className={styles.actions}>
          <Button to="/contact" variant="primary" className={styles.cta}>
            Book a Consultation
          </Button>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
