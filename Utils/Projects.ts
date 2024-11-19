interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Minimalist Dashboard",
    description:
      "A clean and modern dashboard design with intuitive user interface and real-time data visualization",
    image: "images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tags: ["React", "TailwindCSS", "Node.js"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured online shopping platform with secure payment integration and user authentication",
    image: "images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["NextJS", "MongoDB", "Stripe"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern and responsive portfolio showcase with smooth animations and optimal performance",
    image: "images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    tags: ["React", "Framer Motion", "TailwindCSS"],
  },
];

export default projects;
