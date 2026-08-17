import type { ReactNode } from "react";
import { FaReact, FaNodeJs, FaVuejs, FaHtml5, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiNestjs,
    SiSupabase,
    SiTailwindcss,
    SiNextdotjs,
    SiVite,
    SiReactrouter,
} from "react-icons/si";

export const techIcons: Record<string, ReactNode> = {
    "Next.js 16": <SiNextdotjs size={16} />,
    TypeScript: <SiTypescript size={16} />,
    Supabase: <SiSupabase size={16} />,
    "Tailwind v4": <SiTailwindcss size={16} />,
    TailwindCSS: <SiTailwindcss size={16} />,
    Zustand: <FaLayerGroup size={16} />,
    Asaas: <FaMoneyBillWave size={16} />,
    "React 18": <FaReact size={16} />,
    "React.js": <FaReact size={16} />,
    Vite: <SiVite size={16} />,
    "React Router": <SiReactrouter size={16} />,
    JavaScript: <SiJavascript size={16} />,
    "Node.js": <FaNodeJs size={16} />,
    NestJS: <SiNestjs size={16} />,
    "Vue.js": <FaVuejs size={16} />,
    "HTML5 & CSS3": <FaHtml5 size={16} />,
};
