import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className={styles.banner}
        >
          <div className={styles.content}>
            <p className={styles.text}>
              We use strictly necessary and performance cookies to provide a better experience. 
              By clicking "Accept", you agree to our <Link to="/privacy">Privacy Policy</Link>.
            </p>
            <div className={styles.actions}>
              <Button variant="secondary" size="sm" onClick={() => setIsVisible(false)}>
                Decline
              </Button>
              <Button variant="primary" size="sm" onClick={handleAccept}>
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
