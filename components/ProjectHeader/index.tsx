// Hooks
import { useInView } from 'react-intersection-observer';
// Animation
import { motion } from 'framer-motion';
// Utils
import { setBackgroundColor } from '../../utils';
// Types
import { project } from '../../types';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';

interface IProps {
  project: project;
}

const imageVariants = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      bounce: 0.7,
      duration: 2,
    },
  },
};

const ProjectHeader: React.FC<IProps> = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  // useEffect(() => {
  //   if (inView) {
  //     console.log(`section (${project.backgroundColor}) component is visible`);

  //     const targetColor = project.backgroundColor;
  //     setBackgroundColor(targetColor);
  //   } else {
  //     `section (${project.backgroundColor}) component isn't visible`;
  //   }
  // }, [inView]);

  return (
    <PageContainer
      key={project.subTitle}
      variant={Variant.TIGHT}
      noFlex={false}
      backgroundImgURL={project.headerImgURL || ''}
    >
      <div
        ref={ref}
        className={`${project.headerTextColor} flex flex-col justify-start`}
      >
        <p className='z-50 mb-20 font-sans font-bold uppercase'>
          {project.subTitle}
        </p>
        <div className='relative xl:w-1/2'>
          <h1 className='relative z-50 font-extrabold lg:leading-32 2xl:2/3 font-vesterbroPoster text-6xl lg:text-8xl'>
            {project.title}
          </h1>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectHeader;
