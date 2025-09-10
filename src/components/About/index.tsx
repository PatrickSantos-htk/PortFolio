import { AboutContainer, Text, Highlight, TechList, Tech, Title } from "./style";
import { FaReact, FaNodeJs, FaDocker, FaVuejs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiNestjs, SiTypescript, SiJavascript, SiGraphql } from "react-icons/si";

export function About() {
    return (
        <AboutContainer >
            <div>
                <Text id="skills">
                    Hi, I’m <Highlight>Patrick</Highlight> 👋
                    <br />
                    A passionate <Highlight>Fullstack Developer</Highlight> who loves building
                    modern and scalable applications.
                    I work with both frontend and backend, always focusing on performance,
                    clean code and user experience 🚀
                </Text>
                <Title>Skills</Title>

                <TechList >
                    <Tech><FaReact size={20} /> React</Tech>
                    <Tech><FaVuejs size={20} /> Vue.js</Tech>
                    <Tech><FaNodeJs size={20} /> Node.js</Tech>
                    <Tech><SiNestjs size={20} /> NestJS</Tech>
                    <Tech><SiTypescript size={20} /> TypeScript</Tech>
                    <Tech><SiJavascript size={20} /> JavaScript</Tech>
                    <Tech><SiMongodb size={20} /> MongoDB</Tech>
                    <Tech><FaDatabase size={20} /> SQL Server</Tech>
                    <Tech><SiGraphql size={20} /> GraphQL</Tech>
                    <Tech><FaDocker size={20} /> Docker</Tech>
                </TechList>
            </div>
        </AboutContainer>
    );
}
