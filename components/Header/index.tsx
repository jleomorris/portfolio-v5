import React from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import styles from '../../styles/Header.module.scss';

// Variants
const header = {
  initial: {
    opacity: 0,
    y: -180,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.6,
    },
  },
};

const Header = () => {
  return (
    <motion.div
      className={styles.header}
      variants={header}
      initial='initial'
      animate='animate'
    >
      <div className={styles.headerInner}>
        <div className={styles.logo}>Ollie</div>
        <nav className={styles.nav}>
          <li className={styles.navLi}>
            <a className={styles.navLinks} href='/design'>
              Design
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLinks} href='/strategy'>
              Strategy
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLinks} href='/cases'>
              Cases
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLinks} href='/about'>
              About
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLinks} href='/why'>
              Why work with us?
            </a>
          </li>
        </nav>
        <div className={styles.contact}>
          <a className={styles.contactLink} href='/contact'>
            Let's work together
          </a>
        </div>
        {/* <div className={styles.hamburgerMenu}>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;
