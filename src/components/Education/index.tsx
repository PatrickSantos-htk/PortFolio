import { SectionHeading } from "../../styles/global";
import { techIcons } from "../../utils/techIcons";
import { degrees, courseGroups } from "../../data/education";
import {
    EducationContainer,
    Grid,
    Column,
    ColumnTitle,
    DegreeList,
    Degree,
    DegreeName,
    DegreePeriod,
    StatusBadge,
    CourseGroup,
    CourseGroupTitle,
    CourseTags,
    CourseTag,
    Languages,
    Language,
} from "./style";

export function Education() {
    return (
        <EducationContainer id="formacao">
            <SectionHeading index="03">formacao()</SectionHeading>
            <Grid>
                <Column>
                    <ColumnTitle>Educação acadêmica</ColumnTitle>
                    <DegreeList>
                        {degrees.map((degree) => (
                            <Degree key={degree.name}>
                                <DegreeName>{degree.name}</DegreeName>
                                <DegreePeriod>{degree.period}</DegreePeriod>
                                <StatusBadge concluded={degree.status === "concluído"}>
                                    {degree.status}
                                </StatusBadge>
                            </Degree>
                        ))}
                    </DegreeList>
                </Column>

                <Column>
                    <ColumnTitle>Cursos complementares</ColumnTitle>
                    {courseGroups.map((group) => (
                        <CourseGroup key={group.platform}>
                            <CourseGroupTitle>{group.platform}</CourseGroupTitle>
                            <CourseTags>
                                {group.courses.map((course) => (
                                    <CourseTag key={course}>
                                        {techIcons[course]}
                                        {course}
                                    </CourseTag>
                                ))}
                            </CourseTags>
                        </CourseGroup>
                    ))}

                    <Languages>
                        <Language>
                            <strong>Inglês</strong> — intermediário/técnico (leitura fluente de
                            documentações)
                        </Language>
                        <Language>
                            <strong>Espanhol</strong> — básico
                        </Language>
                    </Languages>
                </Column>
            </Grid>
        </EducationContainer>
    );
}
