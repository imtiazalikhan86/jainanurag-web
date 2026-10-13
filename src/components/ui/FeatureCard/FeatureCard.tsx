import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
  /** Icon above the text rather than beside it, for narrow cards in a four-up row. */
  stacked?: boolean;
  /**
   * Makes the whole card a link. The title is the link and its hit area is stretched over
   * the card, so a screen reader hears one link named by the title, not a card of text.
   */
  href?: string;
}

/** Used for trust indicators and differentiators: icon, heading, one line of substance. */
export function FeatureCard({ icon, title, description, tone = 'light', stacked = false, href }: FeatureCardProps) {
  return (
    <li
      className={`${styles.card} ${tone === 'dark' ? styles.dark : ''} ${stacked ? styles.stacked : ''} ${href ? styles.linked : ''}`}
    >
      <span className={styles.iconWrap}>
        <Icon name={icon} size={22} />
      </span>
      <div>
        <h3 className={styles.title}>
          {href ? (
            <Link to={href} className={styles.link}>
              {title}
              <Icon name="arrowRight" size={16} className={styles.arrow} />
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
