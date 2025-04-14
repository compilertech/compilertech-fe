import styled from "styled-components";
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
          <VisitButton>Visit website</VisitButton>
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
  background-color: #0a0a0a;
  color: white;
  padding: 4rem;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  color: #d83bd2;
  font-style: italic;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const VisitButton = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ImageGrid = styled.div`
  max-width: full;
  align-items: center;
  justify-content: center;
  background-color: pink;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 350px;
  width: 416px;

  @media (max-width: 768px) {
    height: 200px;
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
`;

const ViewMoreButton = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 100px;
  color: white;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Decorative elements
const PurpleCircle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: #9c27b0;
  border-top-right-radius: 200px;
  border-radius: 0;
  opacity: 0.5;
  z-index: 1;
`;

const GoldCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background-color: #d4af37;
  border-bottom-left-radius: 250px;
  border-radius: 0;
  opacity: 0.5;
  z-index: 1;
`;
