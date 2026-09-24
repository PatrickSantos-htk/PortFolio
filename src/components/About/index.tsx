import { SectionHeading } from "../../styles/global";
import { skillGroups } from "../../data/skills";
import {
    AboutContainer,
    Intro,
    Highlight,
    SkillGroup,
    GroupTitle,
    TechList,
    Tech,
} from "./style";

export function About() {
    return (
        <AboutContainer id="sobre">
            <SectionHeading index="01">sobre_mim()</SectionHeading>
            <Intro>
                Desenvolvedor Full Stack no ecossistema <Highlight>JavaScript</Highlight> e{" "}
                <Highlight>TypeScript</Highlight> (React, Next.js, Node.js e NestJS), com foco em{" "}
                <Highlight>Inteligência Artificial aplicada</Highlight>. Na Haytek, atuo em rodízio
                pelos times de TI com APIs, interfaces, API Gateway e agentes de IA, o que me dá uma
                visão global de como os sistemas se conectam ao negócio. Pela{" "}
                <Highlight>Selintech</Highlight>, minha empresa, entrego sistemas de ponta a ponta
                para clientes reais, do levantamento de requisitos ao deploy.
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
