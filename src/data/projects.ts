import tudoBelezaPainel from "../assets/projects/tudobeleza-painel.png";
import tudoBelezaAgenda from "../assets/projects/tudobeleza-agenda.png";
import tudoBelezaFinanceiro from "../assets/projects/tudobeleza-financeiro.png";
import catalogoHome from "../assets/projects/reidassoleira-home-shot.png";
import catalogoGrid from "../assets/projects/reidassoleira-catalogo-shot.png";

export type ProjectImage = { src: string; alt: string };

export type ClientProject = {
    title: string;
    tagline: string;
    description: string;
    highlights: string[];
    tags: string[];
    link: string;
    code?: string;
    images: ProjectImage[];
};

export type OtherProject = {
    title: string;
    kind: string;
    description: string;
    tags: string[];
    code: string;
    demo?: string;
};

export const clientProjects: ClientProject[] = [
    {
        title: "TudoBeleza",
        tagline: "Agenda, comanda e financeiro para negócios de beleza",
        description:
            "Organiza barbearias, salões, manicures e estúdios de trança em um só lugar: agenda online, comanda digital, financeiro, equipe e lembretes para o cliente.",
        highlights: [
            "Agenda com visão de dia, semana e mês, link público e próximo horário livre",
            "Comanda digital com serviços, produtos, PIX, cartão, dinheiro e baixa automática de estoque",
            "Financeiro com faturamento, lucro líquido, ticket médio, comissão e desempenho da equipe",
        ],
        tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Zustand", "Asaas"],
        link: "https://tudobeleza.selintech.com.br",
        images: [
            { src: tudoBelezaPainel, alt: "Painel do TudoBeleza com KPIs e cobranças pendentes" },
            { src: tudoBelezaAgenda, alt: "Agenda semanal do TudoBeleza" },
            { src: tudoBelezaFinanceiro, alt: "Tela financeira do TudoBeleza" },
        ],
    },
    {
        title: "Catálogo Comercial",
        tagline: "Vitrine online da Rei das Soleiras (mármore e granito)",
        description:
            "Transformou o portfólio de serviços da marmoraria numa vitrine profissional no ar 24h, que qualifica o cliente antes do primeiro contato e manda o orçamento direto para o WhatsApp.",
        highlights: [
            "Busca e filtro por categoria para o cliente achar o serviço rápido",
            "Botão de orçamento direto no WhatsApp em cada item do catálogo",
            "Painel admin próprio: o dono atualiza fotos e serviços sem depender de dev",
        ],
        tags: ["React 18", "TypeScript", "Vite", "Supabase", "TailwindCSS", "React Router"],
        link: "https://reidassoleira.vercel.app/",
        code: "https://github.com/PatrickSantos-htk/Catalogo",
        images: [
            { src: catalogoHome, alt: "Página inicial do site Rei das Soleiras" },
            { src: catalogoGrid, alt: "Vitrine de serviços do catálogo" },
        ],
    },
];

export const otherProjects: OtherProject[] = [
    {
        title: "Skill LinkedIn + Currículo",
        kind: "open source · IA",
        description:
            "Skill para o Claude que reformula o LinkedIn e o GitHub a partir do currículo, com foco em recrutadores e ATS, sem inflar qualificações.",
        tags: ["Claude Skills", "IA aplicada", "Markdown"],
        code: "https://github.com/PatrickSantos-htk/linkedin-curriculo-ia-skill",
    },
    {
        title: "Leitura de Consumo com IA",
        kind: "API",
        description:
            "API que lê o consumo de água e gás a partir da foto do medidor, usando o Google Gemini para extrair o valor da imagem.",
        tags: ["Node.js", "Express", "TypeScript", "Gemini"],
        code: "https://github.com/PatrickSantos-htk/leitura-consumo-api",
    },
    {
        title: "Gerenciador de Produtos",
        kind: "full stack",
        description:
            "CRUD de produtos com paginação, filtros e documentação Swagger, com testes E2E das rotas da API.",
        tags: ["NestJS", "MongoDB", "Docker", "React", "Jest"],
        code: "https://github.com/PatrickSantos-htk/crud-products",
    },
    {
        title: "Controle de Finanças",
        kind: "front-end",
        description:
            "Cadastro, busca e resumo de entradas, saídas e saldo, com formulários validados.",
        tags: ["React", "TypeScript", "React Hook Form", "Zod"],
        code: "https://github.com/PatrickSantos-htk/FinanceControl",
    },
];
