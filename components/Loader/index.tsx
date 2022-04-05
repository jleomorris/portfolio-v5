import React, { useEffect } from "react";
// Animation
import { motion } from "framer-motion";
// Styles
import styles from "../../styles/Loader.module.scss";
// Components
import ImageBlock from "./components/ImageBlock";

// Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // bounce: 0.7,
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // bounce: 0.7,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

interface IProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader: React.FC<IProps> = ({ setLoading }): React.ReactElement => {
  return (
    <div className={styles.loader}>
      <motion.div
        className={`${styles.loaderInner} flex justify-center items-center`}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute flex flex-col items-center justify-center w-11/12 text-center lg:text-left lg:flex-row top-32 sm:w-10/12"
        >
          <div className="flex flex-col items-center justify-center lg:items-start">
            <motion.h1
              variants={item}
              className="text-7xl md:text-8xl font-vesterbroPoster"
            >
              Jleo | Front End Portfolio
            </motion.h1>
            <motion.div
              variants={item}
              className="w-10/12 h-1 my-6 bg-blackLighter sm:w-full"
            />
            <motion.h2
              variants={item}
              className="font-sans text-4xl tracking-wider md:text-5xl"
            >
              Front End Developer{" "}
              <span className="text-3xl md:text-4xl">
                | React | Next.js | GraphQL
              </span>
            </motion.h2>
          </div>
          <motion.div
            className={`${styles.transitionImage} relative mt-24 sm:mt-48 lg:ml-48 lg:my-0`}
            variants={itemMain}
            onAnimationComplete={() => setLoading(false)}
          >
            <motion.img
              src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223587/Portfolio-v5/3D-stripy/budda_ceg7wv.png`}
              alt="random alt"
              layoutId="main-image-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
