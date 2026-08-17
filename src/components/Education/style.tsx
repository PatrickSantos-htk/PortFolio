import styled from "styled-components";
import { Section } from "../../styles/global";

export const EducationContainer = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const Column = styled.div``;

export const ColumnTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.25rem;
`;

export const DegreeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const Degree = styled.div`
  padding: 1rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card};
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const DegreeName = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.35rem;
`;

export const DegreePeriod = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.6rem;
`;

export const StatusBadge = styled.span<{ concluded?: boolean }>`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  color: ${({ theme, concluded }) => (concluded ? theme.colors.secondary : theme.colors.primary)};
  border: 1px solid ${({ theme, concluded }) => (concluded ? theme.colors.secondary : theme.colors.primary)};
`;

export const CourseGroup = styled.div`
  margin-bottom: 1.4rem;
`;

export const CourseGroupTitle = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.6rem;
`;

export const CourseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CourseTag = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.35rem 0.7rem;
  border-radius: 5px;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Language = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;
