import { motion } from 'framer-motion';
import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import { Code2, Zap, Layout, Globe } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <Section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.badgeWrapper}
        >
          <span className={styles.trustBadge}>
            <Zap size={14} className={styles.badgeIcon} />
            Trusted by founders & high-growth SaaS teams
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.title}
        >
          We architect digital products <br />
          that <span className="text-gradient">scale with your vision</span>.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.subtitle}
        >
          High-performance web applications, conversion-optimized landing pages, 
          and production-grade SaaS interfaces. Built for reliability, designed for growth.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.actions}
        >
          <Button variant="primary" size="lg">Book Strategy Call</Button>
          <Button variant="secondary" size="lg">View Our Work</Button>
        </motion.div>
      </div>

      <div className={styles.heroImageWrapper}>
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.heroMockup}
        >
          <div className={styles.mockupHeader}>
            <div className={styles.mockupDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.mockupTitle}>src/app/core/engine.ts</div>
          </div>
          <div className={styles.mockupBody}>
            <pre className={styles.codeBlock}>
              <code>
                <span className={styles.keyword}>interface</span> <span className={styles.className}>EngineConfig</span> {'{'}<br/>
                {'  '}apiKey: <span className={styles.type}>string</span>;<br/>
                {'  '}timeout: <span className={styles.number}>3000</span>;<br/>
                {'  '}retries: <span className={styles.number}>3</span>;<br/>
                {'}'}<br/><br/>
                <span className={styles.keyword}>export const</span> initialize <span className={styles.operator}>=</span> (config: <span className={styles.className}>EngineConfig</span>) {'=>'} {'{'}<br/>
                {'  '}<span className={styles.comment}>// Initializing high-performance middleware</span><br/>
                {'  '}<span className={styles.keyword}>return</span> <span className={styles.className}>Stripe</span>.connect(config.apiKey);<br/>
                {'}'};
              </code>
            </pre>
          </div>
        </motion.div>
        
        {/* Floating elements for visual depth */}
        <motion.div 
          className={styles.floatingIcon} 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', left: '-5%' }}
        >
          <div className={styles.iconCircle}><Layout size={20} /></div>
        </motion.div>
        <motion.div 
          className={styles.floatingIcon} 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ bottom: '10%', right: '-5%' }}
        >
          <div className={styles.iconCircle}><Globe size={20} /></div>
        </motion.div>
      </div>
    </Section>
  );
};
