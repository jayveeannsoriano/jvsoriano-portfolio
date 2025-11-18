import React from "react";
import TechPill from "../components/TechPill";
import { FiGithub } from "react-icons/fi";
import { PiGlobe } from "react-icons/pi";


const ProjectCard = ({
  previewImage,
  name,
  description,
  technologies,
  url = null,
  githubUrl = null,
  isReversed,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`mx-auto flex flex-col gap-4 md:flex-row md:gap-12 md:my-8 ${isReversed ? "md:flex-row-reverse" : ""
        }`}
    >
      <div className="md:w-1/2 p-2">
        <img src={previewImage} alt="" className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-6 md:w-1/2 md:gap-6">
        <h1 className="font-bold text-center md:text-3xl md:text-left">{name}</h1>
        <p className="text-wrap text-sm font-light md:text-base">{description}</p>
        <div className="flex flex-wrap gap-2">
          <TechPill technologies={technologies} />
        </div>
        {(url || githubUrl) && (
          <div className="flex gap-3">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex p-1.5 rounded-lg text-white hover:text-sky-500 transition-colors gap-1 after:content-['_↗']"
                title="Visit Website"
              >
                <PiGlobe className="h-6 w-6" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-1.5 rounded-lg text-white hover:text-sky-500 transition-colors gap-1 after:content-['_↗']"
                title="View on GitHub"
              >
                <FiGithub className="h-6 w-6" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
