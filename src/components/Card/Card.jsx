import React from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div 
      className={clsx(styles.card, hover && styles.hover, className)}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
