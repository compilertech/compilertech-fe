import React from "react";
import styled from "styled-components";
import AgendaVector from "../../assets/2025/agenda2.svg";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

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
      <InnerContainer>
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

          <VectorSection />
        </ContentSection>
      </InnerContainer>
    </AgendaContainer>
  );
}

const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  width: 100%;
  position: relative;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem 1.5rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  color: white;
  line-height: 1.2;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h3`
  font-size: 40px;
  font-weight: 500;
  font-style: italic;
  color: #fb4dd8;
  margin: 0;
  line-height: 1.2;
  font-family: "Spectral", serif;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 32px;
  }
`;

const DownloadButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 0 3rem 0;
  width: 100%;
`;

const ContentSection = styled.div`
  display: flex;
  position: relative;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
  }
`;

const TimelineContainer = styled.div`
  flex: 0.5;
  position: relative;
  z-index: 2;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 3.5rem;

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
  font-size: 36px;
  font-weight: bold;
  z-index: 2;
  position: relative;
  box-shadow: 0 0 20px rgba(30, 58, 138, 0.5);
  margin-right: 2rem;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 70px;
  left: 35px;
  width: 2px;
  height: calc(100% + 15px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemDate = styled.h3`
  font-size: 36px;
  font-weight: 400;
  margin: 0 0 0.2rem 0;
  color: white;
  line-height: 1.2;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const ItemDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const VectorSection = styled.div`
  flex: 1.5;
  height: 700px;
  background-image: url(${AgendaVector});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

export default Agenda2;
