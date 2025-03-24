import React from "react";
import styled from "styled-components";

function Agenda2() {
  const timelineItems = [
    { number: 1, date: "25th March", description: "Registrations starts" },
    { number: 2, date: "4th April", description: "Registrations ends" },
    { number: 3, date: "25th March", description: "Registrations starts" },
    { number: 4, date: "4th April", description: "Registrations ends" },
    { number: 5, date: "25th March", description: "Registrations starts" },
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

      <ContentSection>
        <TimelineContainer>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <NumberCircle>{item.number}</NumberCircle>
              <ItemContent>
                <ItemDate>{item.date}</ItemDate>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemContent>
              {index !== timelineItems.length - 1 && <VerticalLine />}
            </TimelineItem>
          ))}
        </TimelineContainer>

        <GraphicsContainer>
          <BlueCircle />
          <PurpleCircle />
          <BlackSquare />
          <LargeBlueCircle />
          <GoldSemicircle />
          <PurpleSemicircleBottom />
        </GraphicsContainer>
      </ContentSection>
    </AgendaContainer>
  );
}

export default Agenda2;

// Styled Components
const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  padding: 4rem 5rem;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
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
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  color: #d83bd2;
  font-style: italic;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DownloadButton = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1.5rem 0 3rem 0;
`;

const ContentSection = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineContainer = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NumberCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #1a3c80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  z-index: 2;
  position: relative;
  box-shadow: 0 0 20px rgba(26, 60, 128, 0.3);
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 70px;
  left: 35px;
  width: 1px;
  height: calc(100% + 15px);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

const ItemContent = styled.div`
  margin-left: 1.5rem;
  padding-top: 0.7rem;
`;

const ItemDate = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 0.3rem 0;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const GraphicsContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Decorative elements
const BlueCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background-color: #1a3c80;
  border-radius: 50%;
  opacity: 0.9;
  z-index: 1;
`;

const PurpleCircle = styled.div`
  position: absolute;
  top: 0;
  left: 100px;
  width: 300px;
  height: 300px;
  background-color: #9c27b0;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 2;
`;

const BlackSquare = styled.div`
  position: absolute;
  top: 100px;
  left: 150px;
  width: 100px;
  height: 100px;
  background-color: #0a0a0a;
  z-index: 3;
`;

const LargeBlueCircle = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 300px;
  height: 300px;
  background-color: #1a3c80;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;
`;

const GoldSemicircle = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  width: 300px;
  height: 300px;
  background-color: #d4af37;
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  opacity: 0.8;
  z-index: 2;
`;

const PurpleSemicircleBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 200px;
  width: 300px;
  height: 300px;
  background-color: #9c27b0;
  border-top-left-radius: 300px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  opacity: 0.8;
  z-index: 1;
`;
