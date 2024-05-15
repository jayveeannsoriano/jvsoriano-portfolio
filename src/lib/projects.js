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

export const PROJECTS = [
    {
        name: 'Rimorin Patient Record Management System',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam molestias minus tenetur fuga corporis! Ad doloribus dolorum, quaerat corrupti repellendus, voluptatibus quo iste officiis odit veritatis, ducimus molestias. Dolore.',
        url: 'https://github.com/jayveeannsoriano',
        previewImage: rimorinProject,
        technologies: ['ReactJS', 'Bootstrap', 'Figma', 'MongoDB']
    },
    {
        name: 'FFUF Bootcamp Mobile Projects',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam molestias minus tenetur fuga corporis! Ad doloribus dolorum, quaerat corrupti repellendus, voluptatibus quo iste officiis odit veritatis, ducimus molestias. Dolore.',
        url: 'https://github.com/jayveeannsoriano',
        previewImage: rimorinProject,
        technologies: ['Dart', 'Flutter', 'Freezed', 'Figma']
    },
];
