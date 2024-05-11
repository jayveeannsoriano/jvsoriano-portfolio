import React from "react";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import { Tools } from "./Tools";

const Body = () => {
  return (
    <div className="container mx-auto">
      < Hero/>
      < AboutMe/>
      < Tools/>
      </div>
  );
};

export default Body;