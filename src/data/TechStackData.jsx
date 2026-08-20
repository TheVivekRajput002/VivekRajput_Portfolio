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
  SiFastapi,
  SiDocker,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiYolo
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
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: TbApi },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
      { name: "Clerk", icon: SiClerk },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "Vercel AI SDK", icon: SiVercel },
      // { name: "Supabase", icon: SiSupabase },
      // { name: "GraphQL", icon: SiGraphql },
    ],
  },
    {
    id: 2,
    title: "AI & Computer Vision",
    stack: [
      { name: "Ultralytics YOLO", icon: SiYolo },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Numpy", icon: SiNumpy },
      // { name: "Framer Motion", icon: SiFramer },
      { name: "Pandas", icon: SiPandas },
      // { name: "Zustand", icon: ZustandIcon },
    ],
  },
  {
    id: 3,
    title: "Frontend",
    stack: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadCN UI", icon: SiShadcnui },
      // { name: "Framer Motion", icon: SiFramer },
      // { name: "Zustand", icon: ZustandIcon },
    ],
  },
  {
    id: 4,
    title: "Database",
    stack: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: 5,
    title: "Languages",
    stack: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    id: 6,
    title: "Tools & DevOps",
    stack: [
      { name: "Docker", icon: SiDocker },
      { name: "Git & Github", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      // { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      // { name: "Render", icon: SiRender },
    ],
  },
];

export default techStackData;
