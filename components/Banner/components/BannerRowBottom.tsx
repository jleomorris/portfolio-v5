// Animation
import { motion } from 'framer-motion';
// Styling
import bannerStyles from '../../../styles/Banner.module.scss';
// Components
import AnimatedLetters from './AnimatedLetters';

// Variants
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

interface IProps {
  title: string;
}

const BannerRowBottom: React.FC<IProps> = ({ title }) => {
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

export default BannerRowBottom;
