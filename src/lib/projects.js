/**
 * @typedef {Object} ProjectDetails
 * @property {string} name - The name of the project.
 * @property {string} description - The description of the project.
 * @property {string} url - The URL of the project.
 * @property {string | StaticImageData} previewImage - The preview image of the project.
 * @property {string[]} technologies - The technologies used in the project.
 */

/** @type {Object[]} */

import tiwrProject from "../assets/project preview images/TIWRProject.png"
import rimorinProject from "../assets/project preview images/RimorinProject.png"
import ffufProject from "../assets/project preview images/FFUFProjects.png"
import webPortfolio from "../assets/project preview images/WebPortfolio.png"

export const PROJECTS = [
    {
        name: 'The International Will Registry',
        description: 'Built a secure, full-stack web platform for a legal services client that lets users register and retrieve the location of wills and estate documents. Translated complex legal workflows into clean, accessible UI using Next.js, Tailwind CSS, and shadcn/ui components. Integrated Supabase for authentication, real-time data, and secure document management. Led the project end-to-end: requirements gathering, Figma wireframes, implementation, and deployment to Vercel.',
        url: 'https://theinternationalwillregistry.com',
        previewImage: tiwrProject,
        technologies: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'Vercel', 'GitHub', 'Figma']
    },
    {
        name: 'Rimorin Patient Records Management & Appointment System',
        description: 'Thesis project built to digitize a dental clinic\'s manual workflows. Led UI/UX design and frontend development — designed the system in Figma, then built it in React with MongoDB as the data layer. The system handled patient records, appointment scheduling, and payment tracking, aligned with the Philippine eHealth Systems and Services Act. Deployed on Heroku.',
        githubUrl: 'https://github.com/jayveeannsoriano/Rimorin-Dental-Clinic-WebApp',
        previewImage: rimorinProject,
        technologies: ['ReactJS', 'Bootstrap', 'Figma', 'MongoDB', 'Heroku', 'GitHub']
    },
    {
        name: 'FFUF Bootcamp Mobile Projects',
        description: 'Built 5+ Flutter mobile apps during an intensive bootcamp internship at FFUF Manila Inc. Contributed to a live production codebase alongside senior engineers — working with Dart, Freezed for immutable state models, REST API integration, and company-standard version control practices on Bitbucket. Strengthened skills in state management, component architecture, and shipping real features under review.',
        previewImage: ffufProject,
        technologies: ['Dart', 'Flutter', 'Freezed', 'Figma', 'GitHub', 'Bitbucket']
    },
    // {
    //     name: 'Hotel Elizabeth Web Mockup',
    //     description: 'UI/UX redesign concept created as part of a design course. Focused on restructuring the information hierarchy, improving navigability, and modernizing the visual language of the existing hotel website. Delivered as a Figma prototype with annotated design decisions.',
    //     previewImage: figmaProjects,
    //     technologies: ['Figma']
    // },
    {
        name: 'Personal Web Portfolio',
        description: 'This site — built with React and Tailwind CSS, deployed via GitHub Pages. Designed and developed from scratch: layout decisions, component architecture, animation timing, and content hierarchy. Continuously iterated on as my skills and projects evolve.',
        url: 'https://github.com/jayveeannsoriano/jvsoriano-portfolio',
        previewImage: webPortfolio,
        technologies: ['ReactJS', 'Tailwind CSS', 'GitHub Pages']
    },
];
