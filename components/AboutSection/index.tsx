// Components
import Image from 'next/image';
import ScrollAnimationChild, {
  Variant as animationChildVariant,
} from '../../components/FramerMotion/ScrollAnimationChild';
// Hooks
import { useScroll } from '../../hooks/useScroll';

interface IProps {
  about: about;
  index: number;
}

interface about {
  title: string;
  content: string[];
  imgURL: string;
}

const AboutSection: React.FC<IProps> = ({ about, index }) => {
  const [element, controls] = useScroll();

  return (
    <ScrollAnimationChild
      variant={animationChildVariant.ABOUTROTATION}
      animate={controls}
      elRef={element}
    >
      <section
        className={` flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? '' : 'lg:flex-row-reverse'
        }`}
      >
        <div
          className={`mt-20 lg:mt-0 order-1 lg:order-none lg:w-1/2 flex flex-col justify-center ${
            index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'
          }`}
        >
          <h2 className='mb-10 text-6xl font-extrabold font-vesterbroPoster sm:text-8xl'>
            {about.title}
          </h2>
          {about.content.map((content, index) => (
            <p key={index} className='mb-5 font-sans text-3xl'>
              {content}
            </p>
          ))}
        </div>
        <div className='flex items-center justify-center lg:w-1/2'>
          <div className='relative w-120 sm:w-220 lg:w-240 h-120 sm:h-220 lg:h-240'>
            <Image
              layout='fill'
              objectFit='contain'
              src={about.imgURL}
              alt='skill'
            />
          </div>
        </div>
      </section>
    </ScrollAnimationChild>
  );
};

export default AboutSection;
