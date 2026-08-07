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
} from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiAngular,
    SiNestjs,
    SiGraphql,
    SiMongodb,
    SiCypress,
} from "react-icons/si";

import { SectionHeading } from "../../styles/global";
import {
    AboutContainer,
    Intro,
    Highlight,
    SkillGroup,
    GroupTitle,
    TechList,
    Tech,
} from "./style";

const skillGroups = [
    {
        title: "Especialidade",
        skills: [
            { icon: <SiJavascript size={18} />, label: "JavaScript" },
            { icon: <SiTypescript size={18} />, label: "TypeScript" },
            { icon: <FaReact size={18} />, label: "React.js" },
        ],
    },
    {
        title: "Ecossistema Web & Back-end",
        skills: [
            { icon: <FaHtml5 size={18} />, label: "HTML5 / CSS3" },
            { icon: <SiAngular size={18} />, label: "Angular" },
            { icon: <FaVuejs size={18} />, label: "Vue.js" },
            { icon: <FaNodeJs size={18} />, label: "Node.js" },
            { icon: <SiNestjs size={18} />, label: "NestJS" },
            { icon: <SiGraphql size={18} />, label: "GraphQL" },
            { icon: <FaNetworkWired size={18} />, label: "REST APIs" },
        ],
    },
    {
        title: "Dados & IA Aplicados",
        skills: [
            { icon: <FaPython size={18} />, label: "Python" },
            { icon: <FaDatabase size={18} />, label: "SQL" },
            { icon: <SiMongodb size={18} />, label: "MongoDB" },
            { icon: <FaLayerGroup size={18} />, label: "Data Lake" },
            { icon: <FaRobot size={18} />, label: "Agentes de IA" },
            { icon: <SiCypress size={18} />, label: "Cypress (E2E)" },
            { icon: <FaServer size={18} />, label: "ADVPL (Protheus)" },
        ],
    },
];

export function About() {
    return (
        <AboutContainer id="sobre">
            <SectionHeading index="01">sobre_mim()</SectionHeading>
            <Intro>
                Desenvolvedor focado no ecossistema <Highlight>JavaScript</Highlight> e{" "}
                <Highlight>TypeScript</Highlight>, com forte domínio em React.js e na criação de
                interfaces web modernas e escaláveis. Além da especialidade em front-end, atuo de
                forma multidisciplinar na Haytek, com Node.js (NestJS), engenharia de dados
                (Data Lake, Python, SQL) e na criação de <Highlight>agentes de Inteligência
                Artificial</Highlight> para automatizar fluxos operacionais. Através da minha
                empresa, a <Highlight>Selintech</Highlight>, desenvolvo e-commerces e sistemas
                personalizados de ponta a ponta como freelancer. Busco oportunidades onde possa
                liderar entregas em React e utilizar minha versatilidade tecnológica para gerar
                impacto direto no negócio.
            </Intro>

            {skillGroups.map((group) => (
                <SkillGroup key={group.title}>
                    <GroupTitle>{group.title}</GroupTitle>
                    <TechList>
                        {group.skills.map((skill) => (
                            <Tech key={skill.label}>
                                {skill.icon}
                                {skill.label}
                            </Tech>
                        ))}
                    </TechList>
                </SkillGroup>
            ))}
        </AboutContainer>
    );
}
