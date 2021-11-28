// Styling
import bannerStyles from '../../../styles/Banner.module.scss';
import marqueeStyles from '../../../styles/Marquee.module.scss';
// Animation
import { motion } from 'framer-motion';

// Variants
const letterAnimation = {
  initial: {
    y: 400,
  },
  noAnimation: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

interface IProps {
  title: string;
  disabled?: boolean;
}

const AnimatedLetters: React.FC<IProps> = ({ title, disabled }) => {
  const splitTitle = title.split('');

  return (
    <motion.span
      className={`${marqueeStyles['row-title']} ${bannerStyles.rowTitle} text-9xl sm:text-13xl 2xl:text-28xl`}
      variants={banner}
      initial='initial'
      animate={disabled ? 'noAnimation' : 'animate'}
    >
      {splitTitle.map((letter, index) => (
        <motion.span
          className={`${bannerStyles.rowLetter} ${
            letter === '_' ? 'text-main' : ''
          } text-9xl sm:text-13xl 2xl:text-28xl`}
          variants={letterAnimation}
          key={`${letter}-${index}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
