import styled from 'styled-components';

export const TimelineContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  background: transparent;

  h2 {
    margin-bottom: 32px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary || '#333'};
    text-align: center;
  }
`;

export const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 40px;
  max-width: 600px;
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary || '#333'};
    border-radius: 2px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 12px;
  top: 0;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.background || '#222'};
  border: 3px solid ${({ theme }) => theme.colors.primary || '#333'};
  border-radius: 50%;
  z-index: 1;
`;

export const TimelineContent = styled.div`
  background: #fff;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.07);
  margin-left: 40px;
  min-width: 250px;
  max-width: 400px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 8px 24px rgba(0,0,0,0.13);
  }
`;

export const TimelineDate = styled.span`
  font-size: 0.95em;
  color: ${({ theme }) => theme.colors.primary || '#333'};
  font-weight: bold;
  display: block;
`;

export const TimelineTitle = styled.h3`
  margin: 8px 0 4px 0;
  color: ${({ theme }) => theme.colors.primary || '#00c3ff'};
  font-size: 1.2em;
`;

export const TimelineCompany = styled.span`
  font-size: 0.95em;
  color: #666;
  display: block;
  margin-bottom: 8px;
`;

export const TimelineDescription = styled.p`
  font-size: 0.95em;
  color: #444;
  margin: 0;
`;
