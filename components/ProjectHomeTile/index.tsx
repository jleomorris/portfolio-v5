import { useState } from "react";
// Animation
import { motion } from "framer-motion";
// Components
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  backgroundImgUrl: string;
  iconImgUrl: string;
  iconBgColor?: string;
  projectLink: string;
  description: string;
}

// Variants
const backgroundAnimation = {
  initial: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const descriptionAnimation = {
  initial: {
    x: "-100%",
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    x: "-100%",
    transition: {
      duration: 0.5,
    },
  },
};

const iconAnimation = {
  initial: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  animate: {
    x: "100%",
    opacity: 1,
    scale: 0.7,
    rotate: 90,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const ProjectHomeTile: React.FC<IProps> = ({
  title,
  backgroundImgUrl,
  iconImgUrl,
  iconBgColor,
  projectLink,
  description,
}): React.ReactElement => {
  const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

  return (
    <div
      className="relative w-full overflow-hidden sm:transform -skew-x-10 sm:w-1/2 lg:w-1/4 project-home-tile"
      onMouseEnter={() => setIsHoveredOver(true)}
      onMouseLeave={() => setIsHoveredOver(false)}
    >
      <motion.div
        variants={descriptionAnimation}
        initial="initial"
        animate={isHoveredOver ? "animate" : "exit"}
        exit="exit"
        className="absolute flex justify-center items-center flex-col text-white top-0 left-0 h-full w-1/2 bg-black bg-opacity-60 z-10 p-5"
      >
        <div className="sm:transform skew-x-10">
          <h2 className="text-4xl font-vesterbroPoster text-center">
            {description}
          </h2>
          <p className="text-2xl mt-3 text-center">
            Click image to see project &rarr;
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={backgroundAnimation}
        initial="initial"
        animate={isHoveredOver ? "animate" : "exit"}
        exit="exit"
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full transition-colors duration-1000 bg-black bg-opacity-60"
      >
        <div className="flex flex-col items-center justify-center sm:transform skew-x-10">
          <h2 className="text-6xl text-center text-white font-vesterbroPoster ">
            {title}
          </h2>
          <div className="w-6/12 h-1 mt-2 bg-white" />
          <motion.div
            variants={iconAnimation}
            initial="initial"
            animate={isHoveredOver ? "animate" : "exit"}
            exit="exit"
            className={`relative w-64 h-64 mt-5 overflow-hidden rounded-full ${
              iconBgColor ? iconBgColor : ""
            }`}
          >
            <Image layout="fill" objectFit="cover" src={iconImgUrl} alt="LDR" />
          </motion.div>
        </div>
      </motion.div>
      <Link href={projectLink}>
        <a>
          <div className="relative -left-15 w-120% sm:transform skew-x-10 h-120 sm:h-160">
            <Image
              layout="fill"
              src={backgroundImgUrl}
              alt="LDR"
              objectFit="cover"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectHomeTile;
