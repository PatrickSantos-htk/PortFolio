import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ContactContainer, ContactTitle, ContactLinks, ContactLink } from "./style";

export function Contact() {
    return (
        <ContactContainer id="contact">
            <ContactTitle>Contact</ContactTitle>

            <ContactLinks>
                <ContactLink href="mailto:seuemail@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={28} /> Email
                </ContactLink>

                <ContactLink href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} /> GitHub
                </ContactLink>

                <ContactLink href="https://www.linkedin.com/in/seuusuario/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} /> LinkedIn
                </ContactLink>

                <ContactLink href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={28} /> WhatsApp
                </ContactLink>
            </ContactLinks>
        </ContactContainer>
    );
}
