// Next
import Image from "next/image";
// Styling
import bannerStyles from "../../styles/Banner.module.scss";
// Components
import Link from "next/link";
import React, { ReactElement } from "react";

const EmploymentResponsive: React.FC = (): ReactElement => {
  return (
    <Link href="https://www.ironmongerydirect.co.uk">
      <a
        target="_blank"
        className={`${bannerStyles["row-col"]} text-center block mb-10`}
      >
        <span
          className={`${bannerStyles["row-message"]} text-2xl sm:m-0 sm:text-3xl`}
        >
          Front End Developer at{" "}
          <span className="font-sans text-4xl font-extrabold">
            YourWelcome{" "}
          </span>{" "}
          - London
          <div
            className="absolute flex items-center p-12 rounded-full -bottom-48 w-52 h-52 bg-white"
            style={{ left: "50%", transform: "translatex(-50%)" }}
          >
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

export default EmploymentResponsive;
