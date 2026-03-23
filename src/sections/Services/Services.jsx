import { motion } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Rocket, Layers, Cpu } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    Icon: Rocket,
    title: 'High-Impact Landing',
    audience: 'Early Stage & SaaS',
    description: 'Precision-engineered landing pages designed for conversion. We combine psychological triggers with top-tier performance metrics.',
    price: '$1,500',
    cta: 'Discuss Project',
    popular: false
  },
  {
    Icon: Layers,
    title: 'UI/UX Transformation',
    audience: 'Scale-ups & SMBs',
    description: 'Complete overhaul of your current platform. We resolve friction points to improve user retention and lifetime value.',
    price: '$5,000',
    cta: 'Book Discovery',
    popular: true
  },
  {
    Icon: Cpu,
    title: 'Complex Web Apps',
    audience: 'Ambitious Founders',
    description: 'Architecting your core product from scratch. Scalable React/Next.js systems integrated with complex backend logic.',
    price: 'Custom Block',
    cta: 'Get Technical Quote',
    popular: false
  }
];

export const Services = () => {
  return (
    <Section id="services" className={styles.servicesSection}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Specialized Digital <span className="text-gradient">Engineering</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          We don't just build websites. We engineer high-performance systems 
          tailored to your specific business stage.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={styles.cardContainer}
          >
            <Card className={service.popular ? styles.popularCard : styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <service.Icon size={24} className={styles.icon} />
              </div>
              
              <div className={styles.cardHeader}>
                <span className={styles.audience}>{service.audience}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.cardDescription}>{service.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.priceInfo}>
                  <span className={styles.priceLabel}>Investments from</span>
                  <span className={styles.price}>{service.price}</span>
                </div>
                <Button 
                  variant={service.popular ? 'primary' : 'secondary'} 
                  size="md"
                  fullWidth
                >
                  {service.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
