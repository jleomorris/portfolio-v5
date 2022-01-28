// Hooks
import InView, { useInView } from 'react-intersection-observer';
// Animation
import { motion } from 'framer-motion';
// Utils
import { setBackgroundColor } from '../../../utils';
// Types
import { Feature, project } from '../../../types';
// Components
import PageContainer, { Variant } from '../../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';
import ScrollAnimationChild, {
  Variant as animationChildVariant,
} from '../../../components/FramerMotion/ScrollAnimationChild';
// Hooks
import { useScroll } from '../../../hooks/useScroll';

interface IProps {
  project: project;
  feature: Feature;
  inView: boolean;
}

const ProjectFeature: React.FC<IProps> = ({ project, feature, inView }) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <PageContainer
      key={feature.title}
      variant={Variant.TIGHT}
      noFlex={false}
      // bgColor='bg-white'
      noFullHeight
    >
      <ScrollAnimationChild
        variant={animationChildVariant.ABOUTROTATION}
        animate={controls}
        elRef={element}
      >
        <div
          className={`${
            inView === true ? project.textColor : ''
          } project-feature text-black flex flex-col justify-start w-full`}
        >
          <p className='mb-20 font-sans text-2xl font-semibold tracking-widest uppercase'>
            {feature.title}
          </p>
          <div className='flex flex-wrap items-start justify-between'>
            <div className='w-full mb-10 md:mb-0 '>
              {feature.description.map((item) => (
                <p
                  key={item}
                  className='text-5xl font-bold sm:text-7xl font-vesterbroPoster'
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimationChild>
      <ScrollAnimationChild
        variant={animationChildVariant.ABOUTROTATION}
        animate={controls2}
        elRef={element2}
      >
        <div className='relative w-full mt-32 mb-20 overflow-hidden sm:mt-48 h-72 rounded-3xl md:h-160 2xl:h-220'>
          <Image
            src={feature.imgURL}
            layout='fill'
            alt='main'
            height='100%'
            width='100%'
            objectFit='cover'
            objectPosition='top'
          />
        </div>
      </ScrollAnimationChild>
    </PageContainer>
  );
};

export default ProjectFeature;
