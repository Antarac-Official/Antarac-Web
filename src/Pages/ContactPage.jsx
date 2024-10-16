import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactPage.module.css'
import antaracFullLogo from '../assets/fullLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import ContactUsCard from '../Components/ContactUsCard';
import phoneIcon from '../assets/phoneIcon.svg';
import mailIcon from '../assets/mailIcon.svg';
import locationIcon from '../assets/locationIcon.svg';

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
          <ContactUsCard icon={phoneIcon} mainInfo={'Call'} subInfo='All days 11am to 5pm.' contactDetails='+91 91102 68071' onClickUrl='tel:+919110268071' style={{ width: '70%' }} />
          <ContactUsCard icon={mailIcon} mainInfo={'Email'} subInfo={`Let's connect.`} contactDetails='admin@antarac.com' onClickUrl='mailto:admin@antarac.com' style={{ width: '70%' }} />
          <ContactUsCard icon={locationIcon} mainInfo={'Address'} subInfo='Visit us.' contactDetails='View on Maps' onClickUrl='https://maps.app.goo.gl/j4JFmt7XzDRxMJmN6' style={{ width: '70%' }} />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeftInfo}>© 2024 Antarac Social Pvt Ltd</div>
          <div className={styles.footerCenterInfo}>
            {/* <a href="" className={styles.footerNavText}>Careers</a> */}
            <Link to="/contact" className={styles.footerNavText} style={{ color: 'black' }}>Contact</Link>
          </div>
          <div className={styles.footerRightInfo} onClick={() => { window.location.href = 'https://www.linkedin.com/company/antarac-app' }}>
            <img src={linkedinLogo} alt="Linkedin Logo" className={styles.linkedinLogo} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;