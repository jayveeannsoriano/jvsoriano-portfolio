import React from "react";
import SectionContainer from "../components/SectionContainer";
import { ExperienceCard } from "../components/ExperienceCard";
import wiproLogo from "../assets/wipro-logo.png";
import ffufLogo from "../assets/ffuf-logo.png";
import { wiproExp } from "../lib/data";
import { ffufExp } from "../lib/data";

const Experiences = () => {
  return (
    <SectionContainer sectionName={"_experiences"}>
      <ExperienceCard
        logo={wiproLogo}
        profession={"Application Support Engineer"}
        date={"Dec 2023 - Present"}
        description={wiproExp}
      />

      <ExperienceCard
        logo={ffufLogo}
        profession={"Flutter Mobile Dev Intern"}
        date={"Jan 2023 - May 2023"}
        description={ffufExp}
      />
    </SectionContainer>
  );
};

export default Experiences;
