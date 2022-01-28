import React, { ReactElement, useState } from 'react';
// Images and Icons
import githubBlack from '../../images/github-black.svg';
import linkedinBlack from '../../images/linkedin-black.svg';
// Animation
import { motion } from 'framer-motion';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';

// Variants
const lampAnimation = {
  initial: {
    y: -150,
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
    y: -150,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact: React.FC = (): ReactElement => {
  const [isButtonHoveredOver, setIsButtonHoveredOver] =
    useState<boolean>(false);

  return (
    <div className='relative contact'>
      <motion.div
        variants={lampAnimation}
        initial='initial'
        animate={isButtonHoveredOver ? 'animate' : 'exit'}
        exit='exit'
        className='absolute inset-0 z-10 flex items-start justify-center w-3/4 xl:w-2/3'
      >
        <Image
          src='https://res.cloudinary.com/jleomorris/image/upload/v1638507248/Portfolio-v5/3D-stripy/lamp-1.png'
          height='320'
          width='400'
          objectFit='contain'
          alt='lamp'
          // className={`mb-24 ${isButtonHoveredOver ? contactStyles.lamp : null}`}
          className='mb-24'
        />
      </motion.div>
      <PageContainer variant={Variant.TIGHT} noFlex={false}>
        <div
          className='relative z-50 flex flex-wrap items-start w-full h-full'
          onMouseEnter={() => setIsButtonHoveredOver(true)}
          onMouseLeave={() => setIsButtonHoveredOver(false)}
        >
          {/* <div className='absolute inset-x-0 top-0 flex items-center justify-center w-full h-72'>
            <div className='z-0 bg-white rounded-full -mt-72 h-72 w-72 bg-opacity-20' />
          </div> */}
          <div className=''>
            <h1
              className='font-extrabold font-vesterbroPoster text-6xl sm:text-8xl lg:text-9xl 2xl:w-2/3'
              style={
                isButtonHoveredOver
                  ? {
                      textShadow:
                        '0px 25px 20px #5c5c5c, 0px -5px 10px #f0e09b',
                      animation: 'slide 10s',
                    }
                  : {}
              }
            >
              {`Let's work together`}
            </h1>
            <div className='flex my-20 space-x-3'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jleomorris'
              >
                <div className='relative w-12 h-12 mr-3'>
                  <Image
                    src={githubBlack}
                    alt='github'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/james-morris-62a66b166/'
              >
                <div className='relative w-12 h-12'>
                  <Image
                    src={linkedinBlack}
                    alt='github'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </a>
            </div>
          </div>
          <div className=''>
            <p className='mb-4 font-sans text-4xl font-bold'>New Business</p>
            <a
              href='mailTo:jamesleomorris@gmail.com'
              className='font-sans text-3xl font-normal underline'
            >
              jamesleomorris@gmail.com
            </a>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Contact;
