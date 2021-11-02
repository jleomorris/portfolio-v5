// Next
import Head from 'next/head';
import Image from 'next/image';
// Styling
import homeStyles from '../styles/Home.module.css';
// Animation
import AnimationParent, {
  Variant,
} from '../components/FramerMotion/AnimationParent';
import AnimationChild from '../components/FramerMotion/AnimationChild';
// Components
import PageContainer from '../components/PageContainer';
import SoftSkills from '../components/SoftSkills';
import TechnicalSkills from '../components/TechnicalSkills';
import CurrentlyUsedSkills from '../components/CurrentlyUsedSkills';

export default function Home() {
  return (
    <PageContainer>
      <div className='min-h-screen'>
        <SoftSkills />
      </div>
      <div className='min-h-screen'>
        <TechnicalSkills />
      </div>
      <div className='min-h-screen'>
        <CurrentlyUsedSkills />
      </div>
    </PageContainer>
  );
}
