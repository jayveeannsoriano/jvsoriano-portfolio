import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { CgArrowTopRight } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { resumeLink } from "../constants";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("#hello");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hello", ...navLinks.map((l) => l.href.replace("#", ""))];
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const getLinkClassName = (href) => {
    const isActive = activeLink === href;
    return `${isActive ? "text-sky-400" : "text-gray-400"} text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 hover:text-sky-400 hover:bg-white/5`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/95 backdrop-blur-md shadow-lg"
        : " backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Brand — left */}
        <a href="#hello" onClick={() => setActiveLink("#hello")}
          className="whitespace-nowrap font-bold text-xl bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent hover:from-sky-300 hover:to-blue-500 transition-all duration-300">
          &lt;jayvee-soriano /&gt;
        </a>

        {/* Nav links — centered, desktop only */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClassName(link.href)}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — Resume + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              pill
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 border-0 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/40 text-sm"
            >
              Resume
              <CgArrowTopRight className="ml-1.5 h-3 w-3" />
            </Button>
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClassName(link.href)}
              onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
