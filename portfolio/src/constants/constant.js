import {
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    figma,
    EFS,
    Meliora,
    VotingSystem,
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
        name: "Merliora Market",
        description:
        "A price comparison website for UK supermarkets. All data was web scraped using selenium and presented to website using Flask framework.",
        tags: [
        {
            name: "python",
            color: "text-blue",
        },
        {
            name: "flask",
            color: "text-green",
        },
        {
            name: "scss",
            color: "text-pink",
        },
        ],
        image: EFS,
        link: "https://github.com/ZoroaAi/MelioraMarket",
    },
    {
        name: "Education Fund Scheme",
        description:
        "A website that finds the poorest schools in the UK in order to raise funds and provide educational material.",
        tags: [
        {
            name: "django",
            color: "text-blue",
        },
        {
            name: "restapi",
            color: "text-green",
        },
        {
            name: "scss",
            color: "text-pink",
        },
        ],
        image: Meliora,
        link: "https://github.com/",
    },
    {
        name: "Rule Change Proposal System",
        description:
        "Built for creating rule change proposal that allows votes and comments using Java EE 8.",
        tags: [
        {
            name: "javaEE",
            color: "text-blue",
        },
        {
            name: "JPA",
            color: "text-green",
        },
        {
            name: "bootstrap",
            color: "text-pink",
        },
        ],
        image: VotingSystem,
        link: "https://github.com/ZoroaAi/VotingSystem",
    },
];

export { services, technologies, experiences, projects };