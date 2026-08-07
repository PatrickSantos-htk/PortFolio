import { HeaderContainer, Logo, Cursor, Nav, Status } from './style';

const links = [
    { href: '#home', label: 'home' },
    { href: '#sobre', label: 'sobre' },
    { href: '#experiencia', label: 'experiencia' },
    { href: '#formacao', label: 'formacao' },
    { href: '#servicos', label: 'servicos' },
    { href: '#contact', label: 'contato' },
];

export function Header() {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    );
}
