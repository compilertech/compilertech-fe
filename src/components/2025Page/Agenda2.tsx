import React from "react";
import styled from "styled-components";
import AgendaVector from "../../assets/2025/agenda2.svg";

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

        <VectorSection>
          <BackgroundVector src={AgendaVector} alt="Agenda Background" />
        </VectorSection>
      </ContentSection>
    </AgendaContainer>
  );
}

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
  color: white;
`;

const Subtitle = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  color: #d83bd2;
  font-style: italic;
  margin: 0;
  line-height: 1.2;
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
  color: white;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const VectorSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundVector = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default Agenda2;
