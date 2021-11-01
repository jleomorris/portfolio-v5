// Next
import Image from 'next/image';

// Image sources
// <a href="https://storyset.com/people">People illustrations by Storyset</a>
// <a href='https://storyset.com/web'>Web illustrations by Storyset</a>;
// <a href="https://storyset.com/work">Work illustrations by Storyset</a>
// <a href="https://storyset.com/online">Online illustrations by Storyset</a>
// <a href="https://storyset.com/people">People illustrations by Storyset</a>
// <a href="https://storyset.com/app">App illustrations by Storyset</a>

const softSkillData = [
  {
    name: 'Ability To Learn',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801313/Portfolio-v5/Home/Soft-skills/Learning.png',
  },
  {
    name: 'Single Page Apps',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801475/Portfolio-v5/Home/Soft-skills/Single-page-apps.png',
  },
  {
    name: 'Collaboration',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635800171/Portfolio-v5/Home/Soft-skills/Collaboration.png',
  },
  {
    name: 'UI and UX design',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801116/Portfolio-v5/Home/Soft-skills/UI_UX.png',
  },
  {
    name: 'Accessibility',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801660/Portfolio-v5/Home/Soft-skills/Accessibility.png',
  },
  {
    name: 'Responsive Design',
    description:
      "From legacy architecture to modern JS frameworks. Over my time in the industry I've had to learn many different skills to maintain legacy systems and redevelop into modern solutions. I'm driven to constantly improve myself and I always like to be learning something new",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801818/Portfolio-v5/Home/Soft-skills/Responsive-design.png',
  },
];

const SoftSkills = () => {
  return (
    <div className='soft-skills'>
      <h3 className='text-8xl mb-32 font-extrabold'>Soft Skills</h3>
      <div className='flex border border-black overflow-x-scroll'>
        {softSkillData.map((softSkill) => (
          <div
            className='soft-skill w-96 mr-20 border border-red-800'
            style={{ border: '2px solid red' }}
            key={softSkill.name}
          >
            <div
              className='h-96 w-96 mb-10 border-8 relative border-red-900'
              style={{ border: '2px solid green' }}
            >
              <Image layout='fill' alt='skill' src={softSkill.imgURL} />
            </div>
            <h4 className='text-5xl mb-4 font-extrabold'>{softSkill.name}</h4>
            <p className='text-3xl font-light'>{softSkill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
