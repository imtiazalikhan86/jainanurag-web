import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import logo from '../../../assets/images/logo-jainanurag.png';
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
        {/*
          * The supplied logo is a navy lockup with the wordmark and "Chartered
          * Accountants" already set, so it replaces the old lettermark-plus-text
          * construction entirely. Its field is the same navy as the header, which is why
          * the header is navy: the logo sits in it with no visible plate around it.
          */}
        <Link to="/" className={styles.brand} aria-label={`${SITE.name}, home`}>
          <img className={styles.logo} src={logo} alt={SITE.name} width={298} height={119} />
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
