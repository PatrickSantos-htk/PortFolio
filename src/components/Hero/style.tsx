import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 8rem 8% 4rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 7rem 6% 3rem;
    gap: 2.5rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 620px;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin: 0.5rem 0 0.75rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .typed {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Eyebrow = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Meta = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 900px) {
    justify-content: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  padding: 0.85rem 1.6rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.primary}44;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Right = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const TerminalWindow = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.7rem 0.9rem;
  background: #1a1a1a;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TerminalDot = styled.span<{ color: string }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const TerminalLabel = styled.span`
  margin-left: 0.4rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.05);
`;

export const PhotoCaption = styled.div`
  padding: 0.7rem 0.9rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
