import React from "react";
import styled from "styled-components";

function Agenda() {
  const timelineItems = [
    { number: 1, date: "25th March", description: "Registrations starts" },
    { number: 2, date: "4th April", description: "Registrations ends" },
    { number: 3, date: "25th March", description: "Registrations starts" },
    { number: 4, date: "4th April", description: "Registrations ends" },
  ];

  return (
    <AgendaContainer>
      <HeaderSection>
        <TitleWrapper>
          <Title>Agenda at a</Title>
          <Subtitle>Glance</Subtitle>
        </TitleWrapper>
        <DownloadButton>Download brochure</DownloadButton>
      </HeaderSection>

      <Divider />

      <TimelineSection>
        <TimelineContent>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <NumberCircle>{item.number}</NumberCircle>
              <TimelineDetails>
                <Date>{item.date}</Date>
                <Description>{item.description}</Description>
              </TimelineDetails>
            </TimelineItem>
          ))}
          <TimelineLine />
        </TimelineContent>

        <GraphicSection>
          <CircleGold />
          <CirclePurple />
          <CircleBlue />
          <BlockDark />
          <CircleBlueBottom />
          <CirclePurpleBottom />
        </GraphicSection>
      </TimelineSection>
    </AgendaContainer>
  );
}

export default Agenda;

// Styled Components
const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  padding: 3rem;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  font-style: italic;
  color: #d83bd2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const DownloadButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50px;
  color: white;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 0 2.5rem 0;
`;

const TimelineSection = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  position: relative;
  padding-right: 2rem;
  z-index: 5;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 30px;
  left: 35px;
  width: 2px;
  height: calc(100% - 60px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NumberCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(30, 58, 138, 0.5);
`;

const TimelineDetails = styled.div`
  padding-top: 0.5rem;
`;

const Date = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const GraphicSection = styled.div`
  flex: 1;
  position: relative;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 200px;
    margin-top: 2rem;
  }
`;

// Decorative elements
const CircleGold = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background-color: #d4af37;
  border-bottom-left-radius: 250px;
  border-radius: 0;
  opacity: 0.8;
`;

const CirclePurple = styled.div`
  position: absolute;
  top: 25%;
  right: 30%;
  width: 200px;
  height: 200px;
  background-color: #9c27b0;
  border-radius: 50%;
  opacity: 0.8;
`;

const CircleBlue = styled.div`
  position: absolute;
  top: 40%;
  right: 50%;
  width: 150px;
  height: 150px;
  background-color: #1e3a8a;
  border-radius: 50%;
  opacity: 0.8;
`;

const BlockDark = styled.div`
  position: absolute;
  top: 30%;
  right: 30%;
  width: 120px;
  height: 120px;
  background-color: #0a0a0a;
  opacity: 0.9;
  z-index: 3;
`;

const CircleBlueBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 40%;
  width: 250px;
  height: 250px;
  background-color: #1e3a8a;
  border-radius: 50%;
  opacity: 0.8;
`;

const CirclePurpleBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 200px;
  height: 200px;
  background-color: #9c27b0;
  border-top-left-radius: 200px;
  border-radius: 0;
  opacity: 0.8;
`;
