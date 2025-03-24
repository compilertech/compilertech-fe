import React from "react";
import styled from "styled-components";

function Highlights() {
  // Image data with placeholder images
  const highlightImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
      alt: "Speaker presenting to audience at conference",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop",
      alt: "Panel discussion with industry experts",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2670&auto=format&fit=crop",
      alt: "Award ceremony at technology conference",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2670&auto=format&fit=crop",
      alt: "Speaker at compiler technology workshop",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop",
      alt: "Inauguration ceremony with traditional lamp lighting",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=2670&auto=format&fit=crop",
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

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
  height: 250px;

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
