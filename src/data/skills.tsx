import type { ReactNode } from "react";
import {
    FaReact,
    FaHtml5,
    FaVuejs,
    FaNodeJs,
    FaDatabase,
    FaRobot,
    FaLayerGroup,
    FaServer,
    FaNetworkWired,
    FaPython,
    FaShieldAlt,
    FaKey,
    FaGitAlt,
    FaDocker,
} from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiAngular,
    SiNestjs,
    SiGraphql,
    SiMongodb,
    SiCypress,
    SiNextdotjs,
    SiTailwindcss,
    SiSupabase,
    SiJest,
    SiVercel,
} from "react-icons/si";

export type Skill = { icon: ReactNode; label: string };
export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
    {
        title: "Front-end",
        skills: [
            { icon: <SiJavascript size={18} />, label: "JavaScript" },
            { icon: <SiTypescript size={18} />, label: "TypeScript" },
            { icon: <FaReact size={18} />, label: "React.js" },
            { icon: <SiNextdotjs size={18} />, label: "Next.js" },
            { icon: <SiAngular size={18} />, label: "Angular" },
            { icon: <FaVuejs size={18} />, label: "Vue.js" },
            { icon: <SiTailwindcss size={18} />, label: "Tailwind CSS" },
            { icon: <FaHtml5 size={18} />, label: "HTML5 / CSS3" },
        ],
    },
    {
        title: "Back-end & APIs",
        skills: [
            { icon: <FaNodeJs size={18} />, label: "Node.js" },
            { icon: <SiNestjs size={18} />, label: "NestJS" },
            { icon: <FaNetworkWired size={18} />, label: "REST APIs" },
            { icon: <SiGraphql size={18} />, label: "GraphQL" },
            { icon: <FaShieldAlt size={18} />, label: "API Gateway (Kong)" },
            { icon: <FaKey size={18} />, label: "Autenticação JWT" },
            { icon: <SiSupabase size={18} />, label: "Supabase" },
        ],
    },
    {
        title: "Dados & IA aplicada",
        skills: [
            { icon: <FaRobot size={18} />, label: "Agentes de IA" },
            { icon: <FaPython size={18} />, label: "Python" },
            { icon: <FaDatabase size={18} />, label: "SQL" },
            { icon: <SiMongodb size={18} />, label: "MongoDB" },
            { icon: <FaLayerGroup size={18} />, label: "Data Lake" },
            { icon: <FaServer size={18} />, label: "ADVPL (Protheus)" },
        ],
    },
    {
        title: "Qualidade & ferramentas",
        skills: [
            { icon: <SiCypress size={18} />, label: "Cypress (E2E)" },
            { icon: <SiJest size={18} />, label: "Jest / Supertest" },
            { icon: <FaDocker size={18} />, label: "Docker (básico)" },
            { icon: <FaGitAlt size={18} />, label: "Git / GitHub" },
            { icon: <SiVercel size={18} />, label: "Vercel" },
        ],
    },
];
