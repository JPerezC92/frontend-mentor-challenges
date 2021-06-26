import React, { useRef } from 'react';
import Link from 'next/link';

import { BASE_URL } from '@/helpers/globals';
import styles from './Alert.module.scss';

const Alert: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleRemoveAlert = (
    _e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    ref.current.remove();
  };

  return (
    <div className={styles.alert} ref={ref}>
      <span className={styles.alert__content}>
        <span>
          You can view all my solutions{' '}
          <Link href={BASE_URL}>
            <a className={styles.link}>here</a>
          </Link>
        </span>
      </span>

      <button className={styles.alert__close} onClick={handleRemoveAlert}>
        <span>X</span>
      </button>
    </div>
  );
};

export default Alert;
