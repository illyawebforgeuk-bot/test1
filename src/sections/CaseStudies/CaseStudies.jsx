import { motion } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { TrendingUp, Zap, Target } from 'lucide-react';
import styles from './CaseStudies.module.css';

const CASE_STUDIES = [
  {
    icon: Zap,
    tag: 'SaaS Platform',
    title: 'Solving Query Latency for Data-Heavy Dashboards',
    description: 'A global analytics provider was suffering 10s+ load times, leading to 35% user drop-off. We re-engineered their data visualization layer.',
    metric: '92%',
    label: 'Load speed reduction',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  {
    icon: TrendingUp,
    tag: 'FinTech / Stripe',
    title: 'Optimizing high-ticket B2B checkout conversion',
    description: 'A SaaS platform was losing 40% of leads at the final payment step. We designed a frictionless Stripe flow with multi-currency logic.',
    metric: '28%',
    label: 'Checkout conversion uplift',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)'
  },
  {
    icon: Target,
    tag: 'Web Application',
    title: 'MVP Engineering for a YC-backed startup',
    description: 'Turned a conceptual wireframe into a production-ready React app in 4 weeks, securing their $2M seed round on schedule.',
    metric: '4wk',
    label: 'Concept to Production',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)'
  }
];

export const CaseStudies = () => {
  return (
    <Section id="case-studies" className={styles.caseSection}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Proven <span className="text-gradient">Deliverables</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          We don't just write code. We eliminate business bottlenecks through precision engineering.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {CASE_STUDIES.map((cs, index) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={styles.cardWrapper}
          >
            <Card className={styles.caseCard}>
              <div className={styles.visual} style={{ background: cs.gradient }}>
                <cs.icon size={32} color="white" strokeWidth={1.5} />
                <span className={styles.tag}>{cs.tag}</span>
              </div>
              
              <div className={styles.body}>
                <h3 className={styles.caseTitle}>{cs.title}</h3>
                <p className={styles.caseDescription}>{cs.description}</p>
                
                <div className={styles.metricRow}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>{cs.metric}</span>
                    <span className={styles.metricLabel}>{cs.label}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
