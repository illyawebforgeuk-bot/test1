import React from 'react';
import styles from './Legal.module.css';

export const LegalSection = ({ title, children, index }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>
      <span className={styles.sectionNumber}>{index}.</span> {title}
    </h2>
    <div className={styles.sectionContent}>
      {children}
    </div>
  </section>
);

export const LegalLayout = ({ title, lastUpdated, children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.meta}>Last updated: {lastUpdated}</p>
    </header>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
