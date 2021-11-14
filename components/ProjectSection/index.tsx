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
import Link from 'next/link';

interface IProps {
  project: project;
  index: number;
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

const ProjectSection: React.FC<IProps> = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      console.log(
        `section ${index}(${project.backgroundColor}) component is visible`
      );

      const targetColor = project.backgroundColor;
      setBackgroundColor(targetColor);
    } else {
      `section ${index}(${project.backgroundColor}) component isn't visible`;
    }
  }, [inView]);

  return (
    <PageContainer
      key={project.subTitle}
      variant={Variant.TIGHT}
      noFlex={false}
      // bgColor='bg-white'
    >
      <div
        ref={ref}
        className={`${project.textColor} flex flex-col justify-start border`}
      >
        <p className='mb-20 font-sans font-bold tracking-widest uppercase'>
          {project.subTitle}
        </p>
        <div className='relative w-1/2 border'>
          <h1 className='relative z-50 font-extrabold lg:leading-32 2xl:2/3 font-vesterbroPoster text-7xl lg:text-8xl'>
            {project.title}
          </h1>
          <motion.div
            className='absolute z-0 border border-black left-9/10 -inset-y-64 w-180'
            variants={imageVariants}
            initial='initial'
            whileHover='whileHover'
          >
            <Image
              src={project.sectionImgURL}
              layout='responsive'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='project'
              className='border border-blue-600'
            />
          </motion.div>
        </div>
        <Link href={`/projects/${project.link}`}>
          <a className='mt-10 font-sans text-xl font-bold tracking-widest uppercase'>
            View case study
          </a>
        </Link>
      </div>
    </PageContainer>
  );
};

export default ProjectSection;
