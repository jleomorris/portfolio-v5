import React, { useEffect } from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import styles from '../../styles/Loader.module.scss';
// Components
import ImageBlock from './components/ImageBlock';

// Variants
const container = {
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemsContainer = {
  show: {
    transition: {
      ease: 'easeInOut',
      delay: 5,
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
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const logoIcons = {
  hidden: {
    opacity: 0,
    y: 100,
    rotate: 5,
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
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
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      delay: 3,
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
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
          className='absolute flex flex-col text-center top-32'
        >
          <motion.h1
            variants={item}
            className='w-full text-7xl md:text-8xl font-vesterbroPoster'
          >
            Jleo | Front End Portfolio
          </motion.h1>
          <motion.div
            variants={itemsContainer}
            className='relative flex flex-wrap items-center justify-center w-full mt-24'
          >
            <ImageBlock
              variants={logoIcons}
              imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/101.png'
              id='1'
            />
            <ImageBlock
              variants={logoIcons}
              imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/103.png'
              id='2'
            />
            <ImageBlock
              variants={logoIcons}
              imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/113.png'
              id='3'
            />
            <ImageBlock
              variants={logoIcons}
              imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/142.png'
              id='4'
            />
            {/* <motion.img
              src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638058108/Portfolio-v5/developer_outline.png`}
              variants={itemMain}
              alt='random alt'
              layoutId='main-image-1'
            /> */}
          </motion.div>
          <motion.div
            className={`${styles.transitionImage} relative`}
            variants={itemMain}
            onAnimationComplete={() => setLoading(false)}
          >
            <motion.img
              src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638058108/Portfolio-v5/developer_outline.png`}
              alt='random alt'
              layoutId='main-image-1'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
