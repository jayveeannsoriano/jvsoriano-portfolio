import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import pdfFile from "../assets/JAYVEE_ANN U. SORIANO_CV.pdf";
import { pdfCVFilename } from "../constants";
import { BiDownload } from "react-icons/bi";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#hello");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#hello", label: "_hello" },
    { href: "#about", label: "_about" },
    { href: "#projects", label: "_projects" },
    { href: "#contact", label: "_contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const getLinkClassName = (href) => {
    const isActive = activeLink === href;
    return `${isActive ? "text-sky-400 bg-secondary/50" : "text-gray-300"
      } px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:text-sky-400 hover:bg-secondary/30`;
  };

  return (
    <Navbar
      fluid
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800"
        : "bg-black/80 backdrop-blur-sm"
        } py-4 px-6 md:px-16`}
    >
      <Navbar.Brand>
        <span className="whitespace-nowrap font-bold text-xl bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent hover:from-sky-300 hover:to-blue-500 transition-all duration-300 cursor-pointer">
          &lt;jayvee-soriano /&gt;
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href={pdfFile} download={pdfCVFilename}>
          <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 transition-all duration-300 shadow-lg hover:shadow-sky-500/50" pill>
            <BiDownload className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </a>
        <Navbar.Toggle className="text-white hover:bg-secondary ml-2" />
      </div>
      <Navbar.Collapse>
        {navLinks.map((link) => (
          <Navbar.Link
            key={link.href}
            href={link.href}
            className={getLinkClassName(link.href)}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
