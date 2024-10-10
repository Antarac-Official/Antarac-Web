import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactPage.module.css'
import antaracFullLogo from '../assets/fullLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import ContactUsCard from '../Components/ContactUsCard';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <img src={antaracFullLogo} alt="Antarac logo" className={styles.logo} />
        <div className={styles.contactusContainer}>
          <div className={styles.contactusStrik}></div>
          <div className={styles.contactusText}>Contact Us</div>
        </div>
        <div className={styles.cardContainer}>
          <ContactUsCard />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeftInfo}>© 2024 Antarac Social Pvt Ltd</div>
          <div className={styles.footerCenterInfo}>
            <a href="" className={styles.footerNavText}>Careers</a>
            <Link to="/contact" className={styles.footerNavText} style={{ color: 'black' }}>Contact</Link>
          </div>
          <div className={styles.footerRightInfo}>
            <img src={linkedinLogo} alt="Linkedin Logo" className={styles.linkedinLogo} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;