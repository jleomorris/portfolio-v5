// Next
import Link from 'next/Link';

const Nav: React.FC = () => {
  return (
    <div className='flex items-center justify-start h-20 px-10 bg-black nav sm:px-20 bg-opacity-80'>
      <ul className='flex justify-start w-1/3 space-x-6 text-xl text-white'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
