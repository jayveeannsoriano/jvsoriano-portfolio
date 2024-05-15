import React from "react";

const TechPill = ({ technologies = [] }) => {
  return (
    <>
      {technologies.map((item, index) => (
        <div key={index} className="flex items-center justify-center rounded-full border border-sky-800 text-sm text-gray-50 px-5 py-2">
          {item}
        </div>
      ))}
    </>
  );
};

export default TechPill;
