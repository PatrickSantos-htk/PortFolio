import { createGlobalStyle, styled } from "styled-components";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundAlt: string;
      card: string;
      border: string;
      text: string;
      textMuted: string;
      primary: string;
      secondary: string;
    };
    fonts: {
      main: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 8px;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 6rem 8% 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 6% 2rem;
  }
`;

export const SectionHeading = styled.h2<{ index: string }>`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2.5rem;

  &::before {
    content: "// ${({ index }) => index}";
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 400;
  }
`;
