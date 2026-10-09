import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './IndustryCard.module.css';

interface IndustryCardProps {
  icon: IconName;
  name: string;
  description: string;
}

export function IndustryCard({ icon, name, description }: IndustryCardProps) {
  return (
    <li className={styles.card}>
      <Icon name={icon} size={24} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
