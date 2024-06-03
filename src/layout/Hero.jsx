import React from "react";
import HeroImg from "../assets/hero-img.png";
import SectionContainer from "../components/SectionContainer";
import pdfFile from "../assets/JAYVEE_ANN U. SORIANO_CV.pdf";
import { Button } from "flowbite-react";
import { pdfCVFilename } from "../constants";
import { githubLink } from "../constants";
import { BiDownload } from "react-icons/bi";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <SectionContainer id="hello">
      <div data-aos="fade-up" className="flex flex-col gap-1 items-center mt-16 md:flex-row md:my-24">
        <div className="text-center flex flex-col gap-1 md:text-left md:w-1/2">
          <h1>Hello World, I am </h1>
          <h1 className="text-3xl font-semibold my-3 md:text-5xl">Jayvee Ann Soriano</h1>
          <div className="grid justify-around text-left text-md md:justify-start md:text-lg">
            <h2>{">"} Front-end Developer</h2>
            <h2>{">"} Flutter Developer</h2>
            <h2>{">"} UI/UX Designer</h2>
            <h2>{">"} Application Support Engineer</h2>
          </div>
          <div className="text-md my-3 md:text-md">
            <p>
              const githubLink = "
              <a
                href={githubLink}
                target="_blank"
                rel="noopener
              noreferrer"
                className="underline hover:text-sky-500"
              >
                https://github.com/jayveeannsoriano"
              </a>
              ;
            </p>
          </div>
          <div className="flex justify-center my-3 md:justify-start">
            <a href={pdfFile} download={pdfCVFilename}>
              <Button className="bg-secondary enabled:hover:bg-sky-900" pill>
                Download CV
                <BiDownload className="ml-2"></BiDownload>
              </Button>
            </a>
          </div>
        </div>
        <div className="m-auto" id="hero-img">
          <img
            src={HeroImg}
            className="w-[290px] md:w-[450px] lg:w-[510px] my-1"
            alt="hero-img"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
