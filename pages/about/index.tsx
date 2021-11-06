// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';

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
      <PageContainer variant={Variant.TIGHT}>
        <div className='flex flex-col justify-center items-start h-full w-full'>
          <p className='font-sans uppercase mb-10 font-bold'>About</p>
          <h1 className='font-vesterbroPoster text-9xl font-extrabold w-2/3  '>
            I'm a problem solver, designer and technology addict
          </h1>
        </div>
      </PageContainer>
      {aboutData.map((about, index) => (
        <PageContainer key={about.title} variant={Variant.TIGHT}>
          <section
            className={` flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
          >
            <div
              className={`w-1/2 flex flex-col justify-center ${
                index % 2 === 0 ? 'mr-20' : 'ml-20'
              }`}
            >
              <h2 className='font-vesterbroPoster font-extrabold text-8xl mb-10'>
                {about.title}
              </h2>
              {about.content.map((content, index) => (
                <p key={index} className='mb-5 text-3xl font-sans'>
                  {content}
                </p>
              ))}
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <div className='relative w-240 h-240'>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={about.imgURL}
                  alt='skill'
                />
              </div>
            </div>
          </section>
        </PageContainer>
      ))}
    </div>
  );
};

export default About;
