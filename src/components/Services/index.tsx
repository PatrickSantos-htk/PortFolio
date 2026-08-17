import { FaBolt, FaShoppingCart, FaCogs } from "react-icons/fa";
import { SectionHeading } from "../../styles/global";
import {
    ServicesContainer,
    Intro,
    Grid,
    Card,
    CardHeader,
    CardIndex,
    CardTitle,
    CardDescription,
    TagList,
    Tag,
} from "./style";

const services = [
    {
        icon: <FaBolt size={20} />,
        index: "01",
        title: "Landing pages de alta conversão",
        description:
            "Páginas de alta performance estritamente focadas em UX/UI e boas práticas de SEO, feitas para converter visitantes em clientes.",
        tags: ["React", "SEO", "Performance", "UX/UI"],
    },
    {
        icon: <FaShoppingCart size={20} />,
        index: "02",
        title: "E-commerce ponta a ponta",
        description:
            "Plataformas completas de venda online, com integrações robustas de meios de pagamento e sistemas de gestão.",
        tags: ["Node.js", "Pagamentos", "Gestão", "Deploy"],
    },
    {
        icon: <FaCogs size={20} />,
        index: "03",
        title: "Sistemas sob demanda",
        description:
            "Do levantamento de requisitos à arquitetura front/back-end e deploy final — sistemas personalizados para diferentes nichos.",
        tags: ["React", "NestJS", "SQL", "MongoDB"],
    },
];

export function Services() {
    return (
        <ServicesContainer id="servicos">
            <SectionHeading index="05">servicos()</SectionHeading>
            <Intro>O que a Selintech entrega para os clientes:</Intro>

            <Grid>
                {services.map((service) => (
                    <Card key={service.index}>
                        <CardHeader>
                            {service.icon}
                            <CardIndex>service_{service.index}</CardIndex>
                        </CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                        <TagList>
                            {service.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </TagList>
                    </Card>
                ))}
            </Grid>
        </ServicesContainer>
    );
}
