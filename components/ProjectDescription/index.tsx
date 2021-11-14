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
import Links from './components/Links';

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

const ProjectDescription: React.FC<IProps> = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <PageContainer
      key={project.subTitle}
      variant={Variant.TIGHT}
      noFlex={false}
      bgColor='bg-white'
      noFullHeight
    >
      <div
        ref={ref}
        className={`text-black flex flex-col justify-start border`}
      >
        <p className='text-6xl font-bold mt-28 font-vesterbroPoster xl:w-10/12'>
          {project.description}
        </p>
      </div>
      <Links project={project} />
      <motion.div
        className='relative w-full border-4 border-blue-900 h-96 md:h-240 mt-96'
        // variants={imageVariants}
        // initial='initial'
        // whileHover='whileHover'
      >
        <Image
          src={project.headerImgURL}
          layout='fill'
          // objectPosition='top'
          // width='100%'
          // height='100%'
          objectFit='fill'
          alt='main'
        />
      </motion.div>
    </PageContainer>
  );
};

export default ProjectDescription;
