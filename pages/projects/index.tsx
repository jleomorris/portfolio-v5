import { useEffect } from 'react';
// Components
import ProjectSection from '../../components/ProjectSection';
// Utils
import { setBackgroundColor } from '../../utils';

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
    backgroundColor: '#dfc684',
    textColor: 'text-black',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/v1636328176/Portfolio-v5/Projects/Charizard.png',
  },
  {
    subTitle: 'Modern Pokedex',
    title: 'A Modern Twist On The First Gen Pokedex',
    backgroundColor: '#8ea4df',
    textColor: 'text-black',
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636324383/Portfolio-v5/Projects/gyarados.png',
  },
  {
    subTitle: 'Last Life',
    title: 'Get The Latest News On Your Favourite Games',
    backgroundColor: '#1e2438',
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
  // Set bg color based on first project
  useEffect(() => {
    const targetColor = projectData[0].backgroundColor;
    setBackgroundColor(targetColor);
    return () => {
      setBackgroundColor('#f2c744');
    };
  }, []);

  return (
    <div className='projects'>
      {projectData.map((project, index) => (
        <ProjectSection project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
