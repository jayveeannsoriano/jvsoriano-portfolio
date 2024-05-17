import React from "react";
import SectionContainer from "../components/SectionContainer";
import { ExperienceCard } from "../components/ExperienceCard";
import { EXPERIENCE } from "../lib/experience";

const Experiences = () => {
  return (
    <SectionContainer sectionName={"_experiences"}>
      {EXPERIENCE.map((experience, index) => (
        <ExperienceCard
          key={index}
          logo={experience.logo}
          profession={experience.profession}
          company={experience.company}
          date={experience.date}
          description={experience.description}
          url={experience.url}
        />
      ))}
    </SectionContainer>
  );
};

export default Experiences;
