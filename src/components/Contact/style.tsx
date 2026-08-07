import styled from "styled-components";
import { Section } from "../../styles/global";

export const ContactContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Intro = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2.5rem;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  transition: border-color 0.2s, color 0.2s;
  flex-wrap: wrap;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  min-width: 130px;
`;

export const Footer = styled.p`
  margin-top: 3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;
