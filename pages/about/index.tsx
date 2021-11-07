// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import AboutSection from '../../components/AboutSection';

const aboutData = [
  {
    title: 'My developer journey',
    content: [
      'From Sep 2019-March 2021 I worked as a front end developer at the digital learning company Saffron Interactive. Over this period I built solid foundations in HTML5, JS, CSS, SCSS and React. I also developed a keen eye for UI, UX and responsive design.',
      "In March 2021 I began a new role at IronmongeryDirect as a React developer. In my time here I've strengthened my React and Redux principles, learnt Next.js, improved my knowledge of SEO and have contributed to multiple new exciting projects in line with a company rebrand.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636172413/Portfolio-v5/About/front-end-developer.png',
  },
  {
    title: 'My qualifications',
    content: [
      'Completing a Bsc in Forensic Biology (2:1) taught me the importance of attention to detail and analytical thinking.',
      'The Msc I completed in Computer Science introduced me to the industry, the skills and the mindset I would need to begin my career as a developer.',
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636210765/Portfolio-v5/About/graduation_imyrx1.png',
  },
  {
    title: 'My motivations',
    content: [
      'In my youth I was passionate about art but I dropped this in favor of something more academic. However, after completing my Bsc  I fell out of love with forensics. It was at this moment I began to build custom desktops and dabble in HTML & CSS.',
      "Web development is perfect for me as it allows me to combine my passion for tech and art/design. I'm driven to become as strong a developer as I can be and I like to maintain a high rate of learning in my personal time.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636211048/Portfolio-v5/About/motivation.png',
  },
  {
    title: 'My hobbies',
    content: [
      "In my spare time I build custom desktops (I'm a big fan of small form factor PCs). When I have time to travel I also like to go on hiking trips, and I've also been known to pick up a guitar and carry out some song writing from time to time.",
    ],
    imgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636211661/Portfolio-v5/About/hobbies.png',
  },
];

const About = () => {
  return (
    <div className='about'>
      <PageContainer variant={Variant.TIGHT} noFlex={false}>
        <div className='flex flex-col items-start justify-center w-full h-full'>
          <p className='mb-10 font-sans font-bold uppercase'>About</p>
          <h1 className='font-extrabold font-vesterbroPoster text-8xl lg:text-9xl 2xl:w-2/3'>
            I'm a problem solver, designer and technology addict
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
