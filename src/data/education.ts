export type Degree = {
    name: string;
    period: string;
    status: "cursando" | "concluído";
};

export const degrees: Degree[] = [
    {
        name: "Ciência da Computação (Bacharelado)",
        period: "out/2025 — prev. dez/2027",
        status: "cursando",
    },
    {
        name: "Engenharia de Software (Pós-graduação)",
        period: "dez/2025 — prev. dez/2026",
        status: "cursando",
    },
    {
        name: "Análise e Des. de Sistemas (Tecnólogo)",
        period: "concluído em out/2025",
        status: "concluído",
    },
];

export const courseGroups = [
    {
        platform: "Alura",
        courses: ["JavaScript", "React.js", "Node.js", "NestJS", "Vue.js", "HTML5 & CSS3"],
    },
    {
        platform: "Descomplica",
        courses: [
            "Arquitetura de Computadores",
            "DB Developer",
            "Fundamentos de Programação",
            "POO",
        ],
    },
];
