// Components
import Next from '../Icons/NextJs';
import Tailwind from '../Icons/Tailwind';
import SkillIcons from '../TechnicalSkills/components/skillIcons';

const skillsData = [
  {
    icon: null,
    altIcon: (
      <img
        className='h-36 object-contain'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043580/Portfolio-v5/Skills/jest.png'
      />
    ),
    title: 'Jest',
    showTitle: true,
  },
  {
    icon: null,
    altIcon: <Next />,
    title: 'Next',
    showTitle: false,
  },
  {
    icon: null,
    altIcon: (
      <img
        className='h-36 object-contain'
        src='https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636043837/Portfolio-v5/Skills/redux.png'
      />
    ),
    title: 'Redux',
    showTitle: true,
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
];

const CurrentlyUsedSkills = () => {
  return (
    <div className='currently-used-skills'>
      <h3 className='text-8xl mb-32 font-extrabold text-center w-full xl:w-1/2 mx-auto'>
        My current tech stack.
      </h3>
      <SkillIcons skillsData={skillsData} />
    </div>
  );
};

export default CurrentlyUsedSkills;
