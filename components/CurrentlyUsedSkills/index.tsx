// Components
import NextJs from '../Icons/NextJs';
import Tailwind from '../Icons/Tailwind';

const CurrentlyUsedSkills = () => {
  return (
    <div className='currently-used-skills'>
      <h3 className='text-8xl mb-32 font-extrabold text-center w-full xl:w-1/2 mx-auto'>
        Tools I currently use.
      </h3>
      <div
        className='border border-red-900 w-full lg:w-2/3 mx-auto flex flex-wrap justify-center items-center'
        style={{ border: '1px solid red' }}
      >
        <div className='my-10 mx-16 w-40'>
          <NextJs />
        </div>
        <div className='my-10 mx-16'>
          <p className='text-8xl'>Redux</p>
        </div>
        <div className='my-10 mx-16 w-40'>
          <Tailwind />
        </div>
        {/* {skillIcons.map((skillIcon) => (
          <div className='my-10 mx-16'>
            <FontAwesomeIcon
              key={skillIcon.toString()}
              icon={skillIcon}
              className='text-8xl md:text-10xl'
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CurrentlyUsedSkills;
