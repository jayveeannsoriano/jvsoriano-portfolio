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
      <div className="flex flex-col items-center mt-16 md:flex-row md:mt-8">
        <div data-aos="fade-up" className="mx-auto text-center">
          <div className="grid justify-around md:justify-start md:text-left">
            <p>Hello, World. I am</p>
            <h1 className="text-3xl md:text-5xl font-semibold py-5">
              Jayvee Ann Soriano
            </h1>
            <div className="text-left">
              <h2>{">"} Front-end Developer</h2>
              <h2>{">"} Flutter Developer</h2>
              <h2>{">"} UI/UX Designer</h2>
              <h2>{">"} Application Support Engineer</h2>
            </div>
          </div>
          <br />
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
          <br />
          <div className="flex justify-center md:justify-start">
            <a href={pdfFile} download={pdfCVFilename}>
              <Button className="bg-secondary enabled:hover:bg-sky-900" pill>
                Download CV
                <BiDownload className="ml-2"></BiDownload>
              </Button>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="mx-auto" id="hero-img">
          <img
            src={HeroImg}
            className="w-[310px] md:w-[450px] lg:w-[510px] my-10"
            alt="hero-img"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
