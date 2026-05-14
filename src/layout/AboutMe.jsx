import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile.jpg";

const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={"About Me"}>
      <div
        data-aos="fade-up"
        className="mx-auto flex flex-col gap-4 md:flex-row md:gap-12"
      >
        <div className="md:w-1/2 p-2 flex justify-center">
          <img
            src={profileImg}
            className="rounded-xl w-[480px] shadow-lg"
            alt="profile-img"
          ></img>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 md:gap-5 md:self-center">
          <h1 className="font-bold text-center tracking-tighter text-sm md:text-lg md:text-left font-mono text-sky-400">
            const myNicknames = ['Jian', 'Jayvee', 'Jebeann'];
          </h1>
          <p className="text-wrap text-gray-400 text-sm font-light hover:text-white transition-colors duration-200 md:text-base">
            I’m a frontend developer currently working in application support for Texas Instruments through Wipro, where I handle production incidents and operational workflows across cross-functional teams. Alongside that, I design and build user-focused web applications using Next.js, Tailwind CSS, and modern frontend tooling.</p>
          <p className="text-wrap text-gray-400 text-sm font-light hover:text-white transition-colors duration-200 md:text-base">
            Most recently, I’ve been building a legal services platform focused on accessibility, usability, and simplifying complex workflows for elderly users and individuals living abroad. I enjoy translating real-world processes into interfaces that feel intuitive, reliable, and easy to navigate.
          </p>
          <p className="text-wrap text-gray-400 text-sm font-light hover:text-white transition-colors duration-200 md:text-base">
            I care about building products that hold up in production — not just visually, but functionally and operationally as well. My work is grounded in thoughtful UI design, maintainable frontend systems, and creating experiences that reduce friction for real users.          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
