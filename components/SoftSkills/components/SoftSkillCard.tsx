// Next
import Image from "next/image";

interface IProps {
  softSkill: {
    name: string;
    description: string;
    imgURL: string;
  };
}

const SoftSkillCard: React.FC<IProps> = ({ softSkill }) => {
  return (
    <div className="mr-20 soft-skill-card w-96 xl:w-112 p-10 flex flex-col items-left justify-center">
      <div className="relative mb-10 h-56 sm:h-80 xl:h-96 w-56 sm:w-80 xl:w-96">
        <Image
          layout="fill"
          alt="skill"
          objectFit="contain"
          src={softSkill.imgURL}
          draggable={false}
        />
      </div>
      <h4 className="mb-4 text-4xl text-left sm:text-5xl font-extrabold">
        {softSkill.name}
      </h4>
      <p className="w-10/12 sm:w-11/12 text-2xl sm:text-3xl font-light sm:w-full">
        {softSkill.description}
      </p>
    </div>
  );
};

export default SoftSkillCard;
