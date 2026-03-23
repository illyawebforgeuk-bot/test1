import React from 'react';
import styles from './Testimonials.module.css';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "WebForge didn't just build our app; they fixed our broken architecture. The speed and quality of delivery completely justified the high price tag.",
    author: "Elena R.",
    role: "Founder, ScaleSaaS"
  },
  {
    quote: "We were quoted 6 months by another agency. WebForge delivered a production-ready MVP with Stripe integration in 5 weeks. Incredible execution.",
    author: "Marcus T.",
    role: "CTO, DataSync"
  },
  {
    quote: "The landing page they built paid for itself in the first 48 hours. The focus on conversion optimization over just 'making it pretty' is what sets them apart.",
    author: "Sarah L.",
    role: "VP Marketing, Flow"
  }
];

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className={styles.header}>
        <h2 className={styles.title}>Don't take our word for it</h2>
        <p className={styles.subtitle}>
          Feedback from founders and technical leaders who hold high standards.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className={styles.card} hover={false}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{test.quote}</p>
              <div className={styles.authorBlock}>
                <div className={styles.avatar}>
                  {test.author.charAt(0)}
                </div>
                <div>
                  <div className={styles.author}>{test.author}</div>
                  <div className={styles.role}>{test.role}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
