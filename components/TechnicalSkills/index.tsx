// Components
import SkillIcons from './components/SkillIcons';
// Images and Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCodeBranch,
  faCompressAlt,
  faDotCircle,
  faEdit,
  faHandSparkles,
  faLanguage,
  faLowVision,
  faUnlockAlt,
  faUserEdit,
  faUsers,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAws,
  faBootstrap,
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJira,
  faJsSquare,
  faLeanpub,
  faNode,
  faNpm,
  faReact,
  faSass,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
// Components
import Figma from '../Icons/Figma';
import Next from '../Icons/NextJs';
import GraphQL from '../Icons/GraphQL';
import Tailwind from '../Icons/Tailwind';
import Webpack from '../Icons/Webpack';
import Image from 'next/image';
import SkillIconsMobile from './components/SkillIconsMobile';

const skillsData = [
  {
    icon: faAws,
    altIcon: null,
    title: 'AWS',
    showTitle: false,
  },
  {
    icon: faBootstrap,
    altIcon: null,
    title: 'Bootstrap',
    showTitle: false,
  },
  {
    icon: faCss3Alt,
    altIcon: null,
    title: 'CSS',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: null,
    title: 'CSHTML',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: <Figma />,
    title: 'Figma',
    showTitle: false,
  },
  {
    icon: faGit,
    altIcon: null,
    title: 'Git',
    showTitle: false,
  },
  {
    icon: faCode,
    altIcon: <GraphQL />,
    title: 'GraphQL',
    showTitle: true,
  },
  {
    icon: faHtml5,
    altIcon: null,
    title: 'HTML',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043580/Portfolio-v5/Skills/jest.png'
        alt='technical skill'
      />
    ),
    title: 'Jest',
    showTitle: true,
  },
  {
    icon: faJsSquare,
    altIcon: null,
    title: 'JS',
    showTitle: false,
  },
  {
    icon: faNode,
    altIcon: null,
    title: 'Node',
    showTitle: false,
  },
  {
    icon: faCode,
    altIcon: <Next />,
    title: 'Next',
    showTitle: false,
  },
  {
    icon: faNpm,
    altIcon: null,
    title: 'Npm',
    showTitle: false,
  },
  {
    icon: faReact,
    altIcon: null,
    title: 'React',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        // className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043837/Portfolio-v5/Skills/redux.png'
        alt='technical skill'
      />
    ),
    title: 'Redux',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        // className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636030983/Portfolio-v5/Skills/rest-api.png'
        alt='technical skill'
      />
    ),
    title: 'REST API',
    showTitle: false,
  },
  {
    icon: faSass,
    altIcon: null,
    title: 'Sass',
    showTitle: false,
  },
  {
    icon: faHandSparkles,
    altIcon: null,
    title: 'Styled Components',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: <Tailwind />,
    title: 'Tailwind',
    showTitle: false,
  },
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        // className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636041408/Portfolio-v5/Skills/ts.png'
        alt='technical skill'
      />
    ),
    title: 'Typescript',
    showTitle: false,
  },
  {
    icon: faCode,
    altIcon: <Webpack />,
    title: 'Webpack',
    showTitle: true,
  },
];

const TechnicalSkills = () => {
  return (
    <div className='technical-skills'>
      <h3 className='w-full mx-auto mt-20 mb-32 text-6xl font-extrabold text-center sm:mt-0 sm:text-8xl xl:w-1/2'>
        Services and Tools I Have Experience With
      </h3>
      <SkillIcons skillsData={skillsData} />
    </div>
  );
};

export default TechnicalSkills;
