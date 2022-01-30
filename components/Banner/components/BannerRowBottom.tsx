// Animation
import { motion } from "framer-motion";
// Styling
import bannerStyles from "../../../styles/Banner.module.scss";
// Components
import AnimatedLetters from "./AnimatedLetters";
import Image from "next/image";

// Variants
const bannerRowBottom = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1,
    },
  },
};

interface IProps {
  title: string;
}

const BannerRowBottom: React.FC<IProps> = ({ title }) => {
  return (
    <div
      className={`${bannerStyles.bannerRow} ${bannerStyles.center} relative`}
    >
      <motion.div
        className={`hidden xl:block rounded-full absolute h-72 w-72 left-72 -bottom-10 mt-10`}
        variants={bannerRowBottom}
        initial="initial"
        animate="animate"
      >
        <div className="w-full h-full relative rounded-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/jleomorris/image/upload/v1643565053/profile_picture.jpg"
            alt="profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default BannerRowBottom;
