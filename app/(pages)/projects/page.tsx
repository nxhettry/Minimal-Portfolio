import Image from "next/image";
import { PinContainer } from "@/components/3D-pin";
import Link from "next/link";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills, built with Next.js and TailwindCSS.",
      technologies: ["Next.js", "TailwindCSS", "React"],
      image: "/photo.png",
      liveUrl: "https://yourportfolio.com",
      repoUrl: "https://github.com/yourusername/portfolio-website",
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description:
        "A fully-featured e-commerce application with cart, checkout, and payment gateway integration.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/photo.png",
      liveUrl: "https://yourstore.com",
      repoUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 3,
      name: "Chat Application",
      description:
        "A real-time chat application with WebSocket and user authentication features.",
      technologies: ["Socket.IO", "Express", "React"],
      image: "/photo.png",
      liveUrl: "https://yourchatapp.com",
      repoUrl: "https://github.com/yourusername/chat-application",
    },
    {
      id: 4,
      name: "Task Manager App",
      description:
        "A task management tool to create, edit, and track daily tasks with a user-friendly UI.",
      technologies: ["React", "TypeScript", "Firebase"],
      image: "/photo.png",
      liveUrl: "https://yourtaskmanager.com",
      repoUrl: "https://github.com/yourusername/task-manager",
    },
    {
      id: 5,
      name: "Weather Dashboard",
      description:
        "A weather app that provides real-time weather data using OpenWeather API.",
      technologies: ["JavaScript", "API Integration", "CSS"],
      image: "/photo.png",
      liveUrl: "https://yourweatherapp.com",
      repoUrl: "https://github.com/yourusername/weather-dashboard",
    },
    {
      id: 6,
      name: "Blogging Platform",
      description:
        "A blogging platform for users to create, edit, and share blog posts with a rich text editor.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      image: "/photo.png",
      liveUrl: "https://yourblogplatform.com",
      repoUrl: "https://github.com/yourusername/blogging-platform",
    },
  ];

  return (
    <div className="py-64 flex flex-col justify-center items-center space-y-40">
      {projects.map((project, index) => {
        return (
          <PinContainer key={index} title={project.name} href={project.repoUrl}>
            <div
              key={project.id}
              className="max-h-lvh w-96 flex items-center space-x-8 p-8"
            >
              <Image
                height={1000}
                width={1000}
                src={project.image}
                alt={project.name}
                className="w-1/2 h-auto rounded-md shadow-md"
              />
              <div className="w-1/2">
                <h3 className="text-3xl font-bold">{project.name}</h3>
                <p className="mt-4 text-lg text-white">
                  {project.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={project.liveUrl}
                    className="text-blue-500 underline text-lg mr-4"
                  >
                    Live
                  </Link>
                  <Link
                    href={project.repoUrl}
                    className="text-blue-500 underline text-lg"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </PinContainer>
        );
      })}
    </div>
  );
};

export default ProjectPage;
