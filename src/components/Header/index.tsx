import { HeaderContainer, Lang, Logo, Nav, RightSide } from './style';


export function Header() {
    return (
        <HeaderContainer>
            <Logo>Patrick</Logo>

            <RightSide>
                <Nav>
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </Nav>

                {/* Flag estática */}
                <Lang>
                    <img src="/us-flag.png" alt="US Flag" />
                    EN
                </Lang>
            </RightSide>
        </HeaderContainer>
    );
}