import {
    javascript,
    html,
    css,
    reactjs,
    git,
    figma,
    EFS,
    Meliora,
    VotingSystem,
    threejs,
    uop,
    thinking,
} from "../assets";

export const navLinks = [
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
        name: "React JS",
        icon: reactjs,
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
];

const experiences = [
    {
        title: "Web Editorial Assistant",
        company_name: "University of Portsmouth",
        icon: uop,
        iconBg: "#FDF8F3",
        date: "October 2022 - November 2022",
        points: [
        "Built new webpages using a CMS platform.",
        "Worked in a team environment following the SCRUM development life cycle.",
        "Effectively communicated daily progress and encountered issues in team meetings.",
        "Demonstrated strong attention to detail in creating new web pages to maintain the website's aesthetic style.",
        ],
    },
    {
        title: "Undergraduate",
        company_name: "University of Portsmouth",
        icon: uop,
        iconBg: "#FDF8F3",
        date: "September 2020 - July 2023",
        points: [
        "Explored web programming, data structures and algorithms, and software engineering best practices",
        "Gained experience in working with teams by leading the front-end side of a project.",
        "Developed programming skills in Python, Java, Javascript, and Object-Oriented Programming",
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
    {
        name: "Many More To Come! :)",
        description:
        "My interest in web development and software development is ever growing and I will include more projects here in the future.",
        tags: [
        {
            name: "coming-soon",
            color: "text-blue",
        }
        ],
        image: thinking,
        link: "",
    },
];

export { technologies, experiences, projects };