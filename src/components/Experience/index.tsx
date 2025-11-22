import React from 'react';
import { ExperienceContainer, ExperienceList, ExperienceCard, Tooltip, ExperienceDate, ExperienceCompany, ExperienceTitle } from './style';

const experiences = [
    {
        date: '2022 - Atual',
        title: 'Desenvolvedor Front-end',
        company: 'Tech Soluções',
        description: 'Desenvolvi interfaces web usando HTML, CSS e JavaScript, colaborei com designers e otimizei a performance do site principal.'
    },
    {
        date: '2020 - 2022',
        title: 'Estagiário de Design',
        company: 'Agência Criativa',
        description: 'Criação de banners, edição de imagens no Photoshop e auxílio na prototipagem de sites no Figma.'
    }
];

const Experience: React.FC = () => (
    <ExperienceContainer id="experiencia">
        <h2>Minha Experiência</h2>
        <ExperienceList>
            {experiences.map((exp, idx) => (
                <ExperienceCard key={idx}>
                    <ExperienceDate>{exp.date}</ExperienceDate>
                    <ExperienceTitle>{exp.title}</ExperienceTitle>
                    <ExperienceCompany>{exp.company}</ExperienceCompany>
                    <Tooltip>{exp.description}</Tooltip>
                </ExperienceCard>
            ))}
        </ExperienceList>
    </ExperienceContainer>
);

export default Experience;