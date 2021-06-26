import React from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
