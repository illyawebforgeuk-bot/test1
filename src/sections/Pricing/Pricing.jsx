import React from 'react';
import styles from './Pricing.module.css';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Strategy Consulation',
    price: '$250',
    period: 'one-time',
    description: 'Perfect for founders who need technical architecture direction and scope estimation.',
    features: [
      '60-minute technical deep dive',
      'Architecture blueprint',
      'Detailed scope & estimation',
      'Credited toward full project'
    ],
    cta: 'Book Now',
    variant: 'secondary'
  },
  {
    name: 'Landing Page',
    price: '$1,500',
    period: 'starting at',
    description: 'High-converting pages optimized for SaaS and high-ticket service sales.',
    features: [
      'Custom premium UI/UX design',
      'React/Vite development',
      'Stripe Integration Ready',
      'Performance constraints met',
      'SEO & Mobile optimization'
    ],
    cta: 'Get Quote',
    variant: 'primary',
    popular: true
  },
  {
    name: 'Web Application',
    price: '$5,000',
    period: 'starting at',
    description: 'Complex, scalable applications with authentication, databases, and heavy logic.',
    features: [
      'Fullstack development',
      'Complex state management',
      'API integrations & Webhooks',
      'Scalable database design',
      '30 days post-launch support'
    ],
    cta: 'Discuss Project',
    variant: 'secondary'
  }
];

export const Pricing = () => {
  return (
    <Section id="pricing" dark>
      <div className={styles.header}>
        <h2 className={styles.title}>Transparent Pricing</h2>
        <p className={styles.subtitle}>
          No hidden fees or scope creep. Pay securely via Stripe.
        </p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Card className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.badge}>Most Popular</div>}
              
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>
              
              <div className={styles.features}>
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className={styles.feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant={plan.variant} className={styles.button}>
                {plan.cta}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className={styles.securityBadge}>
        <ShieldCheck size={20} className={styles.shieldIcon} />
        <span>Payments processed securely via Stripe. PCI compliant.</span>
      </div>
    </Section>
  );
};
