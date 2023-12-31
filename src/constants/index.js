import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import useAlert from "../hooks/useAlert";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
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
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vishalsoni123123',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vishal-soni-7a8a2a259',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'YOUTUBE CLONE',
        description: 'Created a full-stack replica of the popular discussion platform youtube ,it is not interactive yet',
        link: 'https://github.com/vishalsoni123123/youtube_clone',
        link1: 'https://vishalsoni123123.github.io/youtube_clone/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'QR SCANNER WEBSITE CLONE ',
        description: 'Designed and built a website for a client as per his need,and this is the modified form of that website ',
        link: 'https://github.com/vishalsoni123123/QR--scanner-',
        link1: 'https://vishalsoni123123.github.io/QR--scanner-/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'FIRE DETECTION BOT',
        description: 'Built an machine learning model for detecting fire and movinng the piston to that spot to extinguish the fire.',
        link: 'https://github.com/vishalsoni123123/fire_detection_bot',
        link1:'https://github.com/vishalsoni123123/fire_detection_bot',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'PORTFOLIO WEBSITE',
        description: 'this website is fully deployable and can consive all the proper information . here is the link and all content of it is made open source .',
        link: 'https://github.com/vishalsoni123123/vishal_soni_portfolio',
        link1: 'https://vishalsoni123123.github.io/vishal_soni_portfolio/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'TILE_GAME',
        description: 'this is atile game created with python with module kivy. you can download the source code form the repositary.',
        link: 'https://github.com/vishalsoni123123/tile_game',
        link1: 'https://github.com/vishalsoni123123/tile_game',
    }
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
];