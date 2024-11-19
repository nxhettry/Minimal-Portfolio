import { FaCode, FaDev, FaMobile, FaPalette } from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillType {
  id: number;
  name: string;
  icon: IconType;
}

const skills: SkillType[] = [
  { id: 1, name: "FullStack Web Development", icon: FaCode},
  { id: 2, name: "UI/UX Design", icon: FaPalette},
  { id: 3, name: "Mobile Development", icon: FaMobile},
  { id: 4, name: "DevOps", icon: FaDev},

];

export default skills;
