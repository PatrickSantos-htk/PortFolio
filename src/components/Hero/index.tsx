import { ReactTyped } from "react-typed";
import MinhaFoto from '../../assets/foto teste.jpg';

import { HeroContainer, Left, Right } from "./style";

export function Hero() {
    return (
        <HeroContainer id="home">
            <Left>
                <h1>Patrick S. Ribeiro</h1>
                <ReactTyped
                    strings={[
                        "Software Engineer",
                        "Full Stack Developer",
                        "Problem Solver",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    className="typed"
                />

            </Left>

            <Right>
                {/* Coloque sua imagem na pasta public/ e troque o nome aqui */}
                <img src={MinhaFoto} alt="Patrick Santos Avatar" />
            </Right>
        </HeroContainer>
    );
}
