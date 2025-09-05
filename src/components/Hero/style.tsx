import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 8% 2rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .typed {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 280px;
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.primary};
  }
`;