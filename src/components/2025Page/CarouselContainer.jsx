import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  display: block;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? "#a93d9d" : "rgba(169, 61, 157, 0.3)"};
  transition: background 0.3s ease;
`;

const Carousel = ({ images, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoSlideInterval]);

  return (
    <>
      <CarouselContainer>
        <Slide src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </CarouselContainer>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </>
  );
};

export default Carousel;
