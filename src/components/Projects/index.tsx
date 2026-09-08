import { useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionHeading } from "../../styles/global";
import { techIcons } from "../../utils/techIcons";
import tudoBelezaPainel from "../../assets/projects/tudobeleza-painel.png";
import tudoBelezaAgenda from "../../assets/projects/tudobeleza-agenda.png";
import tudoBelezaFinanceiro from "../../assets/projects/tudobeleza-financeiro.png";
import catalogoHome from "../../assets/projects/reidassoleira-home-shot.png";
import catalogoGrid from "../../assets/projects/reidassoleira-catalogo-shot.png";
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
} from "./style";

type ProjectImage = { src: string; alt: string };

function ProjectGallery({ images }: { images: ProjectImage[] }) {
    const [active, setActive] = useState(0);
    const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
    const next = () => setActive((i) => (i + 1) % images.length);

    return (
        <GalleryFrame>
            <Shot src={images[active].src} alt={images[active].alt} loading="lazy" />
            {images.length > 1 && (
                <>
                    <NavButton side="left" aria-label="Imagem anterior" onClick={prev}>
                        <FaChevronLeft size={14} />
                    </NavButton>
                    <NavButton side="right" aria-label="Próxima imagem" onClick={next}>
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

const projects = [
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
        tagline: "Vitrine online — Reino das Soleiras (mármore e granito)",
        description:
            "Transformou o portfólio de serviços da marmoraria numa vitrine profissional no ar 24h, que qualifica o cliente antes do primeiro contato e manda o orçamento direto pro WhatsApp — sem depender só de indicação e Instagram.",
        highlights: [
            "Busca e filtro por categoria para o cliente achar o serviço rápido",
            "Botão de orçamento direto no WhatsApp em cada item do catálogo",
            "Painel admin próprio: dono atualiza fotos e serviços sem depender de dev",
        ],
        tags: ["React 18", "TypeScript", "Vite", "Supabase", "TailwindCSS", "React Router"],
        link: "https://reidassoleira.vercel.app/",
        images: [
            { src: catalogoHome, alt: "Página inicial do site Reino das Soleiras" },
            { src: catalogoGrid, alt: "Vitrine de serviços do catálogo" },
        ],
    },
];

export function Projects() {
    return (
        <ProjectsContainer id="projetos">
            <SectionHeading index="04">projetos()</SectionHeading>
            <Intro>
                Através da <strong>Selintech</strong>, minha empresa de desenvolvimento
                freelancer, entrego sistemas de ponta a ponta para clientes reais — do
                levantamento de requisitos ao deploy em produção.
            </Intro>

            <List>
                {projects.map((project) => (
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

                            <LiveLink href={project.link} target="_blank" rel="noopener noreferrer">
                                Ver projeto no ar <FaExternalLinkAlt size={12} />
                            </LiveLink>
                        </Info>
                    </Card>
                ))}
            </List>

            <Footer>
                Tem um projeto em mente?
                <FooterButton href="#contact">Vamos conversar →</FooterButton>
            </Footer>
        </ProjectsContainer>
    );
}
