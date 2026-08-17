import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderContainer, Bar, Logo, Cursor, Nav, Status, MenuButton, MobileMenu } from "./style";

const links = [
    { href: "#home", label: "home" },
    { href: "#sobre", label: "sobre" },
    { href: "#experiencia", label: "experiencia" },
    { href: "#formacao", label: "formacao" },
    { href: "#projetos", label: "projetos" },
    { href: "#servicos", label: "servicos" },
    { href: "#contact", label: "contato" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <HeaderContainer>
            <Bar>
                <Logo href="#home">
                    patrick@dev<span>:~$</span>
                    <Cursor>_</Cursor>
                </Logo>

                <Nav>
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>
                            --{link.label}
                        </a>
                    ))}
                </Nav>

                <Status>
                    <span className="dot" />
                    disponível
                </Status>

                <MenuButton aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((v) => !v)}>
                    {open ? <FaTimes size={18} /> : <FaBars size={18} />}
                </MenuButton>
            </Bar>

            <MobileMenu $open={open}>
                {links.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                        --{link.label}
                    </a>
                ))}
            </MobileMenu>
        </HeaderContainer>
    );
}
