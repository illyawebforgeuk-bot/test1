import React from 'react';
import styles from './StripeIntegration.module.css';
import { Section } from '../../components/Section/Section';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, RefreshCw, FileText } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'We never touch your sensitive data. All payments are processed securely through Stripe with PCI compliance out of the box.'
  },
  {
    icon: RefreshCw,
    title: 'Frictionless Subscriptions',
    description: 'Automated recurring billing for retainers and ongoing support plans. Manage everything from a secure portal.'
  },
  {
    icon: FileText,
    title: 'Professional Invoicing',
    description: 'Clean, compliant invoices automatically generated and sent for every transaction.'
  }
];

export const StripeIntegration = () => {
  return (
    <Section id="stripe">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>WebForge x Stripe</div>
          <h2 className={styles.title}>Seamless payments powered by Stripe</h2>
          <p className={styles.description}>
            We utilize Stripe's world-class infrastructure to handle all financial transactions. 
            Enjoy a smooth, secure checkout experience whether you're paying for a one-time project 
            or a monthly retainer.
          </p>
          
          <div className={styles.features}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    <Icon size={20} className={styles.icon} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.checkoutMockup}>
            <div className={styles.mockupHeader}>Pay WebForge LTD</div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupRow}>
                <span>Landing Page Development</span>
                <span>$1,500.00</span>
              </div>
              <div className={styles.mockupTotal}>
                <span>Total due</span>
                <span>$1,500.00</span>
              </div>
              <div className={styles.mockupInput}>card number</div>
              <div className={styles.mockupInputSmall}>
                <div className={styles.inputHalf}>MM / YY</div>
                <div className={styles.inputHalf}>CVC</div>
              </div>
              <div className={styles.mockupButton}>Pay $1,500.00</div>
            </div>
            <div className={styles.mockupFooter}>
              By paying, you agree to our <Link to="/terms">Terms</Link> and <Link to="/refund">Refund Policy</Link>.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
