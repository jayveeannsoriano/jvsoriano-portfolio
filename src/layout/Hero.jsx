import React from 'react'
import HeroImg from "../assets/hero-img.png";
import SectionContainer from "../components/SectionContainer";
import { Button } from "flowbite-react";
import { pdfCVFilename, pdfCVUrl } from "../constants";
import { AiOutlineArrowDown } from "react-icons/ai";
import { githubLink } from "../constants";

const Hero = () => {
  return (
    <SectionContainer id="hello">
    <div className="flex flex-col md:justify-between items-center md:flex-row">
      <div className="mx-auto text-center sm:text-left" id="hero-text">
        <p>Hello, World. I am</p>
        <h1 className="text-2xl md:text-5xl font-semibold py-5">Jayvee Ann Soriano</h1>
        <h2 className="">{">"} Front-end Developer</h2>
        <h2 className="">{">"} Flutter Developer</h2>
        <h2 className="">{">"} UI/UX Designer</h2>
        <h2 className="">{">"} Application Support Engineer</h2>
        <br />
        <p>
          const githubLink = "
          <a href={githubLink}> https://github.com/jayveeannsoriano</a> ";
        </p>
        <br />
        <div className="flex justify-center md:justify-start">
          <a download={pdfCVFilename} href={pdfCVUrl}>
            <Button color="dark" pill>
              Download CV
              <AiOutlineArrowDown className="ml-2"></AiOutlineArrowDown>
            </Button>
          </a>
        </div>
      </div>
      <div className="mx-auto" id="hero-img">
          <img
            src={HeroImg}
            className="w-[350px] md:w-[450px] lg:w-[510px] my-10"
            alt="hero-img"
          />
      </div>
    </div>
  </SectionContainer>
  )
}

export default Hero