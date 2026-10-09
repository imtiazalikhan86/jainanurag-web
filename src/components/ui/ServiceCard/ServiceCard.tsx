import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  index: number;
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

/**
 * The whole card is one link, so the hit area matches what looks clickable. The arrow and
 * "Learn more" are decorative repeats of that link rather than a second tab stop.
 */
export function ServiceCard({ index, icon, title, description, href }: ServiceCardProps) {
  return (
    <li className={styles.item}>
      <Link to={href} className={styles.card}>
        <span className={styles.index} aria-hidden="true">{String(index).padStart(2, '0')}</span>
        <span className={styles.iconWrap}>
          <Icon name={icon} size={26} />
        </span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.more}>
          Learn more
          <Icon name="arrowRight" size={16} className={styles.arrow} />
        </span>
      </Link>
    </li>
  );
}
