import styled from "styled-components";

const TestimonialSection = () => {
  const stats = [
    { number: "20+", description: "Key note Speakers", width: "140px" },
    {
      number: "300+",
      description: "Attendees from various domains",
      width: "140px",
    },
    { number: "50+", description: "Partners and sponsors", width: "100px" },
    { number: "200+", description: "Presenters", width: "100px" },
  ];

  return (
    <Container>
      <TopBorder />

      <TestimonialCard>
        <LeftContent>
          <Title>
            Exploring the Future of
            <HighlightText>Compiler Technology</HighlightText>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
            vivamus mauris elit. Hendrerit a donec platea nulla pretium
            venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
            egestas. Sit eget integer consequat odio fringilla massa sed
            pulvinar dignissim. Faucibus est in tincidunt cras egestas duis dui
            eros. Velit tempus scelerisque facilisis at amet habitant mattis
            aenean. Vitae quisque enim laoreet urna dictum nunc vestibulum.
          </Description>
        </LeftContent>
        <Divider />
        <RightContent>
          <SubscriptionSection>
            <SubscriptionText>
              Subscribe now and stay informed with the latest <br /> updates and
              important announcements
            </SubscriptionText>
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscriptionSection>
        </RightContent>
      </TestimonialCard>

      <StatsSection>
        <StatsHeader>
          Our stats <StatsLine />
        </StatsHeader>
        <StatsList>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatDescription style={{ width: stat.width }}>
                {stat.description}
              </StatDescription>
            </StatItem>
          ))}
        </StatsList>
      </StatsSection>

      {/* Decorative elements */}
      <PurpleCircle />
      <GoldBlueCircle />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background-color: #000;
  color: white;
  padding: 6rem;
  position: relative;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TopBorder = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  position: absolute;
  top: 10px;
  right: -300px;
`;

const TestimonialCard = styled.div`
  background-color: #151515;
  border-radius: 16px;
  padding: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;

const LeftContent = styled.div`
  display: flex;
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

const RightContent = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HighlightText = styled.div`
  font-family: "Spectral", serif;
  color: #fb4dd8;
  font-style: italic;
  font-size: 36px;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #cfcbc4;
  margin: 1.5rem 0;
  width: 100%;
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  width: 50%;
  color: rgba(255, 255, 255, 0.9);
`;

const SubscriptionSection = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

const SubscriptionText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
  padding-right: 1rem;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const SubscribeButton = styled.button`
  width: 107px;
  height: 48px;
  background: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 10px 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 12px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StatsSection = styled.div`
  padding-top: 8rem;
`;

const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const StatsLine = styled.div`
  flex: 1;
  height: 0.5px;
  background-color: #cfcbc4;
  margin-left: 1rem;
`;

const StatsList = styled.div`
  display: flex;
  width: 100%; // Added to ensure full width
  margin-left: 200px; // Changed from 30%
  padding: 2rem 0; // Added some padding

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatItem = styled.div`
  text-align: center;
  min-width: 150px;
  display: flex;
  margin-left: 10%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
`;

const StatNumber = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
`;

const StatDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #cfcbc4;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const PurpleCircle = styled.div`
  position: absolute;
  top: 360px;
  left: -30px;
  width: 163px;
  height: 161px;
  background: radial-gradient(
    circle at top right,
    #fb4dd8 0%,
    rgba(0, 0, 0, 0) 70%
  );
  border-radius: 0;
  opacity: 0.8;
  z-index: 1;
`;

const GoldBlueCircle = styled.div`
  position: absolute;
  top: 50px;
  right: -50px;
  width: 250px;
  height: 250px;
  background: linear-gradient(310.99deg, #fcbf00 16.53%, #367aff 86.21%);
  border-bottom-left-radius: 250px;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;
`;

export default TestimonialSection;
