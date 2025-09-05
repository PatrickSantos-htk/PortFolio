

import { Header } from './components/Header'
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Hero } from './components/Hero';
import { GlobalStyle } from './styles/global';
export function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  )
}

