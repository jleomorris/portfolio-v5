// Next
import Head from 'next/head';
import Image from 'next/image';
// Styling
import homeStyles from '../styles/Home.module.css';
import bannerStyles from '../styles/Banner.module.scss';
// Animation
import { motion } from 'framer-motion';
// Components
import PageContainer, { Variant } from '../components/PageContainer';
import SoftSkills from '../components/SoftSkills';
import TechnicalSkills from '../components/TechnicalSkills';
import CurrentlyUsedSkills from '../components/CurrentlyUsedSkills';
import Banner from '../components/Banner';
import ImageDescription from '../components/ImageDescription';
import Link from 'next/link';
import EmploymentResponsive from '../components/EmploymentResponsive';

export default function Home() {
  return (
    <div className='home pt-nav'>
      <Banner />
      <div
        className={`${bannerStyles['transitionImage--final']} p-10 sm:p-20 relative bg-white rounded-3xl bg-opacity-70 border-4 border-black`}
      >
        <motion.img
          src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223587/Portfolio-v5/3D-stripy/budda_ceg7wv.png`}
          layoutId='main-image-1'
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
          className='sm:mt-32'
        />
        <div
          className='absolute w-full sm:w-2/3 xl:hidden bottom-12 sm:bottom-24'
          style={{ left: '50%', transform: 'translatex(-50%)' }}
        >
          <EmploymentResponsive />
        </div>
      </div>
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <div className='w-full'>
          <SoftSkills />
        </div>
      </PageContainer>
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <TechnicalSkills />
      </PageContainer>
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <CurrentlyUsedSkills />
      </PageContainer>
    </div>
  );
}
