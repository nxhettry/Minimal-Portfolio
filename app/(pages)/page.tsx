import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Portfolio: React.FC = () => {

  return (
    <div className="min-h-screen">
      <Info />
      <Skills />
      <Projects />
    </div>
  );
};

export default Portfolio;
