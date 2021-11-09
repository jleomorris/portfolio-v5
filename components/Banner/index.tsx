import React, { useState, useEffect } from 'react';
// Animation
import { motion } from 'framer-motion';
// Styles
import bannerStyles from '../../styles/Banner.module.scss';
import marqueeStyles from '../../styles/Marquee.module.scss';

// Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const bannerRowTop = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.4,
    },
  },
};

const bannerRowBottom = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1,
    },
  },
};

const bannerRowBottomText = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 1.8,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div
      className={bannerStyles.banner}
      variants={banner}
      animate='animate'
    >
      <BannerRowTop title={'J.Morris'} />
      <BannerRowCenter title={'Front End Dev'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className={`${marqueeStyles['row-title']} ${bannerStyles.rowTitle}`}
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span
        className={`${bannerStyles.rowLetter}`}
        variants={letterAnimation}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={`${bannerStyles.bannerRow} pl-96`}>
      <div className={bannerStyles['row-col']}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className={bannerStyles['row-col']}
        variants={bannerRowTop}
        initial='initial'
        animate='animate'
      >
        <span className={bannerStyles['row-message']}>
          Senior React Developer at IronmongeryDirect - Basildon, Essex
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={`${bannerStyles.bannerRow} ${bannerStyles.center}`}>
      <motion.div
        className={bannerStyles.scroll}
        variants={bannerRowBottom}
        initial='initial'
        animate='animate'
      >
        <motion.span
          className={bannerStyles.scrollInnerMessage}
          variants={bannerRowBottomText}
          initial='initial'
          animate='animate'
        >
          scroll
        </motion.span>
        <motion.span
          className={bannerStyles.scrollInnerMessage}
          variants={bannerRowBottomText}
          initial='initial'
          animate='animate'
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div
      className={`${bannerStyles.bannerRow} ${marqueeStyles.marquee}  ${
        playMarquee && marqueeStyles.animate
      }`}
    >
      <div className={marqueeStyles['marquee__inner']}>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
