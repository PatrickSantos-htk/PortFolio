import styled from "styled-components";
import { Section } from "../../styles/global";

export const AboutContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Intro = styled.p`
  max-width: 760px;
  font-size: 1.05rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 3rem;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const SkillGroup = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GroupTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Tech = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.55rem 0.9rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
