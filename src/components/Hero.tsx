import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../styles/GlobalStyle";
import { LuCalendarRange } from "react-icons/lu";
import { TiLocationArrow } from "react-icons/ti";
import { Button } from "./shared/Button";
import RegisterModal from "./shared/RegisterModal";

const Hero: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode) => (
      <DotsWrapper>
        <ul>{dots}</ul>
      </DotsWrapper>
    ),
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCallForProposalClick = useCallback(() => {
    window.open("https://easychair.org/conferences/?conf=compilertech2024");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledSection id="hero">
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <img src="./carousel_1.webp" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_2.webp" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_3.webp" alt="Slide 1" />
          </div>
        </Slider>
        <CarouselOverlay>
          <div>
            <img className="hero-text-img" src="./title.png" />
          </div>
          <div>
            <img src="./dsce-logo.webp" style={{ width: "80px" }} />
            <h1>
              <LuCalendarRange
                fill="#a93d9d"
                stroke="white"
                strokeWidth="1.7px"
              />
              <a
                href="http://www.google.com/calendar/event?action=TEMPLATE&text=Innovations%20in%20Compiler%20Technology%20Workshop&dates=20240928T033000Z/20240929T113000Z&details=The%20First%20Innovations%20In%20Compiler%20Technology%20%28IICT%29%20Workshop%20will%20be%20held%20at%20%20Dayananda%20Sagar%20College%20of%20Engineering%2C%20Bangalore%2C%20India%28compilertech.org%29.%20The%20two-day%20workshop%20will%20be%20in-person&location=Dayananda%20Sagar%20College%20of%20Engineering%2C%20Bangalore%2C%20India"
                target="_blank"
              >
                28th &amp; 29th September, 9AM-5PM
              </a>
            </h1>
            <h3>
              <TiLocationArrow
                fill="#a93d9d"
                stroke="white"
                strokeWidth="2px"
              />
              <a
                href="https://maps.app.goo.gl/d56iTonrNccb24uE6"
                target="_blank"
              >
                Dayananda Sagar College of Engineering, BANGALORE
              </a>
            </h3>
            <ButtonContainer>
              <StyledButton onClick={handleCallForProposalClick}>
                CALL FOR PROPOSALS
              </StyledButton>
              <StyledButton onClick={toggleModal}>REGISTER NOW</StyledButton>
            </ButtonContainer>
          </div>
        </CarouselOverlay>
      </CarouselWrapper>
      {width <= 786 && (
        <RegisterModal onClose={toggleModal} hidden={!isModalOpen} />
      )}
    </StyledSection>
  );
};

const ButtonContainer = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    margin-top: 4px;
    justify-content: center;
  }
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    gap: 8px;
    margin-top: 8px;
  }
`;

const StyledButton = styled(Button)`
  color: white !important;
  display: flex;
  justify-content: center;
  gap: 5px;
  flex: 1;
  max-width: 220px;
  text-wrap: nowrap;
  font-size: 20px;
  padding: 6px 10px !important;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 200px;
    padding: 4px 6px !important;
    font-size: 18px;
  }
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 16px;
    padding: 3px 6px !important;
  }
`;

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 60vh;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;

  .slick-slider {
    height: 100%;
  }

  .slick-slide {
    max-height: 60vh;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(40%);
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 5px;
    }
    li button:before {
      font-size: 12px;
      color: #eae9e9;
    }
    li.slick-active button:before {
      color: white;
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

const CarouselOverlay = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 40%;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Bebas Neue";
  font-size: clamp(32px, 5vw, 48px);
  letter-spacing: 2px;
  text-align: center;
  .hero-text-img {
    width: 600px;
    height: auto;
  }
  h3 {
    font-size: 24px;
    display: flex;
    justify-content: center;
    gap: 0px;
    color: white;
    margin-top: -3px;
  }
  h1 {
    font-size: 36px;
    display: flex;
    justify-content: center;
    gap: 5px;
    color: white;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: 800px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 150px;
    width: 100% !important;
    justify-content: end;
    top: unset;
    bottom: -16px;
    gap: 48px;
    padding-left: 20px;
    padding-right: 20px;
    .hero-text-img {
      width: 95%;
      max-width: 550px;
    }
    h3 {
      font-size: 14px;
      display: flex;
      justify-content: center;
      gap: 0px;
      color: white;
      svg {
        display: none;
      }
      margin-top: 0px;
    }
    h1 {
      font-size: 20px;
      display: flex;
      justify-content: center;
      gap: 5px;
      color: white;
      svg {
        display: none;
      }
    }
    a:hover {
      text-decoration: none;
    }
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 32px;
    .hero-text-img {
      width: 100%;
      max-width: 550px;
    }
  }
`;

export default Hero;
