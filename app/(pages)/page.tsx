"use client";
import { useState, useEffect } from "react";
import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  }>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <div className="min-h-screen">
      <Info />
      <Skills />
      <Projects setSelectedProject={setSelectedProject} />
    </div>
  );
};

export default Portfolio;
