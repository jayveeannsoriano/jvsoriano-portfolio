import React from "react";

export const LinkPill = ({ logo: LogoComponent, label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-3 px-5 py-2 justify-center bg-sky-800 rounded-full">
        <div className="text-white text-center">
          <LogoComponent className="h-6 w-6" />
        </div>
        <p className="text-md">{label}</p>
      </div>
    </a>
  );
};
