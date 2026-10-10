import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../common/Container/Container';
import { Icon } from '../../common/Icon/Icon';
import skyline from '../../../assets/images/mumbai-skyline-dusk.jpg';
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
        * A small Mumbai banner, shared by every inner page. Decorative, so the alt text is
        * empty: the city is already named in the copy and in the page title. It sits to
        * the right of the text and is dropped entirely on narrow screens, where the copy
        * runs full width and an image behind it would only fight the headline.
        */}
      <img className={styles.art} src={skyline} alt="" width={1600} height={900} fetchPriority="high" decoding="async" />
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
