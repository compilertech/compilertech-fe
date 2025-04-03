import { useEffect, useState, FC } from "react";
import styled from "styled-components";

// Create a styled component for the gradient text
const GradientText = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 128px;
  line-height: 100%;
  letter-spacing: 0%;
  background: linear-gradient(97.15deg, #367aff -7.35%, #f150da 99.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  white-space: nowrap;
  width: max-content;
`;

const Banner = styled.div`
  width: 100%;
  background-color: #000000;
  overflow: hidden;
  padding: 40px 0;
`;

const AnimatedContainer = styled.div<{ position: number }>`
  transform: translateX(${(props) => props.position}px);
  transition: transform 0.1s linear;
`;

interface AnimatedBannerProps {
  text?: string;
}

const AnimatedBanner: FC<AnimatedBannerProps> = ({
  text = "Innovating Compilers, Transforming Technology",
}) => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const animationSpeed: number = 50; // pixels per second
    const screenWidth: number = window.innerWidth;
    const textElement = document.querySelector(".gradient-text") as HTMLElement;
    const textWidth: number = textElement
      ? textElement.offsetWidth
      : text.length * 80;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number): void => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime: number = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Update position
      setPosition((prevPosition: number) => {
        const newPosition: number =
          prevPosition - (animationSpeed * deltaTime) / 1000;
        // Reset position when text has moved completely off-screen to the left
        return newPosition < -textWidth ? screenWidth : newPosition;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure the text element is measured correctly
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 100);

    // Handle window resize
    const handleResize = (): void => {
      // Reset animation when window size changes
      cancelAnimationFrame(animationFrameId);
      setPosition(window.innerWidth);
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [text]);

  return (
    <Banner>
      <AnimatedContainer position={position}>
        <GradientText className="gradient-text">{text}</GradientText>
      </AnimatedContainer>
    </Banner>
  );
};

export default AnimatedBanner;
