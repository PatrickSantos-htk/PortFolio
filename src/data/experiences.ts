export type Experience = {
    hash: string;
    branch: string;
    date: string;
    role: string;
    company: string;
    bullets: string[];
};

export const experiences: Experience[] = [
    {
        hash: "f4a91c2",
        branch: "haytek",
        date: "ago/2025 — presente",
        role: "Desenvolvedor de Software (Estágio)",
        company: "Haytek",
        bullets: [
            "Rodízio por todos os times de TI (Administrativo, Vendas, Logística, Dados e Infraestrutura), desenvolvendo interfaces em React.js e APIs RESTful em NestJS e TypeScript, integradas a SQL e MongoDB.",
            "Infraestrutura (atual): rotas, plugins e autenticação JWT no API Gateway Kong, além de soluções com IA.",
            "Logística: padronização dos logs de 14 APIs, facilitando a manutenção e reduzindo custos; telas front-end em React.js.",
            "Dados: agente de IA arquiteto que centraliza regras de negócio, frameworks, segurança e arquitetura, e skills de IA para a migração do Data Lake (Python e SQL).",
            "Administrativo: relatórios e novas funções sob demanda no ERP Protheus com ADVPL.",
        ],
    },
    {
        hash: "9d3e0a7",
        branch: "selintech",
        date: "mar/2026 — presente",
        role: "Desenvolvedor Full Stack (Freelancer / Fundador)",
        company: "Selintech",
        bullets: [
            "Projetos de ponta a ponta para clientes: requisitos, arquitetura front/back-end, desenvolvimento e deploy.",
            "Sistemas de gestão, catálogos comerciais, landing pages e e-commerces com integração de pagamentos (veja em projetos()).",
        ],
    },
    {
        hash: "2b7c184",
        branch: "jovens-genios",
        date: "out/2023 — jul/2024",
        role: "Desenvolvedor Full Stack (Estágio)",
        company: "Jovens Gênios",
        bullets: [
            "Funcionalidades em React.js e Vue.js para plataformas educacionais gamificadas.",
            "Testes E2E automatizados com Cypress, reduzindo bugs em produção.",
            "Manutenção de APIs com Node.js e GraphQL, otimizando o tempo de resposta.",
        ],
    },
];
