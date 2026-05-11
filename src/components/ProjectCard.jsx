import React from "react";
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
  index = 0,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col gap-8 md:items-center md:flex-row md:gap-14 md:my-4 ${isReversed ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Image */}
      <div className="md:w-1/2 group relative overflow-hidden rounded-xl border border-gray-800">
        <img
          src={previewImage}
          alt={name}
          className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Hover overlay with CTA */}
        {(url || githubUrl) && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center gap-3">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500 text-white text-xs font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
              >
                <PiGlobe className="h-3.5 w-3.5" />
                Live Site ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-800 text-white text-xs font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <FiGithub className="h-3.5 w-3.5" />
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* Project number */}
        <span className="text-[11px] font-mono text-sky-500 uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")} — Project
        </span>

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-bold text-white leading-snug">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-900/40 hover:border-sky-500/40 hover:text-sky-300 transition-colors duration-150"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link buttons */}
        {(url || githubUrl) && (
          <div className="flex gap-3 pt-1">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg border border-sky-500/50 text-sky-400 hover:bg-sky-400 hover:text-white ransition-all duration-200"
              >
                <PiGlobe className="h-3.5 w-3.5" />
                Live Site <span className="opacity-60">↗</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all hover:bg-gray-700  duration-200"
              >
                <FiGithub className="h-3.5 w-3.5" />
                GitHub <span className="opacity-60">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
