import styled from "styled-components";
import { Section } from "../../styles/global";

export const ProjectsContainer = styled(Section)``;

export const Intro = styled.p`
  max-width: 640px;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2.5rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.75rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryFrame = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 16 / 10;
`;

export const Shot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
`;

export const NavButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 0.6rem;" : "right: 0.6rem;")}
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.6);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : "rgba(255, 255, 255, 0.4)")};
  transition: background 0.2s;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.35rem;
`;

export const CardTagline = styled.span`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.1rem;
`;

export const Highlights = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`;

export const HighlightItem = styled.li`
  font-size: 0.85rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-left: 1.1rem;
  position: relative;

  &::before {
    content: "+";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

export const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: auto;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-wrap: wrap;
`;

export const FooterButton = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 0.25rem;
`;

export const SubHeading = styled.h3`
  margin: 3.5rem 0 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: "$ ls ";
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  }
`;

export const SubIntro = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.5rem;
`;

export const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const MiniCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.4rem;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.2s;
    &:hover {
      transform: none;
    }
  }
`;

export const MiniKind = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const MiniTitle = styled.h4`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const MiniDescription = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: 1;
`;
