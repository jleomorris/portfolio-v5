// Next
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <div className='nav px-10 sm:px-20 h-20 flex justify-start items-center bg-black bg-opacity-80'>
      <ul className='text-white text-xl w-1/3 flex justify-start space-x-6'>
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
