// Styling
import bannerStyles from '../../../styles/Banner.module.scss';
import marqueeStyles from '../../../styles/Marquee.module.scss';
// Animation
import { motion } from 'framer-motion';
// Components
import AnimatedLetters from './AnimatedLetters';
import Image from 'next/image';
import Link from 'next/Link';
import EmploymentDefault from '../../EmploymentDefault';

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
    <div className={`${bannerStyles.bannerRow} pl-10 2xl:pl-96 relative`}>
      <div className={bannerStyles['row-col']}>
        <AnimatedLetters title={title} disabled={false} />
      </div>
      <motion.div
        className={`${bannerStyles['row-col']} -ml-48 mb-56 lg:ml-32 hidden xl:flex sm:mb-96 md:m-0`}
        variants={bannerRowTop}
        initial='initial'
        animate='animate'
      >
        <EmploymentDefault />
      </motion.div>
    </div>
  );
};

export default BannerRowTop;
