// Animation
import { containerAnimation } from '../../animations';
import { motion } from 'framer-motion';
// Components
import Link from 'next/link';

const listItemVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      bounce: 0.6,
    },
  },
};

interface IProps {
  setIsTabletMobileHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabletMobileHeader: React.FC<IProps> = ({
  setIsTabletMobileHeaderOpen,
}) => {
  return (
    <div className='absolute top-0 right-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-main lg:hidden tablet-mobile-header'>
      <motion.ul
        variants={containerAnimation}
        initial='initial'
        animate='animate'
        className='space-y-24 text-8xl font-vesterbroPoster'
      >
        <motion.li variants={listItemVariants}>
          <Link href='/about'>
            <button
              onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
            >
              <a className={`hover:underline pb-1`}>About</a>
            </button>
          </Link>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Link href='/projects'>
            <button
              onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
            >
              <a className={`hover:underline pb-1`}>Projects</a>
            </button>
          </Link>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <Link href='/contact'>
            <button
              onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
            >
              <a className={`hover:underline pb-1`}>Contact</a>
            </button>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default TabletMobileHeader;
