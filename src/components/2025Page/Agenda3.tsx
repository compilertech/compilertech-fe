import styled from "styled-components";

function Agenda3() {
  const timelineItems = [
    { number: 1, date: "25th March", description: "Registrations starts" },
    { number: 2, date: "25th March", description: "Registrations starts" },
    { number: 3, date: "25th March", description: "Registrations starts" },
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
        {timelineItems.map((item, index) => (
          <TimelineRow key={index}>
            <NumberCircle>{item.number}</NumberCircle>
            <TimelineCard>
              <CardContent>
                <CardDate>{item.date}</CardDate>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <RegisterButton>Register Now</RegisterButton>
            </TimelineCard>
            {index !== timelineItems.length - 1 && <VerticalLine />}
          </TimelineRow>
        ))}
      </TimelineSection>
    </AgendaContainer>
  );
}

export default Agenda3;

// Styled Components
const AgendaContainer = styled.div`
  background-color: #0a0a0a;
  font-family: "Poppins", sans-serif;
  color: white;
  padding: 4rem 5rem;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden; // Added to contain the vector image

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
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.span`
  font-size: 40px;
  font-family: Spectral;
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
  border: 1px solid white; //dont change
  border-radius: 8px; //dont change
  color: white;
  padding: 0.7rem 1.5rem;

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
  width: 100%;
`;

const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  width: 1083;
  height: 100;
  border-radius: 16px;
`;

const TimelineRow = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NumberCircle = styled.div`
  width: 88px; //dont change
  height: 87px; //dont change
  border-radius: 50%;
  background: linear-gradient(216.94deg, #2850b6 13.55%, #0d1929 86.55%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  z-index: 2;
  position: relative;
  box-shadow: 0 0 20px rgba(26, 60, 128, 0.3);
  margin-right: 2rem;
  flex-shrink: 0;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 70px;
  left: 40px;
  width: 1px;
  height: calc(100% + 15px);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

const TimelineCard = styled.div`
  background-color: rgba(40, 40, 40, 0.9);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const CardDate = styled.h3`
  font-size: 24px; //dont change
  font-weight: 400; //dont change
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RegisterButton = styled.button`
  background: transparent;
  border: 1px solid white; //dont change
  border-radius: 8px; //dont change
  color: white;
  padding: 0.7rem 1.5rem;
  width: 133px; //dont change
  height: 48px; //dont change
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
