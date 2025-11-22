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
  padding-top: 40px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary || '#00c3ff'}, ${({ theme }) => theme.colors.background || '#0d0d0d'} 80%);
    border-radius: 4px;
    transform: translateY(-50%);
    z-index: 0;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 60px;
  z-index: 1;
`;

export const TimelineDot = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.primary || '#00c3ff'};
  border: 4px solid #fff;
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.primary || '#00c3ff'}44;
  border-radius: 50%;
  z-index: 2;
  transition: box-shadow 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 32px ${({ theme }) => theme.colors.primary || '#00c3ff'}99;
  }
  &:hover .timeline-tooltip {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const TimelineContent = styled.div`
  background: #fff;
  padding: 18px 22px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.07);
  margin-top: 18px;
  min-width: 220px;
  max-width: 320px;
  transition: box-shadow 0.3s;
  position: relative;
  text-align: center;
  &:hover {
    box-shadow: 0px 8px 24px rgba(0,0,0,0.13);
  }

  &:hover .timeline-tooltip,
  .timeline-tooltip:hover {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const TimelineTooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  min-width: 220px;
  max-width: 320px;
  background: ${({ theme }) => theme.colors.primary || '#00c3ff'};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 0.98em;
  box-shadow: 0px 8px 24px rgba(0,0,0,0.18);
  z-index: 10;
  transition: opacity 1s cubic-bezier(.4,0,.2,1), visibility 1s, transform 1s cubic-bezier(.4,0,.2,1);
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.main || 'sans-serif'};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary || '#00c3ff'} transparent transparent transparent;
  }

  /* Estado visível */
  &.visible {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) scale(1);
  }
`
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
