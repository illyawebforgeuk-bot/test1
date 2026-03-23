import React from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as = 'button',
  href,
  onClick,
  ...props 
}) => {
  const Component = as === 'a' ? motion.a : motion.button;
  
  const baseClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  return (
    <Component 
      className={baseClasses}
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};
