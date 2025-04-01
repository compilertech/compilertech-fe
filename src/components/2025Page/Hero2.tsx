import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import vectorImage from "../../assets/2025/vector.svg";
// import heroImage from "../../assets/2025/hero.svg";
import { IoMdArrowForward } from "react-icons/io";
import img1 from "../../assets/2025/img1.svg";
import img2 from "../../assets/2025/img2.svg";
import img3 from "../../assets/2025/img3.svg";
import img4 from "../../assets/2025/img4.png";

// Data object containing all the text content
const heroData = {
  title: "Innovations in compiler technology 2025",
  subtitle: "workshop at Bengaluru",
  description:
    "The IICT 2025 (Innovations in Compiler Technology) workshop unites researchers, practitioners, and enthusiasts to explore cutting-edge advancements in compiler design, implementation, and optimization for emerging software.",
  emailPlaceholder: "Enter your email ID for updates",
  forMoreUpdates: "For more updates",
  comingSoon: "Coming soon",
  previousYearCta: "Previous Year CTA →",
};

function Hero2() {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  const goToSlide = useCallback((index: any) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <HeroContainer>
      <ContentSection>
        <TitleContainer>
          <Title>{heroData.title}</Title>
          <Subtitle>{heroData.subtitle}</Subtitle>
        </TitleContainer>

        <Description>{heroData.description}</Description>

        <ForMoreUpdates>{heroData.forMoreUpdates}</ForMoreUpdates>

        <EmailSubscriptionContainer>
          <EmailInput placeholder={heroData.emailPlaceholder} />
          <SubmitButton>
            <IoMdArrowForward size={24} />
          </SubmitButton>
        </EmailSubscriptionContainer>

        {/* Carousel */}
        <CarouselContainer>
          <Slide
            src={images[currentIndex]}
            alt={`Conference slide ${currentIndex + 1}`}
          />
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotsContainer>
        </CarouselContainer>

        <ComingSoonTextMobile>{heroData.comingSoon}</ComingSoonTextMobile>
      </ContentSection>

      <VectorContainer>
        <ComingSoonBox>
          <ComingSoonText>{heroData.comingSoon}</ComingSoonText>
        </ComingSoonBox>
      </VectorContainer>
    </HeroContainer>
  );
}

// Carousel components
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  height: 400px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 90%;
    height: 300px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    height: 250px;
    border-radius: 1rem;
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
  z-index: 10;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    bottom: 8px;
  }
`;

// Using "as" syntax for TypeScript compatibility
interface DotProps {
  $active: boolean;
}

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) =>
    props.$active ? "#a93d9d" : "rgba(169, 61, 157, 0.3)"};
  transition: background 0.3s ease;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
`;

// New components for the updated design
const ForMoreUpdates = styled.p`
  margin-bottom: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

const EmailSubscriptionContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  max-width: 500px;
  gap: 1rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  border: 1px solid white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px 12px;
    border-radius: 6px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ExternalLink = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.9rem;
    margin-top: 0.75rem;
  }
`;

const ComingSoonTextMobile = styled.div`
  display: none;
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`;

// Existing styled components
const HeroContainer = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 2rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2rem;
    flex-direction: column;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
    min-height: 100vh;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0;
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

const TitleContainer = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 70px;
  font-weight: 500;
  font-style: italic;
  font-family: Spectral;
  color: #fb4dd8;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }
`;

const ComingSoonBox = styled.div`
  position: absolute;
  width: 237px;
  height: 112px;
  border-radius: 16px;
  border: 0.5px solid #ffffff;
  background: rgba(249, 248, 245, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  /* Default positioning */
  top: 47%;
  right: 20vw;
  transform: translate(-50%, -50%);

  /* Specific adjustment for 1350-1435px screens */
  @media (min-width: 1350px) and (max-width: 1435px) {
    right: 10vw;
    top: 50%;
  }

  /* Adjust for very large screens */
  @media (min-width: 1920px) {
    right: 15vw;
  }

  /* Hide on tablet and mobile */
  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const ComingSoonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
`;

export default Hero2;
