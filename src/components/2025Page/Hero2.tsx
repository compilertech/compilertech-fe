import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import vectorImage from "../../assets/2025/vector.svg";
import heroImage from "../../assets/2025/hero.svg";

const heroData = {
  title: "Compiler Technology at",
  subtitle: "Bengaluru, Karnataka",
  description:
    "The IICT (Innovations in Compiler Technology) workshop unites researchers, practitioners, and enthusiasts to explore cutting-edge advancements in compiler design, implementation, and optimization for emerging software.",
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
          <ConferenceImage src={heroImage} alt="Conference hall" />
        </ImageContainer>
      </ContentSection>

      <VectorContainer>
        <ComingSoonBox>Coming soon</ComingSoonBox>
      </VectorContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  width: 100%;
  position: relative;
  font-family: "Poppins", sans-serif;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2rem 4rem;
    flex-direction: column;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding-right: 0;
    align-items: center;
    text-align: center;
  }
`;

const VectorContainer = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${vectorImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const ComingSoonBox = styled.div`
  position: absolute;
  top: 47%;
  right: 65%;
  transform: translate(-50%, -50%);
  width: 237px;
  height: 112px;
  border-radius: 16px;
  border: 0.5px solid #ffffff;
  background: rgba(249, 248, 245, 0.06);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "" Poppins ", sans-serif", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
`;

const TitleContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 70px;
  font-weight: 500;
  font-style: italic;
  /* line-height: 120%; */
  font-family: Spectral;
  color: #fb4dd8;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 2rem;

  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 1.5rem;

  margin-bottom: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
  }
`;

const ConferenceImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export default Hero2;
