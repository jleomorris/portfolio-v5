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
    <div className='mr-20 soft-skill-card w-96 xl:w-112'>
      <div className='relative mb-10 border border-black h-96 xl:h-112 w-96 xl:w-112'>
        <Image layout='fill' alt='skill' src={softSkill.imgURL} />
      </div>
      <h4 className='mb-4 text-5xl font-extrabold'>{softSkill.name}</h4>
      <p className='w-11/12 text-3xl font-light sm:w-10/12'>
        {softSkill.description}
      </p>
    </div>
  );
};

export default SoftSkillCard;
