import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
}

/** Used for trust indicators and differentiators: icon, heading, one line of substance. */
export function FeatureCard({ icon, title, description, tone = 'light' }: FeatureCardProps) {
  return (
    <li className={`${styles.card} ${tone === 'dark' ? styles.dark : ''}`}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={22} />
      </span>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
