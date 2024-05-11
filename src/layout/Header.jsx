import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
      <Navbar className= "bg-transparent mx-36 py-6">
        <Navbar.Brand>
          <span className="whitespace-nowrap font-semibold text-white">
            jayvee-soriano
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#hello" active>
            _hello
          </Navbar.Link>
          <Navbar.Link href="#about">_about-me</Navbar.Link>
          <Navbar.Link href="#projects">_projects</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
