import { useState, useEffect } from 'react';
// Components
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface IProps {
  isTabletMobileHeaderOpen: boolean;
  setIsTabletMobileHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const firstBarVariants = {
  initial: {
    x: 0,
    y: 0,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  animate: {
    rotate: 45,
    x: 2,
    y: 10,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

const secondBarVariants = {
  initial: {
    rotate: 0,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  animate: {
    rotate: -45,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

const thirdBarVariants = {
  initial: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  animate: {
    opacity: 0,
    y: 20,
    transition: {
      bounce: 0.6,
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

const HamburgerIcon: React.FC<IProps> = ({
  isTabletMobileHeaderOpen,
  setIsTabletMobileHeaderOpen,
}) => {
  const router = useRouter();
  const [isCurrentPageProjects, setIsCurrentPageProjects] =
    useState<boolean>(false);

  useEffect(() => {
    if (router.route === '/projects/[id]') {
      setIsCurrentPageProjects(true);
    } else {
      setIsCurrentPageProjects(false);
    }
  }, [router]);

  return (
    <div className='p-4 space-y-3 hamburger-icon lg:hidden'>
      <motion.div
        variants={firstBarVariants}
        initial='initial'
        animate={isTabletMobileHeaderOpen ? 'animate' : 'initial'}
        className={`w-16 h-1 ${
          isCurrentPageProjects ? 'bg-white' : 'bg-black'
        }`}
        exit='initial'
      />
      <motion.div
        variants={secondBarVariants}
        initial='initial'
        animate={isTabletMobileHeaderOpen ? 'animate' : 'initial'}
        className={`w-16 h-1 ${
          isCurrentPageProjects ? 'bg-white' : 'bg-black'
        }`}
        exit='initial'
      />
      <motion.div
        variants={thirdBarVariants}
        initial='initial'
        animate={isTabletMobileHeaderOpen ? 'animate' : 'initial'}
        className={`w-16 h-1 ${
          isCurrentPageProjects ? 'bg-white' : 'bg-black'
        }`}
        exit='initial'
      />
    </div>
  );
};

export default HamburgerIcon;
