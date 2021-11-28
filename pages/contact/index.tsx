// Images and Icons
import githubBlack from '../../images/github-black.svg';
import linkedinBlack from '../../images/linkedin-black.svg';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='contact'>
      <PageContainer variant={Variant.TIGHT} noFlex={false}>
        <div className='flex flex-wrap items-start w-full h-full'>
          <div className=''>
            <h1 className='font-extrabold font-vesterbroPoster text-8xl lg:text-9xl 2xl:w-2/3'>
              {`Let's work together`}
            </h1>
            <div className='flex my-20 space-x-3'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/jleomorris'
              >
                <div className='relative w-12 h-12 mr-3'>
                  <Image
                    src={githubBlack}
                    alt='github'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/james-morris-62a66b166/'
              >
                <div className='relative w-12 h-12'>
                  <Image
                    src={linkedinBlack}
                    alt='github'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </a>
            </div>
          </div>
          <div className=''>
            <p className='mb-4 font-sans text-4xl font-bold'>New Business</p>
            <a href='' className='font-sans text-3xl font-normal underline'>
              jamesleomorris@gmail.com
            </a>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Contact;
