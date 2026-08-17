import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "../../styles/global";
import {
    ContactContainer,
    Intro,
    ContactList,
    ContactLink,
    Prompt,
    Footer,
} from "./style";

const links = [
    {
        icon: <FaEnvelope size={18} />,
        command: "--email",
        label: "patricksantosribeiro2017@gmail.com",
        href: "mailto:patricksantosribeiro2017@gmail.com",
    },
    {
        icon: <FaWhatsapp size={18} />,
        command: "--whatsapp",
        label: "(21) 97367-5618",
        href: "https://wa.me/5521973675618",
    },
    {
        icon: <FaLinkedin size={18} />,
        command: "--linkedin",
        label: "linkedin.com/in/patrick-santos-162899207",
        href: "https://www.linkedin.com/in/patrick-santos-162899207/",
    },
    {
        icon: <FaGithub size={18} />,
        command: "--github",
        label: "github.com/PatrickSantos-htk",
        href: "https://github.com/PatrickSantos-htk",
    },
];

export function Contact() {
    return (
        <ContactContainer id="contact">
            <SectionHeading index="06">contato()</SectionHeading>
            <Intro>
                Disponível para novas oportunidades e projetos freelancer. Rio de Janeiro, RJ.
            </Intro>

            <ContactList>
                {links.map((link) => (
                    <ContactLink
                        key={link.command}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Prompt>$ contact {link.command}</Prompt>
                        {link.icon}
                        {link.label}
                    </ContactLink>
                ))}
            </ContactList>

            <Footer>Patrick Santos Ribeiro © {new Date().getFullYear()}</Footer>
        </ContactContainer>
    );
}
