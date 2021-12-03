import { useState } from 'react';
// Animation
import { motion } from 'framer-motion';
// Components
import PageContainer, { Variant as pageVariant } from '../PageContainer';
import Button, { Variant as buttonVariant, Size } from '../Button';
import Link from 'next/link';
import Image from 'next/image';

// Variants
const handAnimation = {
  initial: {
    y: 250,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 1,
    y: 250,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  const [isButtonHoveredOver, setIsButtonHoveredOver] =
    useState<boolean>(false);

  return (
    <PageContainer variant={pageVariant.NORMAL} noFlex={false}>
      <div className='contact'>
        <h1 className='text-center font-vesterbroPoster text-8xl'>
          {`Let's work together`}
        </h1>
        <div
          className='relative h-20 mx-auto mt-10 w-80'
          onMouseEnter={() => setIsButtonHoveredOver(true)}
          onMouseLeave={() => setIsButtonHoveredOver(false)}
        >
          <Link href='/contact'>
            <Button
              type='button'
              variant={buttonVariant.BLACK_OUTLINE}
              size={Size.ROUND}
            >
              <a className='block mx-auto'>
                <span className='font-sans tracking-wider uppercase'>
                  Say hello
                </span>
              </a>
            </Button>
          </Link>
          <motion.div
            variants={handAnimation}
            initial='initial'
            animate={isButtonHoveredOver ? 'animate' : 'exit'}
            exit='exit'
            className='absolute -top-16 sm:-top-36 -right-80 sm:-right-160 h-80 sm:h-160 w-80 sm:w-160'
          >
            <Image
              src='https://res.cloudinary.com/jleomorris/image/upload/v1638234858/Portfolio-v5/3D-stripy/hat-man-wrist-3.png'
              layout='fill'
              objectFit='contain'
            />
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
