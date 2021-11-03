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

const skillIcons = [
  faAws,
  faBootstrap,
  faCss3Alt,
  faGit,
  faHtml5,
  faJsSquare,
  faNode,
  faNpm,
  faReact,
  faSass,
];

const TechnicalSkills = () => {
  return (
    <div className='technical-skills'>
      <h3 className='text-8xl mb-32 font-extrabold text-center w-full xl:w-1/2 mx-auto'>
        Services and tools I have experience with.
      </h3>
      <div
        className='border border-red-900 w-full lg:w-2/3 mx-auto flex flex-wrap justify-center items-center'
        style={{ border: '1px solid red' }}
      >
        {skillIcons.map((skillIcon) => (
          <div className='my-10 mx-16'>
            <FontAwesomeIcon
              key={skillIcon.toString()}
              icon={skillIcon}
              className='text-8xl md:text-10xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
