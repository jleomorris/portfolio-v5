import React from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import styles from '../../styles/Header.module.scss';
// Next
import Link from 'next/link';

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
        <div className={styles.logo}>Jleo</div>
        <nav className={styles.nav}>
          <li className={styles.navLi}>
            <Link href='/about'>
              <a className={`${styles.navLinks} hover:underline pb-1`}>About</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href='/projects'>
              <a className={`${styles.navLinks} hover:underline pb-1`}>
                Projects
              </a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href='/desktops'>
              <a className={`${styles.navLinks} hover:underline pb-1`}>
                Desktops
              </a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href='/contact'>
              <a className={`${styles.navLinks} hover:underline pb-1`}>
                Contact
              </a>
            </Link>
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
