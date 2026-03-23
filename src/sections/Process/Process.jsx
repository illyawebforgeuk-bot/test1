import { motion } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { Search, PenTool, Code, Send, ShieldCheck } from 'lucide-react';
import styles from './Process.module.css';

const PROCESS_STEPS = [
  {
    Icon: Search,
    title: 'Precision Discovery',
    description: 'We audit your current tech debt and business hurdles. This is where we define the technical roadmap.'
  },
  {
    Icon: PenTool,
    title: 'High-Ticket Design',
    description: 'Establishment of a premium design system. We focus on conversion psychology and user density.'
  },
  {
    Icon: Code,
    title: 'Robust Engineering',
    description: 'Clean, modular React/Vite development. We prioritize performance, accessibility, and scale.'
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous testing of user flows, mobile responsiveness, and Stripe payment edge cases.'
  },
  {
    Icon: Send,
    title: 'Strategic Launch',
    description: 'Seamless handover and deployment. Ongoing retainers keep your architecture ahead of the curve.'
  }
];

export const Process = () => {
  return (
    <Section id="process" dark>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Our <span className="text-gradient">Methodology</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          A battle-tested engineering cycle designed for rapid, reliable delivery of high-end software.
        </motion.p>
      </div>

      <div className={styles.timeline}>
        {PROCESS_STEPS.map((step, index) => (
          <motion.div 
            key={step.title} 
            className={styles.step}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <div className={styles.visualWrapper}>
              <div className={styles.iconCircle}>
                <step.Icon size={22} className={styles.icon} />
              </div>
              {index < PROCESS_STEPS.length - 1 && <div className={styles.connector} />}
            </div>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>
                <span className={styles.stepIndex}>0{index + 1}</span> / {step.title}
              </h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
