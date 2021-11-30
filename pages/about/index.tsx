// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import AboutSection from '../../components/AboutSection';
import React, { ReactChild, ReactElement, ReactFragment } from 'react';

const aboutData = [
  {
    title: 'My developer journey',
    content: [
      'From Sep 2019-Mar 2021 I worked as a front end developer at the digital learning company Saffron Interactive. Over this period I built solid foundations as a developer and gained a keen eye for UI, UX and responsive design.',
      "In Mar 2021 I began a new role at IronmongeryDirect as a React developer. In my time here I've between promoted to senior, have learnt Next.js, improved my knowledge of SEO and have contributed to multiple new projects in line with a company rebrand.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636172413/Portfolio-v5/About/front-end-developer.png',
  },
  {
    title: 'My qualifications',
    content: [
      'Completing a Bsc in Forensic Biology (2:1) taught me the importance of attention to detail and analytical thinking.',
      'The Msc I gained in Computer Science (Merit) introduced me to the industry, the skills and the mindset I would need to begin my career as a developer.',
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636210765/Portfolio-v5/About/graduation_imyrx1.png',
  },
  {
    title: 'My motivations',
    content: [
      'After completing my Bsc I fell out of love with forensics. Soon after I began to build custom desktops and develop my first web pages in HTML & CSS.',
      "Web development is perfect for me as it allows me to combine my passion for tech and art/design. I'm driven to become as strong a developer as I can be and like to maintain a high rate of learning in my personal time.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636211048/Portfolio-v5/About/motivation.png',
  },
  {
    title: 'My hobbies',
    content: [
      "In my spare time I build custom desktops, play guitar and create digtal art. I also like to go on hiking trips as I believe it's important to cut off from all things digital every once in a while.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636211661/Portfolio-v5/About/hobbies.png',
  },
];

const About: React.FC = (): ReactElement => {
  return (
    <div className='about'>
      <PageContainer variant={Variant.TIGHT} noFlex={false}>
        <div className='flex flex-col items-start justify-center w-full h-full'>
          <p className='mb-10 font-sans font-bold uppercase'>About</p>
          <h1 className='font-extrabold font-vesterbroPoster text-8xl lg:text-9xl 2xl:w-2/3'>
            {`I'm a problem solver, designer and technology addict`}
          </h1>
        </div>
      </PageContainer>
      {aboutData.map((about, index) => (
        <PageContainer key={about.title} variant={Variant.TIGHT} noFlex={false}>
          <AboutSection about={about} index={index} />
        </PageContainer>
      ))}
    </div>
  );
};

export default About;
