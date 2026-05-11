import React from "react";

export const ExperienceCard = ({
  logo,
  profession,
  company,
  date,
  description = [],
  url,
}) => {
  return (
    <div data-aos="fade-up">
      <div className="group rounded-xl shadow-xl border border-white/50 mx-auto flex flex-col justify-between gap-6 p-12 transition-all duration-500 ease-in-out hover:border-sky-400/70 hover:shadow-sky-500/20 hover:shadow-2xl md:flex-row">
        <div className="max-md:order-1 md:w-1/4 md:grid place-items-center">
          <img src={logo} alt="company_logo" className="w-[90px] md:w-[140px]" />
        </div>
        <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
          <h5 className="font-bold md:text-2xl transition-colors duration-500 group-hover:text-sky-400">{profession}</h5>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 w-fit text-sm font-extralight text-gray-400 hover:text-sky-400 transition-colors duration-200"
            >
              {company}
              <span className="text-gray-600 group-hover/link:text-sky-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200 text-xs">↗</span>
            </a>
          ) : (
            <span className="text-sm font-extralight text-gray-400">{company}</span>
          )}
          <ul className="flex list-disc flex-col gap-2 text-sm md:gap-1 leading-relaxed text-gray-400 group-hover:text-white transition-colors duration-500">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="max-md:order-2 md:w-1/4 md:text-center">
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
};
