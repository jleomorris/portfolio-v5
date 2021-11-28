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
      staggerChildren: 0.35,
    },
  },
};

const item = {
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
        className={styles.loaderInner}
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock
          variants={item}
          imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/101.png'
          id='1'
        />
        <motion.div className={styles.transitionImage} variants={itemMain}>
          <motion.img
            src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638058108/Portfolio-v5/developer_outline.png`}
            alt='random alt'
            layoutId='main-image-1'
          />
        </motion.div>
        <ImageBlock
          variants={item}
          imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/103.png'
          id='2'
        />
        <ImageBlock
          variants={item}
          imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/113.png'
          id='3'
        />
        <ImageBlock
          variants={item}
          imgURL='https://res.cloudinary.com/jleomorris/image/upload/v1637980791/Portfolio-v5/142.png'
          id='4'
        />
      </motion.div>
    </div>
  );
};

export default Loader;
