import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";

const TestimonialSection = () => {
  const stats = [
    { number: "20+", description: "Key note Speakers" },
    { number: "300+", description: "Attendees from various domains" },
    { number: "50+", description: "Partners and sponsors" },
    { number: "200+", description: "Presenters" },
  ];

  return (
    <Container>
      <TopBorder />

      <TestimonialCard>
        <ContentWrapper>
          <LeftContent>
            <Title>
              Exploring the Future of
              <HighlightText>Compiler Technology</HighlightText>
            </Title>
          </LeftContent>

          <RightContent>
            <Description>
              Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
              vivamus mauris elit. Hendrerit a donec platea nulla pretium
              venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
              egestas. Sit eget integer consequat odio fringilla massa sed
              pulvinar dignissim. Faucibus est in tincidunt cras egestas duis
              dui eros. Velit tempus scelerisque facilisis at amet habitant
              mattis aenean. Vitae quisque enim laoreet urna dictum nunc
              vestibulum.
            </Description>
          </RightContent>
        </ContentWrapper>

        <Divider />

        <SubscriptionWrapper>
          <SubscriptionText>
            Subscribe now and stay informed with the latest updates and
            important announcements
          </SubscriptionText>
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscriptionWrapper>
      </TestimonialCard>

      <StatsSection>
        <StatsHeader>
          Our stats <StatsLine />
        </StatsHeader>
        <StatsList>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatDescription>{stat.description}</StatDescription>
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const TopBorder = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  position: absolute;
  top: 10px;
  right: -300px;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    visibility: hidden;
  }
`;

const TestimonialCard = styled.div`
  background-color: #151515;
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem;
    border-radius: 0;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const RightContent = styled.div`
  flex: 1.5;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 20px;
  }
`;

const HighlightText = styled.div`
  font-family: "Spectral", serif;
  color: #fb4dd8;
  font-style: italic;
  font-size: 36px;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 20px;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #cfcbc4;
  margin: 2rem 0;
  width: 100%;
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }
`;

const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const SubscriptionText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }
`;

const SubscribeButton = styled.button`
  width: 140px;
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
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 14px;
    height: 40px;
  }
`;

// Stats Section
const StatsSection = styled.div`
  margin-top: 6rem;
`;

const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    margin-bottom: 1.5rem;
  }
`;

const StatsLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #cfcbc4;
  margin-left: 1rem;
`;

const StatsList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const StatNumber = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 0.5rem 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 40px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 36px;
    margin: 0;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 30px;
  }
`;

const StatDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #cfcbc4;
  margin: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }
`;

/* Decorative elements - kept as instructed */
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    top: 480px;
    left: -40px;

    width: 150px;
    height: 150px;
  }
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 200px;
    height: 200px;
    top: 0;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 150px;
    height: 150px;
    top: 0;
  }
`;

export default TestimonialSection;
