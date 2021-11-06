// Components
import PageContainer, { Variant } from '../../components/PageContainer';

const About = () => {
  return (
    <div className='about'>
      <PageContainer variant={Variant.TIGHT}>
        <p className='uppercase mb-10'>About Me</p>
        <h1 className='text-8xl font-extrabold w-1/2'>
          I'm a problem solver, designer and technology addict
        </h1>
      </PageContainer>
    </div>
  );
};

export default About;
