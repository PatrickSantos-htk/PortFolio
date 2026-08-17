import { useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionHeading } from "../../styles/global";
import { techIcons } from "../../utils/techIcons";
import barberPainel from "../../assets/projects/barbersaas-painel.png";
import barberAgenda from "../../assets/projects/barbersaas-agenda.png";
import barberFinanceiro from "../../assets/projects/barbersaas-financeiro.png";
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
        title: "BarberSaaS",
        tagline: "Plataforma de gestão para barbearias",
        description:
            "Tira a barbearia da planilha e do caderno: agenda, clientes e financeiro num só lugar, com cobrança automática via WhatsApp — o dono vê o faturamento do mês sem precisar somar nada na mão.",
        highlights: [
            "Cada barbearia com sua própria conta e dados isolados (multi-tenant)",
            "Assinatura mensal recorrente com cobrança automática via Asaas (PIX + cartão)",
            "Dashboard com faturamento, lucro e ticket médio em tempo real",
        ],
        tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Zustand", "Asaas"],
        link: "https://barber-selintech.vercel.app/",
        images: [
            { src: barberPainel, alt: "Painel do BarberSaaS com KPIs e cobranças pendentes" },
            { src: barberAgenda, alt: "Agenda semanal do BarberSaaS" },
            { src: barberFinanceiro, alt: "Tela financeira do BarberSaaS" },
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
