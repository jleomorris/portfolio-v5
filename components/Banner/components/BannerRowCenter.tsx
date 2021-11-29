// Styling
import bannerStyles from '../../../styles/Banner.module.scss';
import marqueeStyles from '../../../styles/Marquee.module.scss';
// Components
import AnimatedLetters from './AnimatedLetters';

interface IProps {
  title: string;
  playMarquee: boolean;
}

const BannerRowCenter: React.FC<IProps> = ({ title, playMarquee }) => {
  return (
    <div
      className={`${bannerStyles.bannerRow} ${marqueeStyles.marquee}  ${
        playMarquee && marqueeStyles.animate
      }`}
    >
      <div className={marqueeStyles['marquee__inner']}>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default BannerRowCenter;
