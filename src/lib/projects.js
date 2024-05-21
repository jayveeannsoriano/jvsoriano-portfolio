/**
 * @typedef {Object} ProjectDetails
 * @property {string} name - The name of the project.
 * @property {string} description - The description of the project.
 * @property {string} url - The URL of the project.
 * @property {string | StaticImageData} previewImage - The preview image of the project.
 * @property {string[]} technologies - The technologies used in the project.
 */

/** @type {Object[]} */

import rimorinProject from "../assets/project preview images/RimorinProject.png"
import ffufProject from "../assets/project preview images/FFUFProjects.png"
import webPortfolio from "../assets/project preview images/WebPortfolio.png"
import figmaProjects from "../assets/project preview images/FigmaProject.png"

export const PROJECTS = [
    {
        name: 'Rimorin Patient Records Management & Appointment System',
        description: 'Led the design and front-end development for a web-based thesis project focused on digitizing healthcare processes. Our solution streamlined patient record management, appointment scheduling, and payment tracking, aligning with the Philippine eHealth Systems and Services Act and addressing the demands of modern healthcare.',
        // url: 'https://github.com/jayveeannsoriano',
        previewImage: rimorinProject,
        technologies: ['ReactJS', 'Bootstrap', 'Figma', 'MongoDB', 'Heroku', 'GitHub']
    },
    {
        name: 'FFUF Bootcamp Mobile Projects',
        description: "I've developed mobile projects and capstone initiatives using Flutter and Dart. These projects encompassed a variety of features and functionalities, requiring proficiency in Dart packages, API integration, adherence to company coding standards, version control best practices, and effective state management techniques.",
        // url: 'https://github.com/jayveeannsoriano',
        previewImage: ffufProject,
        technologies: ['Dart', 'Flutter', 'Freezed', 'Figma', 'GitHub', 'Bitbucket', ]
    },
    {
        name: 'Hotel Elizabeth Web Mockup',
        description: "As part of my UI/UX course requirements, I created a website mockup design aimed at enhancing the user experience of a hotel's website. The project focuses on implementing design improvements to elevate the website's usability and overall user satisfaction.",
        // url: 'https://github.com/jayveeannsoriano',
        previewImage: figmaProjects,
        technologies: ['Figma']
    },
    {
        name: 'Personal Web Portfolio',
        description: "If you're reading this, you're already exploring my personal web portfolio (((o(*ﾟ▽ﾟ*)o))) — Here, you'll discover my journey as a web and mobile developer and UI/UX designer. Each project showcases my passion for innovation and dedication to crafting unique and user-friendly experiences.",
        url: 'https://github.com/jayveeannsoriano/jvsoriano-portfolio',
        previewImage: webPortfolio,
        technologies: ['ReactJS', 'Tailwind CSS', 'GitHub Pages']
    },
];
