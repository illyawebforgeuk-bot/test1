import React from 'react';
import styles from './Section.module.css';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export const Section = ({ 
  children, 
  id, 
  className, 
  dark = false,
  containerClassName,
  ...props 
}) => {
  return (
    <section 
      id={id} 
      className={clsx(styles.section, dark && styles.darkSection, className)}
      {...props}
    >
      <div className={clsx('container', styles.container, containerClassName)}>
        {children}
      </div>
    </section>
  );
};
