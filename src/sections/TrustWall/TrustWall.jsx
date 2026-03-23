import { motion } from 'framer-motion';
import styles from './TrustWall.module.css';

const LOGOS = [
  'Vercel', 'Linear', 'Supabase', 'Stripe', 'Framer', 'GitHub'
];

export const TrustWall = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <p className={styles.label}>Integrated with modern infrastructure & standards</p>
        <div className={styles.logos}>
          {LOGOS.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.logoItem}
            >
              <span className={styles.logoName}>{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
