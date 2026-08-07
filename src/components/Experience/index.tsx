import { SectionHeading } from "../../styles/global";
import {
    ExperienceContainer,
    Timeline,
    Commit,
    CommitHash,
    CommitLine,
    CommitHeader,
    CommitBranch,
    CommitDate,
    CommitRole,
    CommitCompany,
    Diff,
    DiffLine,
} from "./style";

const experiences = [
    {
        hash: "f4a91c2",
        branch: "haytek",
        date: "ago/2025 — presente",
        role: "Desenvolvedor de Software (Estágio)",
        company: "Haytek",
        bullets: [
            "Interfaces dinâmicas, responsivas e performáticas com React.js, JavaScript e Angular.",
            "APIs RESTful com NestJS (Node.js) e TypeScript, integrando front-end e banco de dados.",
            "Agentes de Inteligência Artificial para automação de processos operacionais internos.",
            "Apoio ao time de Data Lake com scripts em Python e consultas SQL.",
            "Integrações com SQL, MongoDB e o ERP Protheus via ADVPL.",
        ],
    },
    {
        hash: "9d3e0a7",
        branch: "selintech",
        date: "mar/2026 — presente",
        role: "Desenvolvedor Full Stack (Freelancer / Fundador)",
        company: "Selintech",
        bullets: [
            "Landing pages de alta conversão, com foco em UX/UI e boas práticas de SEO.",
            "Plataformas completas de e-commerce, com integrações de pagamento e gestão.",
            "Sistemas sob demanda: requisitos, arquitetura (front/back-end) e deploy final.",
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
            "Manutenção de APIs com Node.js e GraphQL, otimizando tempo de resposta.",
        ],
    },
];

export function Experience() {
    return (
        <ExperienceContainer id="experiencia">
            <SectionHeading index="02">experiencia()</SectionHeading>
            <Timeline>
                {experiences.map((exp, idx) => (
                    <Commit key={exp.hash}>
                        <CommitLine>
                            <CommitHash>{exp.hash}</CommitHash>
                            {idx !== experiences.length - 1 && <span className="rail" />}
                        </CommitLine>
                        <div>
                            <CommitHeader>
                                <CommitBranch>{exp.branch}</CommitBranch>
                                <CommitDate>{exp.date}</CommitDate>
                            </CommitHeader>
                            <CommitRole>{exp.role}</CommitRole>
                            <CommitCompany>@ {exp.company}</CommitCompany>
                            <Diff>
                                {exp.bullets.map((bullet) => (
                                    <DiffLine key={bullet}>{bullet}</DiffLine>
                                ))}
                            </Diff>
                        </div>
                    </Commit>
                ))}
            </Timeline>
        </ExperienceContainer>
    );
}
