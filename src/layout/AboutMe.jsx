import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile-img.jpg";
import { Card } from "flowbite-react";


const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={'_about'}>
      <div className="flex justify-center md:flex-row">
        <Card style={{ maxWidth: '64rem', border: 'none'}} className="bg-opacity-10 max-w-sm" imgSrc={profileImg} horizontal color="dark">  
          <h5 className="text-2xl font-bold tracking-tigh dark:text-white">
              About Me
          </h5>
          <p className="text-sm dark:text-gray-400">
            I’m an aspiring web and mobile developer as well as a UI/UX designer.
            Throughout my university journey, I took charge of designing,
            prototyping, and developing various web and mobile projects, igniting my
            passion for the digital world. I'm dedicated to staying updated on the
            latest trends in web and mobile development, committing myself to
            continuous learning in this rapidly evolving industry.
          </p>
        </Card>
      </div>

    </SectionContainer>
  );
};

export default AboutMe;
