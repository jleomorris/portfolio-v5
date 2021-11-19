// Hooks
import { useInView } from 'react-intersection-observer';
// Animation
import { motion } from 'framer-motion';
// Utils
import { setBackgroundColor } from '../../../utils';
// Types
import { Feature } from '../../../types';
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
  feature: Feature;
}

const ProjectFeature: React.FC<IProps> = ({ feature }) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <PageContainer
      key={feature.subTitle}
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
          className={`project-feature text-black flex flex-col justify-start w-full`}
        >
          <p className='mb-20 font-sans text-xl text-2xl font-semibold tracking-widest uppercase'>
            {feature.title}
          </p>
          <div className='flex flex-wrap items-start justify-between'>
            <div className='w-full mb-10 md:mb-0 '>
              {feature.description.map((item) => (
                <p className='text-5xl font-bold sm:text-7xl font-vesterbroPoster'>
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
        <div className='relative w-full mt-32 mb-20 overflow-hidden sm:mt-48 h-52 rounded-3xl md:h-120 xl:h-160 2xl:h-220'>
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
