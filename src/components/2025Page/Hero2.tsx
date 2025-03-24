import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

// Data object containing all the text content
const heroData = {
  title: "Compiler Technology at",
  subtitle: "Bengaluru, Karnataka",
  description:
    "The IICT (Innovations in Compiler Technology) workshop unites researchers, practitioners, and enthusiasts to explore cutting-edge advancements in compiler design, implementation, and optimization for emerging software.",
  comingSoonText: "Coming soon",
  conferenceImageAlt: "Conference audience in a large auditorium",
};

function Hero2() {
  return (
    <HeroContainer>
      <ContentSection>
        <TitleContainer>
          <Title>{heroData.title}</Title>
          <Subtitle>{heroData.subtitle}</Subtitle>
        </TitleContainer>

        <Description>{heroData.description}</Description>

        <ImageContainer>
          <ConferenceImage
            src="/api/placeholder/800/500"
            alt={heroData.conferenceImageAlt}
          />
        </ImageContainer>
      </ContentSection>

      <GraphicsSection>
        {/* <ComingSoonBox>{heroData.comingSoonText}</ComingSoonBox> */}

        {/* Decorative circles */}
        {/* <YellowCircle1 />
        <YellowCircle2 />
        <YellowCircle3 /> */}
        {/* <PurpleCircle2 />
        <PurpleCircle3 />
        <BlueCircle1 />
        <BlueCircle2 /> */}
        {/* <GradientCircle /> */}

        {/* Main gradient circle container */}
        <CircleContainer />
      </GraphicsSection>
    </HeroContainer>
  );
}

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2rem 4rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  padding-right: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  font-style: italic;
  color: #a93d9d;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 2px solid #4169e1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
  }
`;

const ConferenceImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const GraphicsSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 400px;
    margin-top: 1rem;
  }
`;

// Container for the main gradient circle
const CircleContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(0, -50%);
  width: 800px;
  height: 800px;
  background: linear-gradient(
    214.77deg,
    #953382 14.21%,
    rgba(45, 24, 44, 0) 87.9%
  );
  border-radius: 50%;
  z-index: 2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 300px;
    right: 0;
  }
`;

const ComingSoonBox = styled.div`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem 2.5rem;
  font-size: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(5px);
  color: white;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 2rem;
    padding: 1.2rem 2rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.8rem;
    padding: 1rem 1.8rem;
  }
`;

// Yellow Circles
const YellowCircle1 = styled.div`
  position: absolute;
  top: 10%;
  right: -10%;
  width: 441px;
  height: 438px;
  background-color: #b8a140;
  border-top-right-radius: 100%;
  opacity: 0.8;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 220px;
    height: 220px;
  }
`;

const YellowCircle2 = styled.div`
  position: absolute;
  top: 10%;
  right: 90%;
  width: 153px;
  height: 152px;
  background-color: #b8a140;
  z-index: 3;
  border-bottom-left-radius: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100px;
    height: 100px;
  }
`;

const YellowCircle3 = styled.div`
  position: absolute;
  bottom: 15%;
  right: 40%;
  width: 200px;
  height: 200px;
  background-color: #b8a140;
  border-radius: 50%;
  opacity: 0.8;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 130px;
    height: 130px;
  }
`;

// Purple Circles
const PurpleCircle1 = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(50%, -50%);
  width: 800px;
  height: 800px;
  z-index: 2;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 300px;
    height: 300px;
    right: 50%;
  }
`;

const PurpleCircle2 = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 270px;
  height: 270px;
  background-color: #a93d9d;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
    height: 200px;
    right: 0;
  }
`;

const PurpleCircle3 = styled.div`
  position: absolute;
  bottom: 60%;
  left: 5%;
  width: 180px;
  height: 180px;
  background-color: #a93d9d;
  border-radius: 50%;
  opacity: 0.8;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 120px;
    height: 120px;
  }
`;

// Blue Circles
const BlueCircle1 = styled.div`
  position: absolute;
  top: 40%;
  right: 25%;
  width: 180px;
  height: 180px;
  background-color: #2a4896;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 4;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 120px;
    height: 120px;
  }
`;

const BlueCircle2 = styled.div`
  position: absolute;
  bottom: 5%;
  left: 55%;
  width: 150px;
  height: 150px;
  background-color: #2a4896;
  border-radius: 50%;
  opacity: 0.8;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100px;
    height: 100px;
    left: 40%;
  }
`;

// Gradient Circle (Yellow-Blue)
const GradientCircle = styled.div`
  position: absolute;
  top: 60%;
  left: 20%;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #b8a140 0%, #2a4896 100%);
  border-radius: 50%;
  opacity: 0.8;
  z-index: 2;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 140px;
    height: 140px;
  }
`;

export default Hero2;
