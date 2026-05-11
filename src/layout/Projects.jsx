import React from "react";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../lib/projects";

const Projects = () => {
  return (
    <SectionContainer
      sectionName={"Projects"}
      id={"projects"}
      bgColor="bg-secondary"
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          previewImage={project.previewImage}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          githubUrl={project.githubUrl}
          url={project.url}
          isReversed={index % 2 === 1}
        />
      ))}
    </SectionContainer>
  );
};

export default Projects;
