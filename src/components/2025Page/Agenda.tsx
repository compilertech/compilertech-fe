import React from "react";
import styled from "styled-components";
import AgendaVector from "../../assets/2025/agenda.svg";

function Agenda() {
  const timelineItems = [
    {
      number: 1,
      date: "25th March",
      description: "Registrations starts",
    },
    {
      number: 2,
      date: "4th April",
      description: "Registrations ends",
    },
    {
      number: 3,
      date: "25th March",
      description: "Registrations starts",
    },
    {
      number: 4,
      date: "4th April",
      description: "Registrations ends",
    },
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
        <TimelineContent>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <NumberCircle>{item.number}</NumberCircle>
              <TimelineDetails>
                <DateContainer>
                  <Date>{item.date}</Date>
                  <Description>{item.description}</Description>
                </DateContainer>
              </TimelineDetails>
            </TimelineItem>
          ))}
          <TimelineLine />
        </TimelineContent>

        <VectorSection>
          <BackgroundVector src={AgendaVector} alt="Agenda Background" />
        </VectorSection>
      </ContentSection>
    </AgendaContainer>
  );
}

// const Tag = styled.div`
//   background-color: rgba(30, 58, 138, 0.5);
//   color: #4169e1;
//   font-size: 12px;
//   padding: 2px 4px;
//   border-radius: 4px;
//   margin-left: 10px;
// `;

// ... (rest of the previous styled components remain the same)

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  /* gap: 30px; */
`;

const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  padding: 3rem;
  width: 100%;
  position: relative;
  min-height: 100vh;
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
  font-size: 2.2rem;
  font-weight: 400;
  margin: 0;
  color: white;
`;

const Subtitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  font-style: italic;
  color: #d83bd2;
  margin: 0;
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

const ContentSection = styled.div`
  display: flex;
  align-items: center;
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
  align-items: center;
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
  color: white;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 60px;
`;

const VectorSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundVector = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default Agenda;
