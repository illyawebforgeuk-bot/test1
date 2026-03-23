import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={styles.header}
    >
      <div className={clsx('container', styles.navContainer)}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon} />
          <span>WebForge</span>
        </Link>
        
        <nav className={styles.navLinks}>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#process" className={styles.link}>Process</a>
          <a href="#pricing" className={styles.link}>Pricing</a>
          <a href="#case-studies" className={styles.link}>Work</a>
        </nav>

        <div className={styles.actions}>
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
