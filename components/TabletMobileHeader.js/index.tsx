// Animation
import { containerAnimation } from '../../animations';
import { motion } from 'framer-motion';
// Components
import Link from 'next/Link';
import Footer from '../Footer';

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
    <>
      <div className='absolute top-0 right-0 z-50 flex flex-col items-center justify-center w-screen min-h-screen bg-main lg:hidden tablet-mobile-header'>
        <div className='flex flex-col items-center justify-between w-full h-screen'>
          <motion.ul
            variants={containerAnimation}
            initial='initial'
            animate='animate'
            className='space-y-24 text-8xl font-vesterbroPoster mt-96'
          >
            <motion.li variants={listItemVariants}>
              <Link href='/about' passHref>
                <button
                  onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
                >
                  <a className={`hover:underline pb-1`}>About</a>
                </button>
              </Link>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <Link href='/projects' passHref>
                <button
                  onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
                >
                  <a className={`hover:underline pb-1`}>Projects</a>
                </button>
              </Link>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <Link href='/contact' passHref>
                <button
                  onClick={() => setIsTabletMobileHeaderOpen((prev) => !prev)}
                >
                  <a className={`hover:underline pb-1`}>Contact</a>
                </button>
              </Link>
            </motion.li>
          </motion.ul>
        </div>
        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TabletMobileHeader;
