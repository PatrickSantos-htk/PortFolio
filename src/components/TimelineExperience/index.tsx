import React from 'react';
import { TimelineContainer, Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineDate, TimelineTitle, TimelineCompany, TimelineDescription } from './style';
import { TimelineTooltip } from './style';

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

const TimelineExperience: React.FC = () => (
    <TimelineContainer id="experiencia">
        <h2>Minha Experiência</h2>
        <Timeline>
            {experiences.map((exp, idx) => (
                <TimelineItem key={idx}>
                    <TimelineDot />
                    <TimelineContent
                        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                            const tooltip = e.currentTarget.querySelector('.timeline-tooltip');
                            if (tooltip) tooltip.classList.add('visible');
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                            const tooltip = e.currentTarget.querySelector('.timeline-tooltip');
                            if (tooltip) tooltip.classList.remove('visible');
                        }}
                    >
                        <TimelineDate>{exp.date}</TimelineDate>
                        <TimelineTitle>{exp.title}</TimelineTitle>
                        <TimelineCompany>{exp.company}</TimelineCompany>
                        <TimelineTooltip className="timeline-tooltip">
                            {exp.description}
                        </TimelineTooltip>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </TimelineContainer>
);

export default TimelineExperience;
