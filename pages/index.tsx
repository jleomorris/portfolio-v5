// Next
import Head from 'next/head';
import Image from 'next/image';
// Styling
import homeStyles from '../styles/Home.module.css';
// Components
import PageContainer from '../components/PageContainer';
import SoftSkills from '../components/SoftSkills';
// Animation
import AnimationParent, {
  Variant,
} from '../components/FramerMotion/AnimationParent';
import AnimationChild from '../components/FramerMotion/AnimationChild';

export default function Home() {
  return (
    <PageContainer>
      <SoftSkills />
    </PageContainer>
  );
}
