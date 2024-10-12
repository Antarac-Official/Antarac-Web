import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'
import mockupDesktop from '../assets/mockupDesktop.png';
import antaracFullLogo from '../assets/fullLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';

function HomePage() {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited', value)
  }

  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <div className={styles.insideMain}>
          <div className={styles.mainLeftContainer}>
            <img src={mockupDesktop} alt="App mockup image" className={styles.mockupDesktop} />
          </div>
          <div className={styles.mainRightContainer}>
            <div className={styles.insideRightContainer}>
              <img src={antaracFullLogo} alt="Antarac logo" className={styles.rightLogoContainer} />
              <div className={styles.rightInfo}>An efficient platform catering to a primal human desire - Social Connection.</div>
              <div className={styles.availableSoonContainer}>
                <div className={styles.availableSoonStrik}></div>
                <div className={styles.availableSoonText}>AVAILABLE SOON</div>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formDescriptionContainer}>
                  <div className={styles.formDescription}>Be the first to experience. No spams. Promise!</div>
                </div>
                <div className={styles.formInputContainer}>
                  <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter your email" className={styles.formInput} />
                  <button onSubmit={handleSubmit} className={styles.submitButton}>Notify me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeftInfo}>© 2024 Antarac Social Pvt Ltd</div>
          <div className={styles.footerCenterInfo}>
            <a href="" className={styles.footerNavText}>Careers</a>
            <Link to="/contact" className={styles.footerNavText}>Contact</Link>
          </div>
          <div className={styles.footerRightInfo}>
            <img src={linkedinLogo} alt="Linkedin Logo" className={styles.linkedinLogo} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage