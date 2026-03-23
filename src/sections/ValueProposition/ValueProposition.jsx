import React from 'react';
import styles from './ValueProposition.module.css';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { Zap, Code2, TrendingUp, CreditCard, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We ship production-ready products in weeks, not months. Speed without compromising quality.'
  },
  {
    icon: Code2,
    title: 'Clean, Scalable Code',
    description: 'Built on modern React and Vite architectures. Code that your future engineering team will love.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion-Focused Design',
    description: 'Every pixel is designed to turn visitors into paying customers. Data-driven UX decisions.'
  },
  {
    icon: CreditCard,
    title: 'Stripe-Ready Integrations',
    description: 'Seamless Stripe checkouts, subscriptions, and payment links built right in.'
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Support',
    description: 'We do not just launch and leave. We offer ongoing maintenance and feature development.'
  }
];

export const ValueProposition = () => {
  return (
    <Section id="value" dark>
      <div className={styles.header}>
        <h2 className={styles.title}>Why top teams choose WebForge</h2>
        <p className={styles.subtitle}>
          We combine high-end aesthetic design with rigorous engineering standards.
        </p>
      </div>

      <div className={styles.grid}>
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDescription}>{value.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
