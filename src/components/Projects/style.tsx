import styled, { css } from "styled-components";

export const Card = styled.div`
  background: #111;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px  #00c3ff;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffd200;
  margin-bottom: 10px;
 
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  flex: 1;
  margin-bottom: 15px;
`;

export const TechIcons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const TechIcon = styled.div`
  width: 32px;
  height: 32px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.a<{ blue?: boolean; yellow?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.3s;

  ${({ blue }) =>
        blue &&
        css`
      background: transparent;
      border: 1px solid #3b82f6;
      color: #3b82f6;
      &:hover {
        background: #3b82f6;
        color: #000;
      }
    `}

  ${({ yellow }) =>
        yellow &&
        css`
      background: transparent;
      border: 1px solid #ffd200;
      color: #ffd200;
      &:hover {
        background: #ffd200;
        color: #000;
      }
    `}
`;
