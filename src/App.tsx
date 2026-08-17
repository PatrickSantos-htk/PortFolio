import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Contact />
    </ThemeProvider>
  );
}
