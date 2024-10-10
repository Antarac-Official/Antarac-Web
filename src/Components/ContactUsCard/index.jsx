import React from 'react';
import styles from './index.module.css';

const ContactUsCard = ({ icon, mainInfo, subInfo, contactDetails, style }) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="icon" className={styles.icon} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.mainInfo}>{mainInfo}</div>
        <div className={styles.subInfo}>{subInfo}</div>
      </div>
      <div className={styles.contactDetails}>{contactDetails}</div>
    </div>
  );
};

export default ContactUsCard;

