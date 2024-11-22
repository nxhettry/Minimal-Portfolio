interface ProjectType {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

const projects: ProjectType[] = [
  {
    id: 1,
    name: "BMD's Website",
    description:
      "A fully-featured Consultancy website with Document Flow Software",
    technologies: ["NextJS", "Node.js", "MongoDB"],
    image: "/bmd-website.png",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/BMD",
  },
  {
    id: 2,
    name: "Rato-Khata",
    description:
      "A Billing ERP for medium and small scale businesses, with all the features you need.",
    technologies: [
      "NodeJS",
      "NextJS",
      "mongoDB",
      "Postgres",
      "AWS",
      "Redux",
      "Tailwind",
      "PDFjs",
      "JWT",
    ],
    image: "/ratokhata.png",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/Rato",
  },
  {
    id: 3,
    name: "Trading Platform",
    description:
      "A real-time working trading platform with blockchain, and all features working.",
    technologies: ["Socket.IO", "NextJS", "NodeJS", "AWS"],
    image: "/trading_platform.png",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/projectP2P",
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills, built with React.js and TailwindCSS.",
    technologies: ["Tailwind", "React"],
    image: "/React-portfolio.png",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/React-Portfolio",
  },
  {
    id: 5,
    name: "Twiter Clone",
    description: "A clone of X (Formerly twitter) built while practicing css.",
    technologies: ["JavaScript", "HTML", "SCSS"],
    image: "/X-clone.png",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/Twitter-Clone",
  },
  {
    id: 6,
    name: "File Organiser",
    description:
      "A File organiser that can instantly organise your messy lookking desktop, wanna have a try?",
    technologies: ["NodeJS"],
    image: "/demo.jpg",
    liveUrl: "",
    repoUrl: "https://github.com/nxhettry/File-organiser",
  },
];

export default projects;
