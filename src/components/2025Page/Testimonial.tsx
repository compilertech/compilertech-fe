import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";

const TestimonialSection = () => {
  return (
    <Container>
      <TopBorder />

      <AboutCard id="about">
        <ContentWrapper>
          {/* First part: Left Column */}
          <ColumnLeft>
            <Title>Vision of IICT</Title>
            <HighlightText>
              Exploring the Future of Compiler Technology
            </HighlightText>
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
      </AboutCard>

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
  flex: 0 0 370px; /* Fixed width for the left column */
  margin-right: 32px; /* Space between columns */

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

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;

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
