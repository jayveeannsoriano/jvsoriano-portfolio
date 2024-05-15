import React from "react";
import SectionContainer from "../components/SectionContainer";
import {
  BiLogoReact,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoBootstrap
} from "react-icons/bi";
import { FaFigma } from "react-icons/fa6";
import { SiAdobexd } from "react-icons/si";
import { SiDart } from "react-icons/si";
import ToolIconCard from "../components/ToolIconCard";

export const Tools = () => {
  return (
    <SectionContainer sectionName={'_technologies'}>
        <div className="grid grid-cols-2 px-2 gap-3 justify-items-center md:grid-cols-3 lg:grid-cols-5 lg:gap-12 ">
            <ToolIconCard logo={BiLogoJava} label="Java" />
            <ToolIconCard logo={SiDart} label="Dart" />
            <ToolIconCard logo={BiLogoFlutter} label="Flutter" />
            <ToolIconCard logo={BiLogoJavascript} label="JavaScript" />
            <ToolIconCard logo={BiLogoReact} label="ReactJS" />
            <ToolIconCard logo={BiLogoTailwindCss} label="Tailwind CSS" />
            <ToolIconCard logo={BiLogoBootstrap} label="Bootstrap" />
            <ToolIconCard logo={FaFigma} label="Figma" />
            <ToolIconCard logo={SiAdobexd} label="Adobe XD" />
            <ToolIconCard logo={BiLogoGit} label="Git" />
        </div>
    </SectionContainer>
  );
};
