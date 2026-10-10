import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import bannerArt from '../../../assets/images/advisory-desk.jpg';
import styles from './PageHero.module.css';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}

/**
 * The opening band every inner page shares, so the step down from the homepage is
 * consistent and each page states where it sits before it says anything else.
 */
export function PageHero({ eyebrow, title, lead, crumbs, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {/*
        * The banner every inner page shares. It shows the work rather than the city — a
        * skyline here read as a property developer, which is the wrong business. Decorative,
        * so the alt text is empty: nothing in it is information the copy does not carry.
        */}
      <img className={styles.art} src={bannerArt} alt="" width={1600} height={388} fetchPriority="high" decoding="async" />
      <Container className={styles.inner}>
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              {crumbs.map((crumb, index) => (
                <li key={crumb.label}>
                  {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                  {index < crumbs.length - 1 && <Icon name="chevronRight" size={14} aria-hidden />}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </Container>
    </section>
  );
}
