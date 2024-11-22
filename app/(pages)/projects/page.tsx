import Image from "next/image";
import { PinContainer } from "@/components/3D-pin";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills, built with React.js and TailwindCSS.",
      technologies: ["Tailwind", "React"],
      image: "/React-portfolio.png",
      liveUrl: "",
      repoUrl: "https://github.com/nxhettry/React-Portfolio",
    },
    {
      id: 2,
      name: "BMD's Website",
      description:
        "A fully-featured Consultancy website with Document Flow Software",
      technologies: ["NextJS", "Node.js", "MongoDB"],
      image: "/bmd-website.png",
      liveUrl: "",
      repoUrl: "https://github.com/nxhettry/BMD",
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
      id: 5,
      name: "Twiter Clone",
      description:
        "A clone of X (Formerly twitter) built while practicing css.",
      technologies: ["JavaScript", "HTML", "SCSS"],
      image: "/X-clone.png",
      liveUrl: "",
      repoUrl: "https://github.com/nxhettry/Twitter-Clone",
    },
    {
      id: 6,
      name: "File Organiser",
      description:
        "A Fiole organiser that can instantly organise your messy lookking desktop, wanna have a try?",
      technologies: ["NodeJS"],
      image: "/demo.jpg",
      liveUrl: "",
      repoUrl: "https://github.com/nxhettry/File-organiser",
    },
  ];

  return (
    <div className="py-64 text-white flex flex-col justify-center items-center space-y-40">
      {projects.map((project, index) => {
        return (
          <PinContainer key={index} title={project.name} href={project.repoUrl}>
            <div
              key={project.id}
              className="h-80 w-[30vw] flex items-center space-x-8 py-2"
            >
              <Image
                height={1000}
                width={1000}
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </PinContainer>
        );
      })}
    </div>
  );
};

export default ProjectPage;
