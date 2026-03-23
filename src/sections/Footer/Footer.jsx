import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}></div>
              <span>Webforge LTD</span>
            </div>
            <p className={styles.description}>
              Premium engineering and conversion-optimized design for fast-growing technology companies.
            </p>
          </div>
          
          <div className={styles.linksWrapper}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Solutions</h4>
              <a href="#services" className={styles.link}>Services</a>
              <a href="#process" className={styles.link}>Architecture</a>
              <a href="#pricing" className={styles.link}>Investment</a>
              <a href="#case-studies" className={styles.link}>Portfolio</a>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Legal</h4>
              <Link to="/terms" className={styles.link}>Terms & Conditions</Link>
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link to="/refund" className={styles.link}>Refund Policy</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <span className={styles.text}>hello@webforgeltd.co.uk</span>
              <span className={styles.text}>+44 20 7946 0000</span>
              <div className={styles.addressBlock}>
                <span className={styles.text}>Registered Office:</span>
                <span className={styles.text}>Office 14233, 182-184 High Street North</span>
                <span className={styles.text}>East Ham, London</span>
                <span className={styles.text}>E6 2JA, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.legalInfo}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Webforge LTD. All rights reserved.
            </p>
            <div className={styles.companyDetails}>
              <span>Company No: 16685746</span>
              <span>SIC: 62012</span>
            </div>
          </div>
          <div className={styles.badges}>
            <span className={styles.stripeBadge}>
              Secure payments via **Stripe**
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
