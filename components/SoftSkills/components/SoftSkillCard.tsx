// Next
import Image from 'next/image';

interface IProps {
  softSkill: {
    name: string;
    description: string;
    imgURL: string;
  };
}

const SoftSkillCard: React.FC<IProps> = ({ softSkill }) => {
  return (
    <div className='soft-skill-card w-96 xl:w-112 mr-20'>
      <div
        className='h-96 xl:h-112 w-96 xl:w-112 mb-10 relative border border-black'
        style={{ border: '2px solid black' }}
      >
        <Image layout='fill' alt='skill' src={softSkill.imgURL} />
      </div>
      <h4 className='text-5xl mb-4 font-extrabold'>{softSkill.name}</h4>
      <p className='text-3xl font-light w-11/12 sm:w-10/12'>
        {softSkill.description}
      </p>
    </div>
  );
};

export default SoftSkillCard;
