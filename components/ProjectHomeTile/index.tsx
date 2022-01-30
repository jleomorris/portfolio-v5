// Components
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface IProps {
  title: string;
  backgroundImgUrl: string;
  iconImgUrl: string;
  iconBgColor?: string;
  projectLink: string;
}

const ProjectHomeTile: React.FC<IProps> = ({
  title,
  backgroundImgUrl,
  iconImgUrl,
  iconBgColor,
  projectLink,
}): React.ReactElement => {
  return (
    <div className='relative w-full overflow-hidden border-4 border-white border-opacity-0 sm:w-1/2 project-home-tile'>
      <div className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full transition-colors duration-1000 bg-black bg-opacity-90 hover:bg-transparent'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-6xl text-center text-white font-vesterbroPoster '>
            {title}
          </h2>
          <div className='w-6/12 h-1 mt-2 bg-white' />
          <div
            className={`relative w-64 h-64 mt-5 overflow-hidden rounded-full ${
              iconBgColor ? iconBgColor : ''
            }`}
          >
            <Image layout='fill' objectFit='cover' src={iconImgUrl} alt='LDR' />
          </div>
        </div>
      </div>
      <Link href={projectLink}>
        <a>
          <div className='relative w-full border h-160 sm:h-220 border-orange'>
            <Image
              layout='fill'
              src={backgroundImgUrl}
              alt='LDR'
              objectFit='cover'
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectHomeTile;
