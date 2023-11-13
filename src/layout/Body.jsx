import React from "react";
import HeroImg from "../assets/hero-img.png";
import SectionContainer from "../components/SectionContainer";
import { Button } from "flowbite-react";
import { pdfResumeUrl } from "../constants";
import { AiOutlineArrowDown } from "react-icons/ai";
import { githubLink } from "../constants";

const Body = () => {
  return (
    <div className="container mx-auto">
      <SectionContainer id="hello">
        <div className="flex flex-col md:justify-between items-center md:flex-row">
          <div className="mx-auto text-center pt-6 sm:text-left md:px-6" id="hero-text">
            <p>Hello, World. I am</p>
            <h1 className="text-2xl sm:text-5xl font-semibold py-5">Jayvee Ann Soriano</h1>
            <h2 className="">{">"} Front-end Developer</h2>
            <h2 className="">{">"} Flutter Developer</h2>
            <br />
            <p>
              const githubLink = "
              <a
                href={githubLink}
              >
                https://github.com/jayveeannsoriano
              </a>
              ";
            </p>
            <br />
            <div className="flex justify-center md:justify-start">
              <a download="JayveeAnnSoriano-Resume.pdf" href={pdfResumeUrl}>
                <Button color="dark" pill>
                  Download Resume
                  <AiOutlineArrowDown className="ml-2"></AiOutlineArrowDown>
                </Button>
              </a>
            </div>
          </div>
          <div className="mx-auto" id="hero-img">
              <img
                src={HeroImg}
                className="w-[550px] my-10"
                alt="hero-img"
              />
            </div>
        </div>
      </SectionContainer>

      {/* <SectionContainer id="about">
        <h1 className="text-center my-8">About Me</h1>
        <div className="mt-5">
          <img src="" className="w-96 h-96 mx-auto rounded-lg" alt="profile-pic"></img>
        </div>
      </SectionContainer> */}
    </div>
  );
};

export default Body;
