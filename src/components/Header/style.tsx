import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
`;

export const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Nav = styled.nav`
  display: flex;
  text-decoration: none; 
  gap: 2rem;

  a {
    font-size: 0.9rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
    text-decoration: none; 

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Lang = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    border-radius: 3px;
  }
`;
