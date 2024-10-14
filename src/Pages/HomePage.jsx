import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import styles from './HomePage.module.css'
import mockupDesktop from '../assets/mockupDesktop.png';
import mockupMobile from '../assets/mockupMobile.png';
import antaracFullLogo from '../assets/fullLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';

function HomePage() {
  const [value, setValue] = useState('')

  // useEffect(() => {
  //   const pathname = window.location.pathname;

  //   if (pathname === '/contact-us') window.location.href = 'https://antarac.com/contact';
  //   else if (pathname === '/terms-of-service') window.location.href = 'https://theactivityapp.framer.website/terms';
  //   else if (pathname === '/privacy-policy') window.location.href = 'https://theactivityapp.framer.website/privacy';
  //   // else window.location.href = 'https://antarac.com/'
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('https://script.google.com/macros/s/AKfycby1D1N_YNqHfKNp6rKEPwlhA-GK8e99x-IoaJphUyC36Y6j2Teb8Roy1v5Fs1vnPS4hkw/exec', new URLSearchParams({ email: value }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(() => {
        console.log('Email registered successfully')
      }).catch((reject) => {
        console.log('Error', reject)
      })

    alert("You'll be notified, thank you for your Email.")
    setValue('')
  }

  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <div className={styles.insideMain}>
          <div className={styles.mainLeftContainer}>
            <img src={mockupDesktop} alt="App mockup image" className={styles.mockupDesktop} />
            <img src={mockupMobile} alt="App mockup image" className={styles.mockupMobile} />
          </div>
          <div className={styles.mainRightContainer}>
            <div className={styles.insideRightContainer}>
              <img src={antaracFullLogo} alt="Antarac logo" className={styles.rightLogoContainer} />
              <div className={styles.rightInfo}>An efficient platform catering to a primal human desire - Social Connection.</div>
              <div className={styles.availableSoonContainer}>
                <div className={styles.availableSoonStrik}></div>
                <div className={styles.availableSoonText}>AVAILABLE SOON</div>
              </div>
              <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.formContainer}>
                  <div className={styles.formDescriptionContainer}>
                    <div className={styles.formDescription}>Be the first to experience. No spams. Promise!</div>
                  </div>
                  <div className={styles.formInputContainer}>
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter your email" className={styles.formInput} />
                    <button onSubmit={handleSubmit} className={styles.submitButton}>Notify me</button>
                  </div>
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
            {/* <a href="" className={styles.footerNavText}>Careers</a> */}
            <Link to="/contact" className={styles.footerNavText}>Contact</Link>
          </div>
          <div className={styles.footerRightInfo} onClick={() => { window.location.href = 'https://www.linkedin.com/company/antarac-app' }}>
            <img src={linkedinLogo} alt="Linkedin Logo" className={styles.linkedinLogo} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage