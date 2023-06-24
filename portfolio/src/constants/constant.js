import {
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    figma,
    efs,
    meliora,
    votingSys,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: '',
    },
    {
        title: "React Native Developer",
        icon: '',
    },
    {
        title: "Backend Developer",
        icon: '',
    },
    {
        title: "Content Creator",
        icon: '',
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: '',
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: '',
    },
    {
        name: "Tailwind CSS",
        icon: '',
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: '',
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: '',
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: '',
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: '',
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: efs,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "restapi",
            color: "green-text-gradient",
        },
        {
            name: "scss",
            color: "pink-text-gradient",
        },
        ],
        image: meliora,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
        {
            name: "nextjs",
            color: "blue-text-gradient",
        },
        {
            name: "supabase",
            color: "green-text-gradient",
        },
        {
            name: "css",
            color: "pink-text-gradient",
        },
        ],
        image: votingSys,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };