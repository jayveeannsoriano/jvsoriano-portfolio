import React from "react";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Tools from "./Tools";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="mx-auto">
      < Hero />
      < AboutMe />
      < Tools />
      < Experiences />
      < Projects />
      < Contact />
    </div>
  );
};

export default Body;