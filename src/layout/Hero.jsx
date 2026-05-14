import React from "react";
import SectionContainer from "../components/SectionContainer";
import { emailAddress, githubLink, linkedInProfile } from "../constants";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <SectionContainer id="hello">
      {/* data-aos="fade-up" */}
      <div className="justify-center text-center pt-16 pb-4 md:my-24 md:flex-row">
        <h2 className="text-lg md:text-xl text-gray-300 mb-2">Hi, I'm Jayvee Ann Soriano</h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent my-6 md:my-10 p-4">
          Frontend Developer.<br />Thoughtful by Design.
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-6 px-4">
          I build reliable, user-focused interfaces backed by real-world support and production experience.
        </p>
        <div className="flex justify-center mb-3">
          <div className="flex items-center px-4 py-2 text-sm rounded-full border border-green-500 bg-transparent" pill>
            <p>Open to Opportunities</p>
            <span class="relative flex size-3 ml-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-green-400"></span>
            </span>
          </div>
        </div>
        {/* Socials */}
        <div className="flex justify-center gap-3 text-white mt-5">
          <a href={linkedInProfile} className="hover:text-sky-400 transition-colors duration-200 flex items-center gap-1">
            <BiLogoLinkedin className="h-4 w-4" />
          </a>
          <a href={githubLink} className="hover:text-sky-400 transition-colors duration-200 flex items-center gap-1">
            <BiLogoGithub className="h-4 w-4" />
          </a>
          <a href={emailAddress} className="hover:text-sky-400 transition-colors duration-200 flex items-center gap-1">
            <MdEmail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
