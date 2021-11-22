import React, { useEffect, useState } from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import styles from '../../styles/Header.module.scss';
// Next
import Link from 'next/link';
import { useRouter } from 'next/router';
import HamburgerIcon from './Components/HamburgerIcon';

interface IProps {
  isTabletMobileHeaderOpen: boolean;
  setIsTabletMobileHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const Header: React.FC<IProps> = ({
  isTabletMobileHeaderOpen,
  setIsTabletMobileHeaderOpen,
}) => {
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
      className={`header absolute w-full z-60 ${styles.header}`}
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
        <nav className={`${styles.nav}`}>
          <ul className='hidden lg:flex'>
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
          <button
            onClick={() =>
              setIsTabletMobileHeaderOpen(!isTabletMobileHeaderOpen)
            }
          >
            <HamburgerIcon
              isTabletMobileHeaderOpen={isTabletMobileHeaderOpen}
              setIsTabletMobileHeaderOpen={setIsTabletMobileHeaderOpen}
            />
          </button>
        </nav>
        {/* <div className={`${styles.contact}`}>
          <a
            className={`${styles.contactLink} ${
              isCurrentPageProjects ? 'text-white border-white' : ''
            }`}
            href='/contact'
          >
            Let's work together
          </a>
        </div> */}
        {/* <div className={styles.hamburgerMenu}>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;
