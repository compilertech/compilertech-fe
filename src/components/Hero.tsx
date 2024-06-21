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
            <img
              src="https://images.unsplash.com/photo-1718659107049-af60bebaacf0"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1718657532611-e1fbcf73d776"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1718294330460-7f6355d3895a"
              alt="Slide 1"
            />
          </div>
        </Slider>
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
      filter: brightness(50%);
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 20px; // Adjust this value to position the dots vertically within the carousel
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 5px;
    }
    li button:before {
      font-size: 12px;
      color: white; // Change the dot color for better visibility
    }
    li.slick-active button:before {
      color: white; // Change the active dot color for better visibility
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
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px; // Adjust this value to position the dots vertically within the carousel
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Hero;
