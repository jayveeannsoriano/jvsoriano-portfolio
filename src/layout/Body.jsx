import React from "react";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import { Tools } from "./Tools";
import Experiences from "./Experiences";
import Projects from "./Projects";

const Body = () => {
  return (
    <div className="container mx-auto">
      < Hero/>
      < Tools/>
      < Experiences />
      < Projects />
      < AboutMe/>
      </div>
  );
};

export default Body;