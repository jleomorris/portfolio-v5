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
    icon: null,
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
    icon: null,
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
    icon: null,
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
    icon: null,
    altIcon: (
      <img
        className='h-36 object-contain'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636030983/Portfolio-v5/Skills/rest-api.png'
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
    icon: null,
    altIcon: <Tailwind />,
    title: 'Tailwind',
    showTitle: false,
  },
  {
    icon: null,
    altIcon: (
      <img
        className='h-36 object-contain'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636041408/Portfolio-v5/Skills/ts.png'
      />
    ),
    title: 'Typescript',
    showTitle: false,
  },
  {
    icon: null,
    altIcon: <Webpack />,
    title: 'Webpack',
    showTitle: true,
  },
];

const TechnicalSkills = () => {
  return (
    <div className='technical-skills'>
      <h3 className='text-8xl mb-32 font-extrabold text-center w-full xl:w-1/2 mx-auto'>
        Services and tools I have experience with.
      </h3>
      <div className='w-full lg:w-2/3 mx-auto flex flex-wrap justify-center items-center'>
        {skillsData.map((skill) => (
          <div className='my-10 mx-16 relative' key={skill!.title}>
            {skill.altIcon !== null ? (
              <div className='h-36 w-60'>
                {skill.altIcon}{' '}
                {skill.showTitle && (
                  <p
                    style={{
                      textShadow: '1px 1px 10px black',
                      fontFamily: 'system-ui',
                    }}
                    className='text-center text-white mt-3 font-extrabold text-3xl absolute inset-0 flex items-center justify-center'
                  >
                    {skill.title}
                  </p>
                )}
              </div>
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                className='text-8xl md:text-10xl'
              />
            )}
            {skill.showTitle && (
              <p
                style={{
                  // color: '#F2C744',
                  textShadow: '1px 1px 10px black',
                  fontFamily: 'system-ui',
                }}
                className='text-center text-white mt-3 font-extrabold text-3xl absolute inset-0 flex items-center justify-center'
              >
                {skill.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
