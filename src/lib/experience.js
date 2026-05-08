/**
 * @typedef {Object} ExperienceDetails
 * @property {string | StaticImageData} logo - The company's logo.
 * @property {string} profession - The work position
 * @property {string[]} description - The description of the work experience.
 * @property {string} company - The company's name.
 * @property {string} url - The company's website URL.
 * @property {string} date - The work duration.
 */

/** @type {Object[]} */

import wiproLogo from "../assets/wipro-logo.png";
import ffufLogo from "../assets/ffuf-logo.png";
import freelanceLogo from "../assets/freelance-logo.png";

export const EXPERIENCE = [
  {
    logo: freelanceLogo,
    profession: "Front-end Developer and UI/UX Designer",
    company: "Freelance",
    date: "June 2025 - Present",
    description: [
      "Designing and building a responsive web platform for a legal services client using Next.js and Tailwind CSS, translating complex legal workflows into clean, user-friendly interfaces",
      "Leading end-to-end product development from requirements gathering and wireframing to implementation, ensuring the solution aligns with both business goals and user needs",
    ],
  },
  {
    logo: wiproLogo,
    profession: "Application Support Engineer",
    company: "Wipro Limited",
    date: "Dec 2023 - Present",
    url: "https://www.wipro.com/",
    description: [
      "Delivering Level 1 production support for Texas Instruments Inc., ensuring uptime and stability across 20+ cross-functional teams",
      "Streamlined incident resolution through systematic troubleshooting and root cause analysis, minimizing downtime impact",
      "Partnered with engineering teams to document critical issues, contributing to more resilient and well-maintained production systems",
    ],
  },
  {
    logo: ffufLogo,
    profession: "Flutter Mobile Developer Intern",
    company: "FFUF Manila Inc.",
    date: "Jan 2023 - May 2023",
    url: "https://ffufm.com/",
    description: [
      "Built 5+ mobile applications during an intensive Flutter bootcamp, gaining hands-on experience in Dart, Redux state management, and async programming",
      "Contributed to a live codebase using Git workflows — feature branching, pull requests, and code reviews — guided by senior developers on clean architecture",
      "Worked in an Agile/Scrum team environment, participating in daily standups and collaborative peer reviews",
      "Resolved UI and responsiveness issues on the Markilux Web App, directly improving cross-device user experience",
    ],
  },
];
