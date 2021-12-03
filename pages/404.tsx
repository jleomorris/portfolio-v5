// Components
import Link from 'next/Link';
import PageContainer, { Variant } from '../components/PageContainer';
import Image from 'next/image';

const Error404 = () => {
  return (
    <PageContainer variant={Variant.NORMAL} noFlex={false}>
      <h1 className='text-center text-7xl md:text-8xl'>404 - Page Not Found</h1>
      <div className='relative my-20 sm:my-28 h-120 w-120 sm:h-160 sm:w-160'>
        <Image
          src='https://res.cloudinary.com/jleomorris/image/upload/v1638230620/Portfolio-v5/3D-stripy/lamp.png'
          layout='fill'
          objectFit='contain'
          alt='404 error'
        />
      </div>
      <Link href='/'>
        <a className='text-4xl'>Go to homepage</a>
      </Link>
    </PageContainer>
  );
};

export default Error404;
