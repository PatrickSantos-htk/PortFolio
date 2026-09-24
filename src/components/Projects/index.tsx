import { useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { SectionHeading } from "../../styles/global";
import { techIcons } from "../../utils/techIcons";
import { clientProjects, otherProjects, type ProjectImage } from "../../data/projects";
import {
    ProjectsContainer,
    Intro,
    List,
    Card,
    GalleryFrame,
    Shot,
    NavButton,
    Dots,
    Dot,
    Info,
    CardTitle,
    CardTagline,
    CardDescription,
    Highlights,
    HighlightItem,
    TagList,
    Tag,
    LiveLink,
    Footer,
    FooterButton,
    Links,
    SubHeading,
    SubIntro,
    MiniGrid,
    MiniCard,
    MiniKind,
    MiniTitle,
    MiniDescription,
} from "./style";

function ProjectGallery({ images }: { images: ProjectImage[] }) {
    const [active, setActive] = useState(0);
    const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
    const next = () => setActive((i) => (i + 1) % images.length);

    return (
        <GalleryFrame>
            <Shot src={images[active].src} alt={images[active].alt} loading="lazy" />
            {images.length > 1 && (
                <>
                    <NavButton $side="left" aria-label="Imagem anterior" onClick={prev}>
                        <FaChevronLeft size={14} />
                    </NavButton>
                    <NavButton $side="right" aria-label="Próxima imagem" onClick={next}>
                        <FaChevronRight size={14} />
                    </NavButton>
                    <Dots>
                        {images.map((image, i) => (
                            <Dot
                                key={image.src}
                                $active={i === active}
                                aria-label={`Ver imagem ${i + 1}`}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </Dots>
                </>
            )}
        </GalleryFrame>
    );
}

export function Projects() {
    return (
        <ProjectsContainer id="projetos">
            <SectionHeading index="04">projetos()</SectionHeading>
            <Intro>
                Através da <strong>Selintech</strong>, minha empresa de desenvolvimento
                freelancer, entrego sistemas de ponta a ponta para clientes reais, do
                levantamento de requisitos ao deploy em produção.
            </Intro>

            <List>
                {clientProjects.map((project) => (
                    <Card key={project.title}>
                        <ProjectGallery images={project.images} />

                        <Info>
                            <CardTitle>{project.title}</CardTitle>
                            <CardTagline>{project.tagline}</CardTagline>
                            <CardDescription>{project.description}</CardDescription>

                            <Highlights>
                                {project.highlights.map((highlight) => (
                                    <HighlightItem key={highlight}>{highlight}</HighlightItem>
                                ))}
                            </Highlights>

                            <TagList>
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>
                                        {techIcons[tag]}
                                        {tag}
                                    </Tag>
                                ))}
                            </TagList>

                            <Links>
                                <LiveLink href={project.link} target="_blank" rel="noopener noreferrer">
                                    Ver projeto no ar <FaExternalLinkAlt size={12} />
                                </LiveLink>
                                {project.code && (
                                    <LiveLink href={project.code} target="_blank" rel="noopener noreferrer">
                                        Ver código <FaGithub size={13} />
                                    </LiveLink>
                                )}
                            </Links>
                        </Info>
                    </Card>
                ))}
            </List>

            <SubHeading>open_source/ estudos/</SubHeading>
            <SubIntro>Projetos com código aberto no GitHub.</SubIntro>
            <MiniGrid>
                {otherProjects.map((project) => (
                    <MiniCard key={project.title}>
                        <MiniKind>{project.kind}</MiniKind>
                        <MiniTitle>{project.title}</MiniTitle>
                        <MiniDescription>{project.description}</MiniDescription>
                        <TagList>
                            {project.tags.map((tag) => (
                                <Tag key={tag}>
                                    {techIcons[tag]}
                                    {tag}
                                </Tag>
                            ))}
                        </TagList>
                        <LiveLink href={project.code} target="_blank" rel="noopener noreferrer">
                            Ver código <FaGithub size={13} />
                        </LiveLink>
                    </MiniCard>
                ))}
            </MiniGrid>

            <Footer>
                Tem um projeto em mente?
                <FooterButton href="#contact">Vamos conversar →</FooterButton>
            </Footer>
        </ProjectsContainer>
    );
}
