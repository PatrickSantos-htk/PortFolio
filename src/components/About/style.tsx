import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: #0a0a0a;
  color: #fff;
  text-align: center;
`;

export const Text = styled.p`
  max-width: 800px;
  font-size: 1.4rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 2rem;
  margin:0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #00c3ff;
  margin: 2rem 0 2rem 0;
  font-weight: bold;
`;

export const Highlight = styled.span`
  color: #00c3ff;
  font-weight: bold;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  cursor: pointer;
`;

export const Tech = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  color: #00c3ff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: #00c3ff;
    color: #000;
    transform: scale(1.05);
  }
`;
