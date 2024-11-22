"use client";
import projects from "@/Utils/Projects";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <Image
              draggable={false}
              height={500}
              width={500}
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
