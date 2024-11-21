import React from "react";

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "Redux",
    "Framer Motion",
    "TypeScript",
    "UI/UX Design",
    "CSS/SCSS",
    "TailwindCSS",
    "Bootstrap",
    "Material-UI",
    "Responsive Design",
    "Web Performance Optimization"
  ],
  "Backend Development": [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "JWT",
    "Web3JS",
    "RESTful APIs",
    "GraphQL",
    "WebSockets",
    "FastAPI",
    "ORM",
  ],
  "DevOps & Cloud": [
    "AWS",
    "Docker",
    "CI/CD Pipelines",
    "Linux",
    "Nginx",
    "SSL",
    "Domain Management",
  ],
  "Programming Languages": ["C", "C++", "Python", "JavaScript", "Java"],
  Tools: ["Figma", "VS Code", "Git", "Postman", "Photoshop", "Adobe XD"],
};

const SkillPage = () => {
  return (
    <div className="w-4/5 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillSet]) => (
          <div
            key={category}
            className="border p-4 rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {category}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {skillSet.map((skill) => (
                <li
                  key={skill}
                  className="hover:text-gray-900 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
