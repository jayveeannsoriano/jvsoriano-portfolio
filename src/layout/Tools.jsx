import React from "react";
import SectionContainer from "../components/SectionContainer";
import {
  BiLogoReact,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoFlutter,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoGitlab,
} from "react-icons/bi";
import ToolIconCard from "../components/ToolIconCard";

export const Tools = () => {
  return (
    <SectionContainer>
      <h1>Tools and Platforms</h1>
        <div className="justify-items-center grid grid-cols-5 gap-4 my-5">
            <ToolIconCard logo={BiLogoJavascript} label="JavaScript" />
            <ToolIconCard logo={BiLogoJava} label="Java" />
            <ToolIconCard logo={BiLogoFlutter} label="Flutter" />
            <ToolIconCard logo={BiLogoReact} label="React" />
            <ToolIconCard logo={BiLogoHtml5} label="HTML" />
            <ToolIconCard logo={BiLogoCss3} label="CSS" />
            <ToolIconCard logo={BiLogoTailwindCss} label="Tailwind CSS" />
            <ToolIconCard logo={BiLogoBootstrap} label="Bootstrap" />
            <ToolIconCard logo={BiLogoGithub} label="GitHub" />
            <ToolIconCard logo={BiLogoGitlab} label="GitLab" />
        </div>
    </SectionContainer>
  );
};
