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

const ProjectChallenge: React.FC<IProps> = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <PageContainer
      key={project.subTitle}
      variant={Variant.TIGHT}
      noFlex={false}
      // bgColor='bg-white'
      noFullHeight
      noPaddingBottom
    >
      <div
        ref={ref}
        className={`project-challenge text-black flex flex-col justify-start w-full`}
      >
        <p className='mb-20 font-sans text-2xl font-semibold tracking-widest uppercase'>
          The challenge
        </p>
        <div className='flex flex-wrap items-start justify-between'>
          <div className='w-full mb-10 font-bold md:mb-0 md:w-5/12 text-7xl font-vesterbroPoster'>
            {' '}
            {project.challenge.title}
          </div>
          <div className='w-full space-y-12 md:w-6/12'>
            {project.challenge.description.map((item) => (
              <p className='font-sans text-3xl'>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='relative w-screen h-screen mt-48 overflow-hidden border border-red-900'>
        <Image
          src={project.headerImgURL}
          layout='responsive'
          alt='main'
          height='100%'
          width='100%'
          objectFit='contain'
          objectPosition='top'
        />
      </div>
    </PageContainer>
  );
};

export default ProjectChallenge;
