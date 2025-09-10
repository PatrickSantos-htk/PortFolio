import { FaGithub, FaGlobe, FaReact, FaNodeJs, FaVuejs, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiJavascript, SiMongodb, SiGraphql } from "react-icons/si";

import {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    TechIcons,
    TechIcon,
    Buttons,
    Button,
} from "./style";
import type { JSX } from "react";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    techs: string[];
    code: string;
    live: string;
}

// 🔹 Mapa de techs -> Ícones
const techIconMap: Record<string, JSX.Element> = {
    React: <FaReact size={20} color="#61DBFB" />,
    Vue: <FaVuejs size={20} color="#42B883" />,
    "Vue.js": <FaVuejs size={20} color="#42B883" />,
    Node: <FaNodeJs size={20} color="#3C873A" />,
    "Node.js": <FaNodeJs size={20} color="#3C873A" />,
    NestJS: <SiNestjs size={20} color="#E0234E" />,
    TypeScript: <SiTypescript size={20} color="#3178C6" />,
    JavaScript: <SiJavascript size={20} color="#F7DF1E" />,
    MongoDB: <SiMongodb size={20} color="#47A248" />,
    "SQL Server": <FaDatabase size={20} color="#CC2927" />,
    GraphQL: <SiGraphql size={20} color="#E535AB" />,
    Docker: <FaDocker size={20} color="#0db7ed" />,
};

export function Projects({ title, description, image, techs, code, live }: ProjectProps) {
    return (
        <Card>
            <CardImage src={image} alt={title} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>

                {/* 🔹 Renderizando ícones via mapa */}
                <TechIcons>
                    {techs.map((tech, index) => (
                        <TechIcon key={index}>
                            {techIconMap[tech] ?? tech} {/* fallback: mostra texto se não achar ícone */}
                        </TechIcon>
                    ))}
                </TechIcons>

                <Buttons>
                    <Button href={code} target="_blank" blue>
                        <FaGithub /> Code
                    </Button>
                    <Button href={live} target="_blank" yellow>
                        <FaGlobe /> Live
                    </Button>
                </Buttons>
            </CardContent>
        </Card>
    );
}
