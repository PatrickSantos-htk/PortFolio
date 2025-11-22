import { Header } from './components/Header'
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Hero } from './components/Hero';
import { GlobalStyle } from './styles/global';
import { About } from './components/About';
import { Projects, } from './components/Projects';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
import TimelineExperience from './components/TimelineExperience';


interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  code: string;
  live: string;
}
export function App() {
  const myFirstProject: ProjectProps = {
    title: "Nome do sa",
    description: "Uma breve descrição sobre o que este projeto faz.",
    image: "https://kennydouglas.com.br/wp-content/uploads/2023/07/Fotografia-de-paisagem-guia-comp.webp",
    techs: ["", "TypeScript", "CSS"],
    code: "https://github.com/seu-usuario/seu-repositorio",
    live: "https://seu-projeto-online.com"
  };



  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <TimelineExperience />
        <About />

        <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>

          <Projects {...myFirstProject} />


          <Projects {...myFirstProject}
          />


          <Projects {...myFirstProject} />
        </div>
        <Contact />

      </ThemeProvider>
    </>
  )
}

