import React, { useEffect, useState } from "react";
// Animation
import { motion } from "framer-motion";
// Styles
import styles from "../../styles/Header.module.scss";
// Images and Icons
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
// Next
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import HamburgerIcon from "./Components/HamburgerIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      ease: "easeInOut",
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
    if (router.route === "/projects/[id]") {
      setIsCurrentPageProjects(true);
    } else {
      setIsCurrentPageProjects(false);
    }
  }, [router]);

  return (
    <div
      className={`header absolute w-full z-60 ${styles.header} px-5 sm:px-10`}
      // variants={header}
      // initial="initial"
      // animate="animate"
    >
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href={isCurrentPageProjects ? "/projects" : "/"}>
            <a className={`${isCurrentPageProjects ? "text-white" : ""}`}>
              {isCurrentPageProjects ? (
                <FontAwesomeIcon
                  icon={faLongArrowAltLeft}
                  className="text-7xl"
                />
              ) : (
                <div className="flex justify-center items-center">
                  <div className={`relative mr-5`}>
                    <motion.img
                      src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223587/Portfolio-v5/3D-stripy/budda_ceg7wv.png`}
                      layoutId="main-image-1"
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1.6,
                      }}
                      className="h-40 w-40"
                    />
                  </div>
                  {/* <EmploymentResponsive /> */}
                  Jleo
                </div>
              )}
            </a>
          </Link>
        </div>
        <nav className={`${styles.nav}`}>
          <ul className="hidden lg:flex">
            <li className={styles.navLi}>
              <Link href="/about">
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? "text-white" : ""
                  } hover:underline pb-1`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navLi}>
              <Link href="/projects">
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? "text-white" : ""
                  } hover:underline pb-1`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className={styles.navLi}>
              <Link href="/contact">
                <a
                  className={`${styles.navLinks} ${
                    isCurrentPageProjects ? "text-white" : ""
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
      </div>
    </div>
  );
};

export default Header;
