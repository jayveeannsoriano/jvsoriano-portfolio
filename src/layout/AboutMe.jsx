import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile.jpg";
import { FaBirthdayCake } from "react-icons/fa";

const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={"_about"}>
      <div data-aos="fade-left" className="mx-auto flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="md:w-1/2 p-2 flex justify-center">
          <img
            src={profileImg}
            className="rounded-xl w-[480px] shadow-lg"
          ></img>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 md:gap-5 md:self-center">
          <h1 className="font-bold text-center tracking-tighter text-sm md:text-lg md:text-left">
            const myNicknames = ['Jian', 'Jayvee', 'Jebeann'];
          </h1>
          <p className="text-wrap text-sm font-light md:text-base">
            I’m an aspiring web and mobile developer as well as a UI/UX
            designer. Throughout my university journey, I took charge of
            designing, prototyping, and developing various web and mobile
            projects, igniting my passion for the digital world.
          </p>
          <p className="text-wrap text-sm font-light md:text-base">
            Aside from that, my internship experience opened my eyes to the
            world of software development. I got to dive into the entire
            software development process, learning industry-standard coding
            principles and practices from junior and senior devs, and getting
            insights into agile methodologies and collaborative problem-solving.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
