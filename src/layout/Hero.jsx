import React from "react";
import SectionContainer from "../components/SectionContainer";
import { githubLink, linkedInProfile } from "../constants";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <SectionContainer id="hello">
      <div data-aos="fade-up" className="justify-center text-center my-16 md:flex-row md:my-36">
        <h2 className="text-lg md:text-xl text-gray-300 mb-2">Hello World, I'm Jayvee Ann Soriano</h2>
        <h1 className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent m-10">
          Crafting Digital Experiences<br />That Make an Impact
        </h1>
        <div className="flex justify-center mb-3">
          <div className="flex items-center px-4 py-2 text-sm rounded-full border border-green-500 bg-transparent" pill>
            <p>Available for Freelance</p>
            <span class="relative flex size-3 ml-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-green-400"></span>
            </span>
          </div>
        </div>
        {/* Socials */}
        <div className="flex justify-center gap-3 text-white mt-5">
          <a href={linkedInProfile}>
            <BiLogoLinkedin className="h-4 w-4" />
          </a>
          <a href={githubLink}>
            <BiLogoGithub />
          </a>
        </div>
        {/* CTA buttons */}
        {/* <div className="flex justify-center m-5 gap-2">
          <Button href="#projects" className="transition">Explore Projects</Button>
        </div> */}
      </div>
    </SectionContainer>
  );
};

export default Hero;
