// Next
import SoftSkillCard from "./components/SoftSkillCard";
// Alice Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Image sources
// <a href="https://storyset.com/people">People illustrations by Storyset</a>
// <a href='https://storyset.com/web'>Web illustrations by Storyset</a>;
// <a href="https://storyset.com/work">Work illustrations by Storyset</a>
// <a href="https://storyset.com/online">Online illustrations by Storyset</a>
// <a href="https://storyset.com/people">People illustrations by Storyset</a>
// <a href="https://storyset.com/app">App illustrations by Storyset</a>

const softSkillData = [
  {
    name: "Ability To Learn",
    description:
      "From legacy architecture to modern JS frameworks, I'm always willing to learn and adopt new technologies. I have no issues upskilling on the job and strive for continual development in my personal time as well.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638222782/Portfolio-v5/3D-stripy/table-1.png",
  },
  {
    name: "Single Page Apps",
    description:
      "Creating single page apps from designs is a large part of my day to day and is something I'm particulary skilled in.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223097/Portfolio-v5/3D-stripy/notebook.png",
  },
  {
    name: "Collaboration",
    description:
      "Doesn't matter if it's marketing or design, I can work with multiple teams and have well developed verbal and written communication skills.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223262/Portfolio-v5/3D-stripy/man-at-work.png",
  },
  {
    name: "UI and UX design",
    description:
      "I enjoy learning about the ins and outs of UI and UX design and it's always in the forefront of my mind when analysing designs and creating web applications.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223394/Portfolio-v5/3D-stripy/picture_pfi0ug.png",
  },
  {
    name: "Accessibility",
    description:
      "It's important that all users have the same great experience on your web application, as such I'm well versed in current accessibility standards.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223598/Portfolio-v5/3D-stripy/stripy-1_kjl9nu.png",
  },
  {
    name: "Responsive Design",
    description:
      "You want your users to have the same positive experience - no matter what device they are using. As such I'm well versed in the best responsive design methods.",
    imgURL:
      "https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1638223596/Portfolio-v5/3D-stripy/chel_mkjoty.png",
  },
];

const responsive = {
  0: { items: 1.25 },
  320: { items: 1.5 },
  568: { items: 2.25 },
  800: { items: 3.2 },
  1200: { items: 3.5 },
  1600: { items: 4.8 },
  1920: { items: 5.2 },
};

const SoftSkills = () => {
  const items = softSkillData.map((softSkill) => (
    <SoftSkillCard key={softSkill.name} softSkill={softSkill} />
  ));

  return (
    <div className="soft-skills">
      <h3 className="mt-32 mb-32 text-6xl font-extrabold sm:text-8xl sm:mt-0">
        Soft Skills
      </h3>
      <div className="cursor-pointer xl:ml-40">
        <AliceCarousel
          // autoPlay
          // autoPlayInterval={3000}
          animationType="fadeout"
          // infinite
          mouseTracking
          keyboardNavigation
          items={items}
          responsive={responsive}
          disableButtonsControls
          // disableDotsControls
          controlsStrategy="alternate"
        ></AliceCarousel>
        {/* {softSkillData.map((softSkill) => (
          <SoftSkillCard key={softSkill.name} softSkill={softSkill} />
        ))} */}
      </div>
    </div>
  );
};

export default SoftSkills;
