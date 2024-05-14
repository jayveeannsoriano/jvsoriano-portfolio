import React from "react";
import SectionContainer from "../components/SectionContainer";
import {
  BiLogoReact,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoFlutter,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoFigma,
} from "react-icons/bi";
import ToolIconCard from "../components/ToolIconCard";

export const Tools = () => {
  return (
    <SectionContainer sectionName={'_tools&platforms'}>
      {/* TODO: map elements */}
        <div className="grid grid-cols-2 px-2 justify-items-center md:grid-cols-3 lg:grid-cols-5">
            <ToolIconCard logo={BiLogoJavascript} label="JavaScript" />
            <ToolIconCard logo={BiLogoJava} label="Java" />
            <ToolIconCard logo={BiLogoFlutter} label="Flutter" />
            <ToolIconCard logo={BiLogoReact} label="React" />
            <ToolIconCard logo={BiLogoHtml5} label="HTML" />
            <ToolIconCard logo={BiLogoCss3} label="CSS" />
            <ToolIconCard logo={BiLogoTailwindCss} label="Tailwind CSS" />
            <ToolIconCard logo={BiLogoBootstrap} label="Bootstrap" />
            <ToolIconCard logo={BiLogoGit} label="Git" />
            <ToolIconCard logo={BiLogoFigma} label="Figma" />
        </div>
    </SectionContainer>
  );
};
