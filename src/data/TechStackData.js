import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiClerk,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRender,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techStackData = [
  {
    id: 1,
    title: "Frontend",
    stack: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadCN UI", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    id: 2,
    title: "Backend",
    stack: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Supabase", icon: SiSupabase },
      { name: "Clerk", icon: SiClerk },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "REST APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    id: 3,
    title: "Database",
    stack: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: 4,
    title: "Languages",
    stack: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: 5,
    title: "Tools",
    stack: [
      { name: "Postman", icon: SiPostman },
      { name: "Git & Github", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default techStackData;
