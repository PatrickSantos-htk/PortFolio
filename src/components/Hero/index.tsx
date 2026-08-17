import { ReactTyped } from "react-typed";
import { FaDownload } from "react-icons/fa";
import MinhaFoto from "../../assets/patrick-avatar.jpg";

import {
    HeroContainer,
    Left,
    Eyebrow,
    Meta,
    Actions,
    PrimaryButton,
    SecondaryButton,
    Right,
    TerminalWindow,
    TerminalBar,
    TerminalDot,
    TerminalLabel,
    Photo,
    PhotoCaption,
} from "./style";

export function Hero() {
    return (
        <HeroContainer id="home">
            <Left>
                <Eyebrow>// ola, eu sou</Eyebrow>
                <h1>Patrick Santos Ribeiro</h1>
                <ReactTyped
                    strings={[
                        "Desenvolvedor Full Stack",
                        "Especialista em React & JavaScript",
                        "Fundador @ Selintech",
                        "Criador de agentes de IA",
                    ]}
                    typeSpeed={55}
                    backSpeed={30}
                    backDelay={1500}
                    loop
                    className="typed"
                />

                <Meta>
                    <span className="dot" />
                    Rio de Janeiro, RJ · disponível para novos projetos
                </Meta>

                <Actions>
                    <PrimaryButton href="#experiencia">Ver experiência</PrimaryButton>
                    <SecondaryButton
                        href="/curriculo-patrick-santos-ribeiro.pdf"
                        download="Curriculo-Patrick-Santos-Ribeiro.pdf"
                    >
                        <FaDownload size={13} /> Baixar CV
                    </SecondaryButton>
                    <SecondaryButton href="#contact">Falar comigo</SecondaryButton>
                </Actions>
            </Left>

            <Right>
                <TerminalWindow>
                    <TerminalBar>
                        <TerminalDot color="#ff5f56" />
                        <TerminalDot color="#ffbd2e" />
                        <TerminalDot color="#27c93f" />
                        <TerminalLabel>patrick.jpg</TerminalLabel>
                    </TerminalBar>
                    <Photo src={MinhaFoto} alt="Patrick Santos Ribeiro" />
                    <PhotoCaption>$ file patrick.jpg → full-stack developer</PhotoCaption>
                </TerminalWindow>
            </Right>
        </HeroContainer>
    );
}
