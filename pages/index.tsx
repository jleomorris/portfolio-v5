// Next
import Head from "next/head";
import Image from "next/image";
// Styling
import homeStyles from "../styles/Home.module.css";
import bannerStyles from "../styles/Banner.module.scss";
// Animation
import { motion } from "framer-motion";
// Components
import PageContainer, { Variant } from "../components/PageContainer";
import SoftSkills from "../components/SoftSkills";
import TechnicalSkills from "../components/TechnicalSkills";
import CurrentlyUsedSkills from "../components/CurrentlyUsedSkills";
import Banner from "../components/Banner";
import ImageDescription from "../components/ImageDescription";
import Link from "next/link";
import EmploymentResponsive from "../components/EmploymentResponsive";
import ProjectHomeTile from "../components/ProjectHomeTile";
import { timeline } from "motion";

const tileData = [
  {
    title: "LDR | RANDOM GENERATOR",
    backgroundImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1637275032/Portfolio-v5/Projects/LDR/random.jpg",
    iconImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1636320699/Portfolio-v5/Projects/kharnivore.jpg",
    projectLink: "/projects/LDR_Generator",
    description: "Some Love Death and Robots randomness",
  },
  {
    title: "POKE PRICE",
    backgroundImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1637277998/Portfolio-v5/Projects/poke-price/search-options-history.jpg",
    iconImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1636328176/Portfolio-v5/Projects/Charizard.png",
    iconBgColor: "bg-red-400",
    projectLink: "/projects/Poke_Price",
    description: "Get the prices of your childhood favourites",
  },
  {
    title: "MODERN POKEDEX",
    backgroundImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1637201358/Portfolio-v5/Projects/modern-pokedex/filters.jpg",
    iconImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1636324383/Portfolio-v5/Projects/gyarados.png",
    iconBgColor: "bg-blue-400",
    projectLink: "/projects/Modern_Pokedex",
    description: "A Modern Twist On The First Gen Pokedex",
  },
  {
    title: "LAST LIFE",
    backgroundImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1637278931/Portfolio-v5/Projects/last-life/details.jpg",
    iconImgUrl:
      "https://res.cloudinary.com/jleomorris/image/upload/v1636325505/Portfolio-v5/Projects/jin_sakai.png",
    iconBgColor: "bg-blue-200",
    projectLink: "/projects/Last_Life",
    description: "Get The Latest News On Your Favourite Games",
  },
];

export default function Home() {
  return (
    <div className="home pt-nav">
      <Banner />
      <div className="mt-24 cursor-pointer">
        <div className="flex flex-wrap mx-auto project-collage bg-blackLighter">
          {tileData.map((tile) => (
            <ProjectHomeTile
              key={tile.title}
              title={tile.title}
              backgroundImgUrl={tile.backgroundImgUrl}
              iconImgUrl={tile.iconImgUrl}
              iconBgColor={tile?.iconBgColor}
              projectLink={tile.projectLink}
              description={tile.description}
            />
          ))}
        </div>
      </div>
      {/* <div
        className={`${bannerStyles['transitionImage--final']} p-10 sm:p-20 relative bg-white rounded-3xl bg-opacity-70 border-4 border-black`}
      >
        <motion.img
          src={`https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223587/Portfolio-v5/3D-stripy/budda_ceg7wv.png`}
          layoutId='main-image-1'
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          }}
          className='sm:mt-32'
        />
        <div
          className='absolute w-full sm:w-2/3 xl:hidden bottom-12 sm:bottom-24'
          style={{ left: '50%', transform: 'translatex(-50%)' }}
        >
          <EmploymentResponsive />
        </div>
      </div> */}
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <div className="w-full">
          <SoftSkills />
        </div>
      </PageContainer>
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <TechnicalSkills />
      </PageContainer>
      <PageContainer variant={Variant.NORMAL} noFlex={false}>
        <CurrentlyUsedSkills />
      </PageContainer>
    </div>
  );
}
