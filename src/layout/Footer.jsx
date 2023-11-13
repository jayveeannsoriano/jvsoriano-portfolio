import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const PageFooter = () => {
  return (
    <Footer container className="sticky top-[100vh] bg-secondary">
      <div className="w-full items-center">
        <Footer.Copyright by="Jayvee Ann Soriano" year={2023} />
      </div>
    </Footer>
  );
};

export default PageFooter;
