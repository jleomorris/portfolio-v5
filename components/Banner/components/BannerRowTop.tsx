// Styling
import bannerStyles from '../../../styles/Banner.module.scss';
import marqueeStyles from '../../../styles/Marquee.module.scss';
// Animation
import { motion } from 'framer-motion';
// Components
import AnimatedLetters from './AnimatedLetters';

// Variants
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

interface IProps {
  title: string;
}

const BannerRowTop: React.FC<IProps> = ({ title }) => {
  return (
    <div className={`${bannerStyles.bannerRow} pl-10 2xl:pl-96`}>
      <div className={bannerStyles['row-col']}>
        <AnimatedLetters title={title} disabled={false} />
      </div>
      <motion.div
        className={bannerStyles['row-col']}
        variants={bannerRowTop}
        initial='initial'
        animate='animate'
      >
        <span
          className={`${bannerStyles['row-message']} text-2xl mb-48 sm:mb-0 sm:text-3xl`}
        >
          Senior React Developer at IronmongeryDirect - Basildon, Essex
        </span>
      </motion.div>
    </div>
  );
};

export default BannerRowTop;
