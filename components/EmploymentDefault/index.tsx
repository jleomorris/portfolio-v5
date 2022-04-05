// Styling
import bannerStyles from "../../styles/Banner.module.scss";
// Animation
// Components
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const EmploymentDefault: React.FC = (): ReactElement => {
  return (
    <Link href="https://www.yourwelcome.com/">
      <a target="_blank" className={`${bannerStyles["row-col"]}`}>
        <span
          className={`${bannerStyles["row-message"]} relative text-2xl p-3 sm:m-0 sm:text-3xl`}
        >
          Front End Developer at{" "}
          <span className="font-sans text-4xl font-extrabold">
            YourWelcome{" "}
          </span>{" "}
          - London
          <div className="absolute items-center hidden p-12 rounded-full xl:flex w-52 h-52 -right-32 -bottom-12 bg-white">
            <Image
              src="https://res.cloudinary.com/jleomorris/image/upload/v1649191629/Portfolio-v5/yw-header-magenta.png"
              width="76"
              height="52"
              objectFit="contain"
              objectPosition="center"
              alt="ironmongery direct"
            />
          </div>
        </span>
      </a>
    </Link>
  );
};

export default EmploymentDefault;
