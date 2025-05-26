import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import image1 from "../../assets/highlights/1.webp";
import image2 from "../../assets/highlights/2.webp";
import image3 from "../../assets/highlights/3.webp";
import image4 from "../../assets/highlights/4.webp";
import image5 from "../../assets/highlights/5.webp";
import image6 from "../../assets/highlights/6.webp";
import image7 from "../../assets/highlights/7.webp";
import image8 from "../../assets/highlights/8.webp";
import image9 from "../../assets/highlights/9.webp";
import Slider, { Settings } from "react-slick";

const highlightImages = [
  {
    id: 1,
    src: image1,
    alt: "Highlight 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Highlight 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Highlight 3",
  },
  {
    id: 4,
    src: image4,
    alt: "Highlight 4",
  },
  {
    id: 5,
    src: image5,
    alt: "Highlight 5",
  },
  {
    id: 6,
    src: image6,
    alt: "Highlight 6",
  },
  {
    id: 7,
    src: image7,
    alt: "Highlight 7",
  },
  {
    id: 8,
    src: image8,
    alt: "Highlight 8",
  },
  {
    id: 9,
    src: image9,
    alt: "Highlight 9",
  },
];

const stats = [
  { number: "5", description: "Key notes" },
  { number: "19", description: "Presentations" },
  { number: "4", description: "Woman presenters" },
  { number: "200", description: "Attendees" },
  { number: "4", description: "Partners and sponsors" },
];
function Highlights() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: "anticipated",
    responsive: [
      {
        breakpoint: Number(TABLET_BREAKPOINT.slice(0, 4)),
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: Number(MOBILE_BREAKPOINT.slice(0, 3)),
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <DotsWrapper>
        <ul>{dots}</ul>
      </DotsWrapper>
    ),
  };

  return (
    <HighlightsContainer id="past-highlights">
      <ContentWrapper>
        <HeaderSection>
          <TitleWrapper>
            <Title>Highlights from Last Year</Title>
            <Subtitle>A Look Back</Subtitle>
          </TitleWrapper>
          <ButtonWrapper>
            <VisitButton onClick={() => window.open("/2024", "_blank")}>
              Visit website
            </VisitButton>
          </ButtonWrapper>
        </HeaderSection>

        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            style={{ borderRadius: "8px", width: "100%", height: "100%" }}
            src="https://www.youtube.com/embed/llQB1dX3dIQ"
            title="Highlights Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <StatsSection id="stats" style={{ marginBottom: "80px" }}>
          <StatsHeader>
            Our stats <StatsLine />
          </StatsHeader>

          <HighlightsDescription>
            The event consisted of talks given by invited keynote speakers and a
            selected set of presenters with topics ranging from Frontend (MLIR,
            Rust, JVM) to the Backend (R.A) as well as applications of Compiler
            technology. It was attended by 114 professionals and 93 students,
            including 175 male attendees and 32 female attendees.
          </HighlightsDescription>
          <StatsList>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatDescription>{stat.description}</StatDescription>
              </StatItem>
            ))}
          </StatsList>
        </StatsSection>
        <CarouselWrapper>
          <Slider {...settings}>
            {highlightImages.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </CarouselWrapper>
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

const HighlightsDescription = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  text-align: justify;
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
  font-family: "Satoshi", sans-serif;
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
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  margin: 0;
  margin-top: 10px;
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
const CarouselWrapper = styled.div`
  .slick-slider {
    border-radius: 8px;
    overflow: hidden;
  }
  .slick-slide {
    border-radius: 8px;
    overflow: hidden;
    img {
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .slick-dots {
    li button:before {
      font-size: 10px;
      color: white;
    }
    li.slick-active button:before {
      color: #fb4dd8;
    }
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    padding: 0;
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

// Decorative elements
const PurpleCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  top: 650px;
  left: 30px;
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
  top: 150px;
  right: -30px;
  width: 300px;
  height: 250px;
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
