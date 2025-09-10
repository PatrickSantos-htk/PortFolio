import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
