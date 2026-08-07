import styled from "styled-components";
import { Section } from "../../styles/global";

export const ServicesContainer = styled(Section)``;

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.2rem;
`;

export const CardIndex = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: 1;
  margin-bottom: 1.25rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
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
