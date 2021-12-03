// Styling
import bannerStyles from '../../styles/Banner.module.scss';
// Animation
// Components
import Image from 'next/image';
import Link from 'next/Link';

const EmploymentDefault = () => {
  return (
    <Link href='https://www.ironmongerydirect.co.uk'>
      <a target='_blank' className={`${bannerStyles['row-col']}`}>
        <span
          className={`${bannerStyles['row-message']} relative text-2xl p-3 sm:m-0 sm:text-3xl`}
        >
          Senior React Developer at{' '}
          <span className='font-sans text-4xl font-extrabold'>
            IronmongeryDirect{' '}
          </span>{' '}
          - Basildon, Essex
          <div className='absolute items-center hidden p-12 rounded-full xl:flex w-52 h-52 -right-32 -bottom-12 bg-blackLighter'>
            <Image
              src='https://res.cloudinary.com/jleomorris/image/upload/v1638421148/Portfolio-v5/id-dark-bg.svg'
              width='76'
              height='52'
              objectFit='contain'
              objectPosition='center'
              alt='ironmongery direct'
            />
          </div>
        </span>
      </a>
    </Link>
  );
};

export default EmploymentDefault;
