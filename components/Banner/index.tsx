import React, { useState, useEffect } from "react";
// Animation
import { motion } from "framer-motion";
// Styles
import bannerStyles from "../../styles/Banner.module.scss";
import marqueeStyles from "../../styles/Marquee.module.scss";
// Components
import BannerRowCenter from "./components/BannerRowCenter";
import BannerRowTop from "./components/BannerRowTop";
import BannerRowBottom from "./components/BannerRowBottom";

// Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div
      className={`${bannerStyles.banner} relative`}
      variants={banner}
      animate="animate"
    >
      <BannerRowTop title={"J.Morris"} />
      <BannerRowCenter title={"Front_End"} playMarquee={playMarquee} />
      <BannerRowBottom title={"Developer"} />
    </motion.div>
  );
};

export default Banner;
