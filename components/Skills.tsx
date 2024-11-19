import skills from "@/Utils/Skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 ">
      <div className="mx-auto" style={{ width: "60%" }}>
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center gap-2 shadow-sm"
            >
              <skill.icon className="text-gray-700" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
