import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Section } from '../../components/Section/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is included in the $250 Discovery Call?",
    answer: "You get a 60-minute technical session with a senior engineer. We review your product requirements, current stack (if any), and provide a concrete architecture plan. You'll leave with a clear roadmap and an exact price estimate. This cost is credited toward your project if you choose to move forward."
  },
  {
    question: "How do you handle payments and subscriptions?",
    answer: "All payments are processed securely through Stripe. For projects, we typically take a 50% deposit upfront and 50% upon completion. For monthly retainers and ongoing support, we use Stripe Billing to automatically charge your card each month."
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the digital and custom nature of our services, we do not offer refunds once work has commenced. For the Discovery Call, you can cancel and get a full refund up to 24 hours before the scheduled time."
  },
  {
    question: "How long does a typical Web Application build take?",
    answer: "Most custom web applications take between 4 to 8 weeks, depending on complexity. Landing pages are typically delivered in 1 to 2 weeks. We never sacrifice quality for speed, but our optimized tech stack allows us to move fast."
  },
  {
    question: "Do you guarantee business outcomes?",
    answer: "We guarantee world-class engineering, premium design, and scalable code. However, we cannot guarantee sales, conversions, or business success, as those rely heavily on your product-market fit and marketing efforts."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" dark>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about working with us.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={styles.icon} 
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
