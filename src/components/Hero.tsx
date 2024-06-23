import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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

  return (
    <StyledSection>
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <img src="./carousel_1.jpeg" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_2.jpeg" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_3.jpeg" alt="Slide 1" />
          </div>
        </Slider>
        <CarouselOverlay>
          Theme: "Innovations in Compiler Technologies for
          <br /> a Rapidly Evolving Landscape"
        </CarouselOverlay>
      </CarouselWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 60vh;
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

    &::before {
      content: "COMING SOON, BANGALORE!";
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 0.3rem;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: clamp(1rem, 2vw, 4rem);
      line-height: 48px;
      width: 100%;
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
`;

const CarouselOverlay = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Bebas Neue";
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-align: center;
  background-image: linear-gradient(
    135deg,
    white,
    lightblue,
    ${({ theme }) => theme.primary},
    #ff6f00
  );
  background-clip: text;
  background-size: 100%;
  color: transparent;
`;

export default Hero;
