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

          <VectorWrapper>
            <VectorImage
              src={AgendaVector}
              alt="Agenda visual representation"
            />
          </VectorWrapper>
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
  font-family: "Satoshi", sans-serif;
  display: flex;
  justify-content: center;
  padding: 4rem 5rem;
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
  font-size: 36px;
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
  width: 191;
  height: 48;
  border-width: 1px;
  border-radius: 8px;
  padding-top: 10px;
  padding-right: 12px;
  padding-bottom: 10px;
  padding-left: 12px;
  gap: 12px;

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
  min-height: 100vh;
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
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 70px;
  left: 40px;
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
  /* margin: 0 0 0.2rem 0; */
  color: white;
  line-height: 1.2;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 10px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const ItemDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const VectorWrapper = styled.div`
  flex: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2rem; // Adjust this to align with your timeline items
  height: 100%;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const VectorImage = styled.img`
  height: calc(100% - 4rem);
  width: auto;
  object-fit: contain;
  object-position: left center;
  max-width: 100%;
  margin-top: -100px;
  align-self: center;
  transform: translateY(-1rem);

  /* Responsive adjustments */
  @media (min-width: ${TABLET_BREAKPOINT}) and (max-width: 1200px) {
    height: calc(100% - 3.5rem);
    transform: translateY(-0.5rem);
  }

  @media (min-width: 1201px) and (max-width: 1440px) {
    height: calc(100% - 3rem);
  }

  /* Optional: Add smooth scaling */
  transition: height 0.3s ease, transform 0.3s ease;
`;

export default Agenda2;
