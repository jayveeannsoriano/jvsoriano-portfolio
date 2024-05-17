import React, { useState } from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#hello");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      fluid
      className="bg-slate-800 fixed top-0 left-0 right-0 z-50 p-6 md:px-16"
    >
      <Navbar.Brand>
        <span className="whitespace-nowrap font-semibold text-white">
          jayvee-soriano
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="#hello"
          className={`${activeLink === "#hello" ? "bg-secondary" : null
            } text-white md:hover:text-sky-600 hover:bg-secondary`}
          onClick={() => handleLinkClick("#hello")}
        >
          _hello
        </Navbar.Link>
        <Navbar.Link
          href="#about"
          className={`${activeLink === "#about" ? "bg-secondary" : null
            } text-white hover:bg-secondary md:hover:text-sky-600`}
          onClick={() => handleLinkClick("#about")}
        >
          _about
        </Navbar.Link>
        <Navbar.Link
          href="#projects"
          className={`${activeLink === "#projects" ? "bg-secondary" : null
            } text-white hover:bg-secondary md:hover:text-sky-600`}
          onClick={() => handleLinkClick("#projects")}
        >
          _projects
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className={`${activeLink === "#contact" ? "bg-secondary" : null
            } text-white hover:bg-secondary md:hover:text-sky-600`}
          onClick={() => handleLinkClick("#contact")}
        >
          _contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
