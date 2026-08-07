import styled from "styled-components";
import { Section } from "../../styles/global";

export const ExperienceContainer = styled(Section)``;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Commit = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const CommitLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  .rail {
    flex: 1;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
    margin-top: 0.4rem;
  }
`;

export const CommitHash = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.62rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.primary}33;
  flex-shrink: 0;
`;

export const CommitHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const CommitBranch = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.2rem 0.55rem;
  border-radius: 4px;

  &::before {
    content: "⎇ ";
  }
`;

export const CommitDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CommitRole = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.6rem 0 0.15rem;
`;

export const CommitCompany = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.9rem;
`;

export const Diff = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const DiffLine = styled.li`
  font-size: 0.9rem;
  line-height: 1.6;
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
