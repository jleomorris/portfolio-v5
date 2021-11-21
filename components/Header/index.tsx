import React, { useEffect, useState } from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import styles from '../../styles/Header.module.scss';
// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// Variants
const header = {
  initial: {
    opacity: 0,
    y: 280,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 1.6,
    },
  },
};

const Header = () => {
  const router = useRouter();
  const [isCurrentPageProjects, setIsCurrentPageProjects] =
    useState<boolean>(false);

  useEffect(() => {
    if (router.route === '/projects/[id]') {
      setIsCurrentPageProjects(true);
    } else {
      setIsCurrentPageProjects(false);
    }
  }, [router]);

  return (
    <motion.div
      className={`header absolute w-full z-50 ${styles.header}`}
      variants={header}
      initial='initial'
      animate='animate'
    >
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href='/'>
            <a className={`${isCurrentPageProjects ? 'text-white' : ''}`}>
              Jleo
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className='flex'>
            <li className={styles.navLi}>
              <Link href='/about'>
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? 'text-white' : ''
                  } hover:underline pb-1`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navLi}>
              <Link href='/projects'>
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? 'text-white' : ''
                  } hover:underline pb-1`}
                >
                  Projects
                </a>
              </Link>
            </li>
            {/* <li className={styles.navLi}>
            <Link href='/desktops'>
              <a className={`${styles.navLinks} ${isCurrentPageProjects ? "text-white" : ""} hover:underline pb-1`}>
                Desktops
              </a>
            </Link>
          </li> */}
            <li className={styles.navLi}>
              <Link href='/contact'>
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? 'text-white' : ''
                  } hover:underline pb-1`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
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
