import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";

const TestimonialSection = () => {
  const stats = [
    { number: "5", description: "Key note Speakers" },
    { number: "200", description: "Attendees from various domains" },
    { number: "4", description: "Partners and sponsors" },
    { number: "20", description: "Presenters" },
  ];

  return (
    <Container>
      <TopBorder />

      <AboutCard id="about">
        <ContentWrapper>
          {/* First part: Left Column */}
          <ColumnLeft>
            <Title>Exploring the Future of</Title>
            <HighlightText>Compiler Technology</HighlightText>
          </ColumnLeft>

          {/* Second part: Right Column */}
          <ColumnRight>
            <Description>
              The IICT (Innovations In Compiler Technology) workshop aims to
              bring together researchers, practitioners, and enthusiasts in the
              field of compiler technologies. This year's theme focuses on the
              cutting-edge advancements in design, implementation, and
              optimization of compiler techniques as well as their applications
              in emerging software and hardware platforms. The workshop consists
              of accepted talks by our esteemed Program Committee along with
              invited talks by experts from both academia and industry. This is
              a novel opportunity to interact and learn from experts and
              enthusiasts from both academia and industry. We invite
              presentation proposals for our upcoming workshop.
            </Description>
          </ColumnRight>
        </ContentWrapper>

        {/* <Divider /> */}

        {/* <SubscriptionWrapper> */}
        {/* First part: Left Column */}
        {/* <ColumnLeft>
            <EmptySpace />
          </ColumnLeft> */}

        {/* Second part: Right Column */}
        {/* <ColumnRight>
            <SubscriptionContent>
              <SubscriptionText>
                Subscribe now and stay informed with the latest updates and
                important announcements
              </SubscriptionText>
              <SubscribeButton>Subscribe</SubscribeButton>
            </SubscriptionContent>
          </ColumnRight>
        </SubscriptionWrapper> */}
      </AboutCard>

      <StatsSection id="stats">
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
  font-family: "Satoshi", sans-serif;
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

const AboutCard = styled.div`
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

const ColumnLeft = styled.div`
  flex: 0 0 370 px; /* Fixed width for the left column */
  margin-right: 43px; /* Space between columns */

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex: 1 1 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  flex: 1;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const EmptySpace = styled.div``;

const Title = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: white;

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
  font-family: serif;
  background: #fb4dd8;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 36px;
  font-weight: 500;
  margin-top: 0.5rem;
  display: block;

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
  margin: 1.5rem 0;
  width: 100%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin: 1.25rem 0;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 1rem 0;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
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
  width: 100%;
  margin-top: -0.2rem;
  padding-top: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    margin-top: -0.15rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: -0.1rem;
  }
`;

const SubscriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

const SubscriptionText = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
  margin-right: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
    margin-right: 0;
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
    margin-bottom: 0;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }
`;

const SubscribeButton = styled.button`
  height: 48px;
  background: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 10px 12px;
  font-family: "Satoshi", sans-serif;
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
  position: relative;
  z-index: 5;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-top: 4rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Satoshi", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 2rem;
  position: relative;
  z-index: 5;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 5;
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
  position: relative;
  z-index: 5;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 5;
  }
`;

const StatItem = styled.div`
  text-align: center;
  position: relative;
  z-index: 5;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    z-index: 5;
  }
`;

const StatNumber = styled.h2`
  font-family: "Satoshi", sans-serif;
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
  font-family: "Satoshi", sans-serif;
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

/* Decorative elements */
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    top: 480px;
    left: -40px;
    width: 150px;
    height: 150px;
    visibility: hidden;
    z-index: 1;
  }
`;

const GoldBlueCircle = styled.div`
  position: absolute;
  top: 50px;
  right: -50px;
  width: 250px;
  height: 250px;
  background: linear-gradient(180.99deg, #fcbf00 16.53%, #367aff 86.21%);
  border-bottom-left-radius: 250px;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 200px;
    height: 200px;
    top: 0;
    z-index: 1;
    visibility: hidden;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 150px;
    height: 150px;
    top: 0;
    z-index: 1;
  }
`;

export default TestimonialSection;
