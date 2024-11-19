import projects from "@/Utils/Projects";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectsProps {
  setSelectedProject: (project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  }) => void;
}

const Projects = ({ setSelectedProject }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              height={500}
              width={500}
              src={`/https://${project.image}`}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
