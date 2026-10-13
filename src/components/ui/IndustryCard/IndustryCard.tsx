import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './IndustryCard.module.css';

interface IndustryCardProps {
  icon: IconName;
  name: string;
  /** Optional: without one the card is a single row, icon beside the name. */
  description?: string;
}

export function IndustryCard({ icon, name, description }: IndustryCardProps) {
  return (
    <li className={`${styles.card} ${description ? '' : styles.compact}`}>
      <Icon name={icon} size={24} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </li>
  );
}
