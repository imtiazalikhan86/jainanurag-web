import styles from './Loading.module.css';

/** Shown while a lazily loaded route arrives. Announced politely rather than silently. */
export function Loading() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className="visually-hidden">Loading page</span>
    </div>
  );
}
