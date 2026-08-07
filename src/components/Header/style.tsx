import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    padding: 1rem 6%;
  }
`;

export const Logo = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Cursor = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.75rem;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 480px) {
    display: none;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
  }
`;
