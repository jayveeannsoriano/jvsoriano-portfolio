import React from "react";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../lib/projects";

const Projects = () => {
  return (
    <SectionContainer
      sectionName={"_projects"}
      id={"projects"}
      bgColor="bg-secondary"
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          previewImage={project.previewImage}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          url={project.url}
          isReversed={index % 2 === 1} // Apply reverse layout for alternate projects
        />
      ))}
    </SectionContainer>
  );
};

export default Projects;
