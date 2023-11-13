import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="bg-secondary outline outline-1 outline-white/20">
      <Navbar className="mx-2 py-4 sm:mx-11 bg-secondary">
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
    </div>
  );
};

export default Header;
