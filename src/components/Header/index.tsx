import { HeaderContainer, Lang, Logo, Nav, RightSide } from './style';


export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                US <span>English</span>
            </Logo>

            <RightSide>
                <Nav>
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </Nav>


            </RightSide>
        </HeaderContainer>
    );
}