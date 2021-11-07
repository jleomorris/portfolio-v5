// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';

const projectData = [
  {
    subTitle: 'LDR Generator',
    title: 'Some Love Death & Robot Randomness',
    backgroundColor: '#D62742',
    textColor: 'text-white',
    imgURL:
      // 'https://res.cloudinary.com/jleomorris/image/upload/v1636303594/Portfolio-v5/Projects/LDR.png',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636320699/Portfolio-v5/Projects/kharnivore.jpg',
  },
];

const Projects = () => {
  useEffect(() => {
    setIntitialBackgroundColor();
  }, []);

  const setIntitialBackgroundColor = () => {
    const targetColor = projectData[0].backgroundColor;
    document.body.style.backgroundColor = targetColor;
  };

  return (
    <div className='projects'>
      {/* <PageContainer variant={Variant.TIGHT} noFlex={false}>
        <div className='flex flex-col items-start justify-center w-full h-full'>
          <p className='mb-20 font-sans font-bold uppercase'>About</p>
          <h1 className='font-extrabold font-vesterbroPoster text-7xl lg:text-8xl 2xl:w-2/3'>
            I'm a problem solver, designer and technology addict
          </h1>
          <p className='mt-10 font-sans font-bold uppercase'>View case study</p>
        </div>
      </PageContainer> */}
      {projectData.map((project, index) => (
        <PageContainer
          key={project.subTitle}
          variant={Variant.TIGHT}
          noFlex={false}
          // bgColor='bg-white'
        >
          <div
            className={`${project.textColor} flex flex-col justify-center border`}
          >
            <p className='mb-20 font-sans font-bold uppercase'>
              {project.subTitle}
            </p>
            <div className='relative w-1/2 border'>
              <h1 className='relative z-50 font-extrabold 2xl:2/3 font-vesterbroPoster text-7xl lg:text-8xl'>
                {project.title}
              </h1>
              <div className='absolute z-0 border border-black left-2/3 -inset-y-7 w-180'>
                <Image
                  src={project.imgURL}
                  layout='responsive'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  alt='project'
                />
              </div>
            </div>
            <p className='mt-10 font-sans font-bold uppercase'>
              View case study
            </p>
          </div>
        </PageContainer>
      ))}
    </div>
  );
};

export default Projects;
