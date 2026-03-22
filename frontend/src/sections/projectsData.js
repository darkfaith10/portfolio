
import divridhImg from "../../public/assets/divridh.png"

const projects = [
    {
        id: 1,
        title: "Divridh – Crowdfunding Platform",
        description: "A full-stack crowdfunding platform enabling users to create projects and raise funds in real-time.",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS EC2",
            "Nginx"
        ],

        image: divridhImg,

        live: "https://divridh.com",
        github: "",

        details: [
            "Built and deployed a production-ready crowdfunding platform",
            "Integrated Cashfree payment gateway with secure webhooks",
            "Implemented Google OAuth 2.0 authentication",
            "Designed REST APIs for projects, payments, and comments",
            "Deployed backend on AWS EC2 with Nginx and PM2"
        ]
    },

    {
        id: 2,
        title: "QueCards: AI Revision Card Generator",
        description: "An AI-powered tool to generate revision cards from PDFs and images for efficient studying.",

        tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Gemini API",
            "Vercel",
            "Railway"
        ],

        image: divridhImg,

        live: "",
        github: "",

        details: [
            "Built a MERN app to generate revision cards from uploaded files",
            "Implemented PDF and image content extraction pipelines",
            "Used Gemini API to generate structured Q&A cards",
            "Designed interactive UI for learning and revision",
            "Deployed frontend on Vercel and backend on Railway"
        ]
    },

    {
        id: 3,
        title: "Adobe Express Formula Inserter",
        description: "An Adobe Express add-on for rendering and exporting mathematical and chemical formulas.",

        tech: [
            "React",
            "Vite",
            "KaTeX",
            "PubChem API",
            "html2canvas"
        ],

        image: divridhImg,

        live: "",
        github: "",

        details: [
            "Built an Adobe Express add-on for formula rendering",
            "Integrated KaTeX for LaTeX rendering",
            "Used PubChem API for chemical visualization",
            "Enabled export of formulas as high-quality images",
            "Submitted as part of Adobe Global Hackathon"
        ]
    }
];

export default projects;