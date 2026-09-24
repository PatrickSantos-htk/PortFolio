import { SectionHeading } from "../../styles/global";
import { experiences } from "../../data/experiences";
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
