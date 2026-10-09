import { Link } from 'react-router-dom';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import { FOOTER_LINKS, SITE } from '../../../constants/site';
import styles from './Footer.module.css';

// Resolved once at module load: calling Date() during render makes the output unstable.
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.mark} aria-hidden="true">J&amp;A</span>
            <p className={styles.name}>{SITE.name}</p>
            <p className={styles.descriptor}>{SITE.descriptor}</p>
            <p className={styles.blurb}>{SITE.tagline}</p>
          </div>

          <nav className={styles.col} aria-label="Services">
            <h2 className={styles.colTitle}>Services</h2>
            <ul className={styles.list}>
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="Company">
            <h2 className={styles.colTitle}>Company</h2>
            <ul className={styles.list}>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Contact</h2>
            <ul className={styles.list}>
              <li className={styles.contactRow}>
                <Icon name="pin" size={16} />
                <span>{SITE.location}</span>
              </li>
              <li className={styles.contactRow}>
                <Icon name="phone" size={16} />
                <a href={SITE.phoneHref} className={styles.link}>{SITE.phone}</a>
              </li>
              <li className={styles.contactRow}>
                <Icon name="mail" size={16} />
                <a href={SITE.emailHref} className={styles.link}>{SITE.email}</a>
              </li>
              <li className={styles.contactRow}>
                <Icon name="clock" size={16} />
                <span>{SITE.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {CURRENT_YEAR} {SITE.name}. All rights reserved.</p>
          <ul className={styles.legal}>
            <li><Link to="/privacy" className={styles.link}>Privacy Policy</Link></li>
            <li><Link to="/terms" className={styles.link}>Terms</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
