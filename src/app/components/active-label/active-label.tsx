import { ReactNode } from 'react';
import styles from './active-label.module.css';

export default function ActiveLabel({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>;
}
