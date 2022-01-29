// Components
import Next from '../Icons/NextJs';
import Tailwind from '../Icons/Tailwind';
import SkillIcons from '../TechnicalSkills/components/SkillIcons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const skillsData = [
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        // className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043580/Portfolio-v5/Skills/jest.png'
      />
    ),
    title: 'Jest',
    showTitle: true,
  },
  {
    icon: faCode,
    altIcon: <Next />,
    title: 'Next',
    showTitle: false,
  },
  {
    icon: faCode,
    altIcon: (
      <Image
        layout='fill'
        objectFit='contain'
        // className='object-contain h-36'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043837/Portfolio-v5/Skills/redux.png'
      />
    ),
    title: 'Redux',
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
      />
    ),
    title: 'Typescript',
    showTitle: false,
  },
];

const CurrentlyUsedSkills = () => {
  return (
    <div className='currently-used-skills'>
      <h3 className='w-full mx-auto mt-20 mb-32 text-6xl font-extrabold text-center sm:mt-0 sm:text-8xl xl:w-1/2'>
        My Current Tech Stack
      </h3>
      <SkillIcons skillsData={skillsData} />
    </div>
  );
};

export default CurrentlyUsedSkills;
