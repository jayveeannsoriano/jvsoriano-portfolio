import React from "react";

export const ExperienceCard = ({
  logo,
  profession,
  date,
  description = [],
}) => {
  return (
    <div className="bg-secondary rounded-xl shadow-xl mx-auto flex flex-col justify-between gap-6 p-12 md:flex-row">
      <div className="max-md:order-1 md:w-1/4 md:grid place-items-center">
        <img src={logo} alt="wipro-logo" className="w-[90px] md:w-[140px]" />
      </div>

      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <h5 className="font-bold md:text-2xl">{profession}</h5>
        <ul className="flex list-disc flex-col gap-2 text-sm md:gap-1 leading-relaxed text-white">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="max-md:order-2 md:w-1/4 md:text-center">
        <h2>{date}</h2>
      </div>
    </div>
  );
};
