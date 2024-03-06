import { ReactNode } from 'react';
import styles from './disabled-label.module.css';

export default function DisabledLabel({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>;
}
