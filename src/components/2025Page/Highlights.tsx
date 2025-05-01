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
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
    width: 100%;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3.5rem;
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h2`
  line-height: 1.2;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  text-align: left;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    text-align: center;
    margin: 0;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const Subtitle = styled.span`
  color: #d83bd2;
  line-height: 1.2;
  font-family: Spectral;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  margin: 0;
  text-align: left;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const VisitButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 10px 12px;
  gap: 12px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 416px);
  grid-template-rows: repeat(2, 350px);
  gap: 32px;
  justify-content: center;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: repeat(2, 280px);
    gap: 20px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 380px);
    grid-template-rows: repeat(3, 320px);
    gap: 30px;
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 320px);
    grid-template-rows: repeat(3, 270px);
  }

  @media (max-width: 700px) {
    grid-template-columns: 342px;
    grid-template-rows: repeat(6, 350px);
    gap: 30px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    grid-template-columns: 100%;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
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
  padding: 10px 12px;
  gap: 12px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Decorative elements
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
    visibility: hidden;
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
  top: 170px;
  right: -20px;
  width: 200px;
  height: 200px;
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 140px;
    height: 140px;
    top: 120px;
    visibility: hidden;
  }
`;
