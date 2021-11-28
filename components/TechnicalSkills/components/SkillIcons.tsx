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
import Figma from '../../Icons/Figma';
import Next from '../../Icons/NextJs';
import GraphQL from '../../Icons/GraphQL';
import Tailwind from '../../Icons/Tailwind';
import Webpack from '../../Icons/Webpack';
// Types
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  skillsData: Skill[];
}

interface Skill {
  icon: IconDefinition | null;
  altIcon: JSX.Element | null;
  title: string;
  showTitle: boolean;
}

const SkillIcons: React.FC<IProps> = ({ skillsData }) => {
  return (
    <div className='flex flex-wrap items-center justify-center w-full mx-auto skill-icons lg:w-2/3'>
      {skillsData.map((skill) => (
        <div className='relative mx-16 my-10 skill' key={skill!.title}>
          {skill.altIcon !== null ? (
            <div className='flex items-center justify-center h-36 w-60'>
              {skill.altIcon}{' '}
              {skill.showTitle && (
                <p
                  style={{
                    textShadow: '1px 1px 10px black',
                    fontFamily: 'system-ui',
                  }}
                  className='absolute inset-0 flex items-center justify-center mt-3 text-3xl font-extrabold text-center text-white'
                >
                  {skill.title}
                </p>
              )}
            </div>
          ) : (
            <FontAwesomeIcon
              icon={skill.icon!}
              className='text-8xl md:text-10xl'
            />
          )}
          {skill.showTitle && (
            <p
              style={{
                textShadow: '1px 1px 10px black',
                fontFamily: 'system-ui',
              }}
              className='absolute inset-0 flex items-center justify-center mt-3 text-3xl font-extrabold text-center text-white'
            >
              {skill.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
