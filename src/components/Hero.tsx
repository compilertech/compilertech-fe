import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";
import { LuCalendarRange } from "react-icons/lu";
import { TiLocationArrow } from "react-icons/ti";

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

  let isFirefoxBrowser: boolean;
  try {
    // @ts-ignore
    isFirefoxBrowser = typeof InstallTrigger === "object";
  } catch {
    isFirefoxBrowser = false;
  }

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
          {!isFirefoxBrowser ? (
            <h4>
              <q>
                Innovations in Compiler Technologies for a Rapidly Evolving
                Landscape
              </q>
            </h4>
          ) : (
            <img className="hero-text-img" src="./hero_image.svg" />
          )}
          <div>
            <h3>
              <LuCalendarRange
                fill="#a93d9d"
                stroke="white"
                strokeWidth="1.7px"
              />
              <a
                href="http://www.google.com/calendar/event?action=TEMPLATE&text=Innovations%20in%20Compiler%20Technology%20Workshop&dates=20240928T033000Z/20240929T113000Z&details=IICT%20%28Innovation%20In%20Compiler%20Technology%29%20aimed%20at%20propagating%20the%20innovations%20in%20compiler%20field%20invites%20researchers%2C%20practitioners%2C%20and%20enthusiasts%20in%20the%20field%20of%20compiler%20technologies%20to%20submit%20presentation%20proposals%20for%20our%20upcoming%20workshop.%20This%20year%27s%20theme%20focuses%20on%20the%20cutting-edge%20advancements%20in%20compiler%20design%2C%20implementation%2C%20and%20optimization%2C%20and%20their%20impact%20on%20emerging%20software%20and%20hardware%20platforms&location=Dayananda%20Sagar%20College%20of%20Engineering%2C%20Bangalore%2C%20India"
                target="_blank"
              >
                28th &amp; 29th September, 9AM-5PM
              </a>
            </h3>
            <h1>
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
            </h1>
          </div>
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
  justify-content: space-around;
  position: absolute;
  height: 40%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Bebas Neue";
  font-size: clamp(32px, 5vw, 48px);
  letter-spacing: 2px;
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
  h1 {
    font-size: 24px;
    display: flex;
    justify-content: center;
    gap: 0px;
    color: white;
  }
  h3 {
    font-size: 36px;
    display: flex;
    justify-content: center;
    gap: 5px;
    color: white;
  }
  h4 {
    font-size: 36px;
    font-family: cursive;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    h1 {
      font-size: 24px;
      display: flex;
      justify-content: center;
      gap: 0px;
      color: white;
    }
    h3 {
      font-size: 36px;
      display: flex;
      justify-content: center;
      gap: 5px;
      color: white;
    }
    h4 {
      font-size: 32px;
      font-family: cursive;
    }
    font-size: 32px;
    width: 80%;
    top: 60%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 70%;
    gap: 100px;
    justify-content: end;
    h1 {
      font-size: 14px;
      display: flex;
      justify-content: center;
      gap: 0px;
      color: white;
      svg {
        display: none;
      }
    }
    h3 {
      font-size: 20px;
      display: flex;
      justify-content: center;
      gap: 5px;
      color: white;
      svg {
        display: none;
      }
    }
    h4 {
      font-size: 20px;
      font-family: "Bebas Neue";
    }
    a:hover {
      text-decoration: none;
    }
    width: 90%;
    bottom: 20%;
  }
  .hero-text-img {
    width: 100%;
    height: auto;
  }
`;

export default Hero;
