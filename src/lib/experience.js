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

export const EXPERIENCE = [
  {
    logo: wiproLogo,
    profession: "Application Support Engineer",
    company: "Wipro Limited",
    date: "Dec 2023 - Present",
    url: "https://www.wipro.com/",
    description: [
      "Provided Level 1 support to application teams and programmers for prompt issue resolution",
      "Resolved issues across mainframe, and Unix/Linux, ensuring minimal downtime and schedule adherence",
      "Addressed user inquiries and concerns promptly",
    ],
  },
  {
    logo: ffufLogo,
    profession: "Flutter Dev Intern",
    company: "FFUF Manila Inc.",
    date: "Jan 2023 - May 2023",
    url: "https://ffufm.com/",
    description: [
      "Actively participated in daily Scrum meetings, followed Agile processes, and engaged in code reviews",
      "Gained proficiency in Dart, preparing for Flutter development",
      "Utilized Dart/Flutter libraries like freezed, DIO, and async redux",
      "Addressed Jira tickets for responsiveness improvements in Markilux Web App",
    ],
  },
];
