// Hooks
import { useInView } from 'react-intersection-observer';
// Animation
import { motion } from 'framer-motion';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';
// Utils
import { setBackgroundColor } from '../../utils';

interface IProps {
  project: project;
}

interface project {
  subTitle: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  headerTextColor: string;
  headerImgURL: string;
  sectionImgURL: string;
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
        className={`${project.headerTextColor} flex flex-col justify-start border`}
      >
        <p className='z-50 mb-20 font-sans font-bold uppercase'>
          {project.subTitle}
        </p>
        <div className='relative w-1/2'>
          <h1 className='relative z-50 font-extrabold lg:leading-32 2xl:2/3 font-vesterbroPoster text-7xl lg:text-8xl'>
            {project.title}
          </h1>
          {/* <motion.div
            className='absolute z-0 border border-black left-9/10 -inset-y-64 w-180'
            variants={imageVariants}
            initial='initial'
            whileHover='whileHover'
          >
            <Image
              src={project.imgURL}
              layout='responsive'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='project'
              className='border border-blue-600'
            />
          </motion.div> */}
        </div>
        {/* <p className='mt-10 font-sans font-bold uppercase'>View case study</p> */}
      </div>
    </PageContainer>
  );
};

export default ProjectHeader;
