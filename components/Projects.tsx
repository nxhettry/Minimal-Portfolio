"use client";
import { useState } from "react";
import projects from "@/Utils/Projects";
import { motion } from "framer-motion";
import Image from "next/image";


const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => {
              console.log(`Selected project: ${project.title}`);
            }}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <Image
              height={500}
              width={500}
              src={`/photo.png`}
              alt={project.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            {hoveredProjectId === project.id && (
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="absolute bottom-0 w-full bg-black bg-opacity-50 p-2"
              >
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
