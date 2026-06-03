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
  SiRedis,
  SiPrisma,
  SiPython,
  SiFastapi
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const ZustandIcon = (props) => (
  <img className={`w-3 h-3 ${props.className || ""}`} src="https://files.svgcdn.io/devicon-plain/zustand.svg" alt="Zustand" />
);

const techStackData = [
  {
    id: 1,
    title: "Backend",
    stack: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Supabase", icon: SiSupabase },
      { name: "Clerk", icon: SiClerk },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "REST APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
      { name: "Vercel AI SDK", icon: SiVercel },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    id: 2,
    title: "Frontend",
    stack: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadCN UI", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React.js", icon: FaReact },
      { name: "Zustand", icon: ZustandIcon },
      { name: "Next.js", icon: SiNextdotjs },
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
      { name: "Python", icon: SiPython },
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
