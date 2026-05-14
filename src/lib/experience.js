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
    profession: "Front-end Engineer and UI/UX Designer",
    company: "Freelance at Ernest Maude",
    date: "June 2025 - Present",
    url: "https://www.linkedin.com/company/ernest-maude/",
    description: [
      "Co-engineer and ship a production legal-services platform in Next.js, Supabase, and Tailwind CSS, implementing core user flows including authentication, document management, and transactional email systems, deployed on Vercel",
      "Simplify a complex multi-step onboarding flow by designing modular interfaces that translated legal and administrative requirements into a guided experience for elderly users and overseas clients",
      "Implement schema-based validation using Zod to reduce form errors and improve data consistency across onboarding and submission flows",
      "Apply accessibility-focused UX patterns such as simplified navigation, readable typography, and non-intrusive feedback to reduce cognitive load for non-technical users",
    ],
  },
  {
    logo: wiproLogo,
    profession: "Application Support Engineer",
    company: "Wipro Limited",
    date: "Dec 2023 - Present",
    url: "https://www.wipro.com/",
    description: [
      "Provide Level 1 support to 20+ cross-functional teams to maintain business-critical processes at Texas Instruments Inc. ",
      "Investigate incidents impacting operational workflows and reduced downtime through structured troubleshooting",
      "Strengthened troubleshooting and systems-thinking skills through exposure to production issues, monitoring workflows, and cross-team communication",
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
