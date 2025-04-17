import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import image1 from "../../assets/2025/image1.svg";
import image2 from "../../assets/2025/image2.svg";
import image3 from "../../assets/2025/image3.svg";
import image4 from "../../assets/2025/image4.svg";
import image5 from "../../assets/2025/image5.svg";
import image6 from "../../assets/2025/image6.svg";

function Highlights() {
  // Image data with placeholder images
  const highlightImages = [
    {
      id: 1,
      src: image1,
      alt: "Speaker presenting to audience at conference",
    },
    {
      id: 2,
      src: image2,
      alt: "Panel discussion with industry experts",
    },
    {
      id: 3,
      src: image3,
      alt: "Award ceremony at technology conference",
    },
    {
      id: 4,
      src: image4,
      alt: "Speaker at compiler technology workshop",
    },
    {
      id: 5,
      src: image5,
      alt: "Inauguration ceremony with traditional lamp lighting",
    },
    {
      id: 6,
      src: image6,
      alt: "Keynote presentation on compiler advancements",
    },
  ];

  return (
    <HighlightsContainer>
      <ContentWrapper>
        <HeaderSection>
          <TitleWrapper>
            <Title>Highlights from Last Year</Title>
            <Subtitle>A Look Back</Subtitle>
          </TitleWrapper>
          <ButtonWrapper>
            <VisitButton>Visit website</VisitButton>
          </ButtonWrapper>
        </HeaderSection>

        <ImageGrid>
          {highlightImages.map((image) => (
            <ImageCard key={image.id}>
              <Image src={image.src} alt={image.alt} />
            </ImageCard>
          ))}
        </ImageGrid>

        <ViewMoreButtonWrapper>
          <ViewMoreButton>View More</ViewMoreButton>
        </ViewMoreButtonWrapper>
      </ContentWrapper>

      {/* Decorative elements */}
      <PurpleCircle />
      <GoldCircle />
    </HighlightsContainer>
  );
}

export default Highlights;

// Styled Components
const HighlightsContainer = styled.div`
  background-color: #000;
  color: white;
  padding: 6rem;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 100%;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    justify-content: flex-end;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 2rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  line-height: 1.2;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  margin: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    text-align: center;
    width: 100%;
    margin: 12px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
`;

const Subtitle = styled.span`
  color: #d83bd2;
  line-height: 1.2;
  font-family: Spectral;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0%;
  margin: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
`;

const VisitButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
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

const ImageGrid = styled.div`
  max-width: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  border-radius: 8px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

const ImageCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: auto;
  aspect-ratio: 16/9;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    aspect-ratio: 4/3;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    aspect-ratio: 16/9;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ViewMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-top: 2rem;
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

const ViewMoreButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 110px;
  height: 48px;
  border-width: 1px;
  border-radius: 8px;
  padding-top: 10px;
  padding-right: 12px;
  padding-bottom: 10px;
  padding-left: 12px;
  gap: 12px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    align-self: center;
  }
`;

// Keeping the exact same decorative elements
const PurpleCircle = styled.div`
  position: absolute;
  width: 249px;
  height: 248px;
  top: 706px;
  left: 40px;
  transform: translate(-50%, 50%);

  background: radial-gradient(
    circle,
    #af459a 0%,
    rgba(73, 29, 64, 0.5) 50%,
    rgba(73, 29, 64, 0) 0%
  );
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    top: 800px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 200px;
    height: 200px;
    top: 1000px;
    left: 20px;
  }
`;

const GoldCircle = styled.div`
  position: absolute;
  top: 177px;
  right: -20px;
  width: 163px;
  height: 161px;
  background: linear-gradient(
    219.17deg,
    rgba(244, 210, 103, 0) 24.33%,
    #f4d267 60%
  );
  transform: rotate(180deg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 100%;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 140px;
    height: 140px;
    top: 120px;
  }
`;
