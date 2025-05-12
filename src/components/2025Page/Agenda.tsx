import styled from "styled-components";
import AgendaVector from "../../assets/2025/agenda.svg";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";

function Agenda() {
  const timelineItems = [
    { number: 1, date: "25th March", description: "Registrations starts" },
    { number: 2, date: "4th April", description: "Registrations ends" },
    { number: 3, date: "25th March", description: "Registrations starts" },
    { number: 4, date: "4th April", description: "Registrations ends" },
    { number: 5, date: "25th March", description: "Registrations starts" },
  ];

  return (
    <AgendaContainer>
      <BackgroundVector />
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
        </ContentSection>
      </InnerContainer>
    </AgendaContainer>
  );
}

// Styled components
const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  width: 100%;
  position: relative;
  min-height: 100vh;
  font-family: "Satoshi", sans-serif;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 5rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 3rem 2rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 1.5rem 1rem;
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
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  color: white;
  line-height: 1.2;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h3`
  font-size: 40px;
  font-weight: 500;
  font-style: italic;
  color: #fb4dd8;
  margin: 0;
  line-height: 1.2;
  font-family: serif;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const DownloadButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 10px 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 48px;
  width: 191px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  /* margin: 0 0 3rem 0; */
  width: 100%;
`;

const ContentSection = styled.div`
  display: flex;
  position: relative;
  min-height: 70vh;
  z-index: 3;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    min-height: auto;
  }
`;

const TimelineContainer = styled.div`
  flex: 1;
  position: relative;
  z-index: 4;

  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 100%;
    background: rgba(10, 10, 10, 0.9);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 3.5rem;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 2.5rem;
  }
`;
const BackgroundVector = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 40%;
  height: 100%;
  background-image: url(${AgendaVector});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.8;

  /* Hide on tablet and mobile devices */
  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const NumberCircle = styled.div`
  width: 88px;
  height: 87px;
  border-radius: 50%;
  background: linear-gradient(216.94deg, #2850b6 13.55%, #0d1929 86.55%);
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
  flex-shrink: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 72px;
    height: 71px;
    font-size: 30px;
    margin-right: 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    width: 60px;
    height: 59px;
    font-size: 26px;
    margin-right: 1rem;
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 87px;
  left: 44px;
  width: 2px;
  height: calc(100% - 87px + 3.5rem);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    top: 71px;
    left: 36px;
    height: calc(100% - 71px + 2.5rem);
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    top: 59px;
    left: 30px;
    height: calc(100% - 59px + 2.5rem);
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-top: 0.5rem;
  }
`;

const ItemDate = styled.h3`
  font-size: 24px;
  color: white;
  line-height: 1;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.2;
`;

export default Agenda;
