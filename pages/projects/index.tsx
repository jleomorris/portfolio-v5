// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import { useEffect } from 'react';

const projectData = [
  {
    subTitle: 'LDR Generator',
    title: 'Some Love Death & Robots Randomness',
    backgroundColor: '#D62742',
    textColor: 'text-white',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636320699/Portfolio-v5/Projects/kharnivore.jpg',
  },
  {
    subTitle: 'Poke Price',
    title: 'Get the prices of your childhood favourites',
    backgroundColor: '##ffc301',
    textColor: 'text-black',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/v1636328176/Portfolio-v5/Projects/Charizard.png',
  },
  {
    subTitle: 'Modern Pokedex',
    title: 'A Modern Twist On The First Gen Pokedex',
    backgroundColor: '#27c2d6',
    textColor: 'text-black',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636324383/Portfolio-v5/Projects/gyarados.png',
  },
  {
    subTitle: 'Last Life',
    title: 'Get The Latest News On Your Favourite Games',
    backgroundColor: '#0C0E14',
    textColor: 'text-white',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636325505/Portfolio-v5/Projects/jin_sakai.png',
  },
  {
    subTitle: 'Bolt Music Player',
    title: 'Code to some chill tracks',
    backgroundColor: '#5C6285',
    textColor: 'text-white',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636326862/Portfolio-v5/Projects/bolt.png',
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
