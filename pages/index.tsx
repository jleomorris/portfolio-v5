// Next
import Head from 'next/head';
import Image from 'next/image';
// Styling
import homeStyles from '../styles/Home.module.css';
import bannerStyles from '../styles/Banner.module.scss';
// Animation
import AnimationChild from '../components/FramerMotion/AnimationChild';
import { motion } from 'framer-motion';
// Components
import PageContainer, { Variant } from '../components/PageContainer';
import SoftSkills from '../components/SoftSkills';
import TechnicalSkills from '../components/TechnicalSkills';
import CurrentlyUsedSkills from '../components/CurrentlyUsedSkills';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className={`${bannerStyles['transitionImage--final']}`}>
        <motion.img
          src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635814195/Portfolio-v5/Loader/main.jpg`}
          layoutId='main-image-1'
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
        />
      </div>
      <PageContainer variant={Variant.NORMAL}>
        <div className='min-h-screen'>
          <SoftSkills />
        </div>
        <div className='min-h-screen flex justify-center items-center'>
          <TechnicalSkills />
        </div>
        <div className='min-h-screen flex justify-center items-center'>
          <CurrentlyUsedSkills />
        </div>
      </PageContainer>
    </div>
  );
}
