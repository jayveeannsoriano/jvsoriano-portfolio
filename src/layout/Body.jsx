import React from "react";
import HeroImg from "../assets/hero-img.png";
import { Button } from "flowbite-react";
import { pdfResumeUrl } from "../constants";
import { AiOutlineArrowDown } from 'react-icons/ai'

const Body = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full py-16 px-24" id="hello">
        <div className="text-left container mx-auto grid grid-cols-2">
        <div className="mx-auto py-40">
            <p>Hello, World. I am</p>
            <h1 className="text-5xl font-semibold py-5">Jayvee Ann Soriano</h1>
            <h2 className="">{">"} Front-end Developer</h2>
            <h2 className="">{">"} Flutter Developer</h2>
            <br />
            <p>
            const githubLink = "
            <a
                href="https://github.com/jayveeannsoriano"
                className="text-sky-500"
            >
                https://github.com/jayveeannsoriano
            </a>
            ";
            </p>
            <br />
            <a download="JayveeAnnSoriano-Resume.pdf" href={pdfResumeUrl}>
              <Button color="dark" pill>
              Download Resume
              <AiOutlineArrowDown className="ml-2"></AiOutlineArrowDown>
              </Button>
            </a>
        </div>
        <div>
            <img src={HeroImg} className="" alt="hero-img" />
        </div>
        </div>
    </div>
      
        <div className="container w-full" id="about">
          <h1>About Me</h1>
        </div>
      </div>
  );
};

export default Body;
