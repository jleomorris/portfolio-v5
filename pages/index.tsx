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

export default function Home() {
  return (
    <div className='home pt-nav'>
      <Banner />
      <div className={`${bannerStyles['transitionImage--final']} relative`}>
        <motion.img
          src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635814195/Portfolio-v5/Loader/main.jpg`}
          layoutId='main-image-1'
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
        />
        <div className='absolute right-12 md:right-32 -bottom-32 image-description'>
          <ImageDescription content='Photo from my trip to Zakopane, Poland in 2019' />
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
