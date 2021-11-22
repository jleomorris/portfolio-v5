import Link from 'next/link';

const TabletMobileHeader = () => {
  return (
    <div className='absolute top-0 right-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-main lg:hidden tablet-mobile-header'>
      <ul className='space-y-24 text-8xl font-vesterbroPoster'>
        <li>
          <Link href='/about'>
            <a className={`hover:underline pb-1`}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a className={`hover:underline pb-1`}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className={`hover:underline pb-1`}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabletMobileHeader;
