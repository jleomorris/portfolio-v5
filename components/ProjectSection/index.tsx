// Hooks
import { useInView } from 'react-intersection-observer';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';
// Utils
import { setBackgroundColor } from '../../utils';

interface IProps {
  project: project;
  index: number;
}

interface project {
  subTitle: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  imgURL: string;
}

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
        <p className='mb-20 font-sans font-bold uppercase'>
          {project.subTitle}
        </p>
        <div className='relative w-1/2 border'>
          <h1 className='relative z-50 font-extrabold lg:leading-32 2xl:2/3 font-vesterbroPoster text-7xl lg:text-8xl'>
            {project.title}
          </h1>
          <div className='absolute z-0 border border-black left-9/10 -inset-y-64 w-180'>
            <Image
              src={project.imgURL}
              layout='responsive'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='project'
              className='border border-blue-600'
            />
          </div>
        </div>
        <p className='mt-10 font-sans font-bold uppercase'>View case study</p>
      </div>
    </PageContainer>
  );
};

export default ProjectSection;
