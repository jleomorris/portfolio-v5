// Hooks
import { useScroll } from '../../hooks/useScroll';
// Animation
import { motion } from 'framer-motion';
// Types
import { project } from '../../types';
// Components
import PageContainer, { Variant } from '../../components/PageContainer';
import Image from 'next/image';
import Links from './components/Links';
import ScrollAnimationChild, {
  Variant as animationChildVariant,
} from '../../components/FramerMotion/ScrollAnimationChild';

interface IProps {
  project: project;
}

const ProjectDescription: React.FC<IProps> = ({ project }) => {
  const [element, controls] = useScroll();

  return (
    <PageContainer
      key={project.subTitle}
      variant={Variant.TIGHT}
      noFlex={false}
      noFullHeight
    >
      <ScrollAnimationChild
        variant={animationChildVariant.ABOUTROTATION}
        animate={controls}
        elRef={element}
      >
        <div className={`text-black flex flex-col justify-start`}>
          <p className='text-3xl font-bold md:text-6xl mt-28 font-vesterbroPoster xl:w-10/12'>
            {project.description}
          </p>
        </div>
        <Links project={project} />
      </ScrollAnimationChild>
      <div className='relative w-full h-96 md:h-260 2xl:mt-96'>
        <Image
          src={project.headerImgURL}
          layout='fill'
          width='100%'
          height='100%'
          objectFit='contain'
          objectPosition='center'
          alt='main'
        />
      </div>
    </PageContainer>
  );
};

export default ProjectDescription;
