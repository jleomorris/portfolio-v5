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
      "From legacy architecture to modern JS frameworks, I'm always willing to learn and adopt new technologies. I have no issues upskilling on the job and strive for continual development in my personal time as well.",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801313/Portfolio-v5/Home/Soft-skills/Learning.png',
  },
  {
    name: 'Single Page Apps',
    description:
      "Creating single page apps from designs is a large part of my day to day and is something I'm particulary skilled in.",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801475/Portfolio-v5/Home/Soft-skills/Single-page-apps.png',
  },
  {
    name: 'Collaboration',
    description:
      "Doesn't matter if it's marketing or design, I can work with multiple teams and have well developed verbal and written communication skills.",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635800171/Portfolio-v5/Home/Soft-skills/Collaboration.png',
  },
  {
    name: 'UI and UX design',
    description:
      "I enjoy learning about the ins and outs of UI and UX design and it's always in the forefront of my mind when analysing designs and creating web applications.",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801116/Portfolio-v5/Home/Soft-skills/UI_UX.png',
  },
  {
    name: 'Accessibility',
    description:
      "It's important that all users have the same great experience on your web application, as such I'm well versed in current accessibility standards.",
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1635801660/Portfolio-v5/Home/Soft-skills/Accessibility.png',
  },
  {
    name: 'Responsive Design',
    description:
      "You want your users to have the same positive experience - no matter what device they are using. As such I'm well versed in the best responsive design methods.",
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
            className='soft-skill w-112 mr-20'
            // style={{ border: '2px solid red' }}
            key={softSkill.name}
          >
            <div
              className='h-112 w-112 mb-10 relative border border-black'
              style={{ border: '2px solid black' }}
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
