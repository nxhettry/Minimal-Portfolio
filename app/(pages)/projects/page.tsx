import Image from "next/image";
import { PinContainer } from "@/components/3D-pin";
import projects from "@/Utils/Projects";

const ProjectPage = () => {
  return (
    <div className="py-64 text-white flex flex-col justify-center items-center space-y-40">
      {projects?.map((project, index) => {
        return (
          <PinContainer key={index} title={project.name} href={project.repoUrl}>
            <div className="h-80 w-[30vw] flex items-center space-x-8 py-2">
              <Image
                priority
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
