import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  background: transparent;

  h2 {
    margin-bottom: 32px;
    font-size: 2rem;
    color: #333;
    text-align: center;
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ExperienceCard = styled.div`
  background: #fff;
  padding: 20px;
  border-left: 5px solid #333;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ExperienceTitle = styled.h3`
  margin: 5px 0;
  color: #333;
`;

export const ExperienceDate = styled.span`
  font-size: 0.9em;
  color: #666;
  display: block;
`;

export const ExperienceCompany = styled.span`
  font-size: 0.9em;
  color: #666;
  display: block;
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 300px;
  background-color: #222;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 80%;
  left: 50%;
  margin-left: -150px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.9em;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #222 transparent transparent transparent;
  }

  ${ExperienceCard}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
