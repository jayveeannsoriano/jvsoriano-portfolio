import React from "react";

export const LinkPill = ({ logo: LogoComponent, label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-3 px-5 py-3 justify-center bg-secondary rounded-full">
        <div className="text-white text-left">
          <LogoComponent className="h-6 w-6" />
        </div>
        <p className="text-sm md:text-md">{label}</p>
      </div>
    </a>
  );
};
