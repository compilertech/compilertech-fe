import { useEffect, useState, useRef, FC } from "react";
import styled from "styled-components";

// Create a styled component for the gradient text with responsive font sizes
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
  white-space: nowrap;
  padding: 0 100px; // Add some padding between repeated texts

  // Responsive font sizes
  @media (max-width: 1440px) {
    font-size: 100px;
    padding: 0 80px;
  }

  @media (max-width: 1024px) {
    font-size: 80px;
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    padding: 0 20px;
  }
`;

const Banner = styled.div`
  width: 100%;
  background-color: #000000;
  overflow: hidden;
  padding: 40px 0;
  position: relative;

  // Responsive padding
  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

const InfiniteScrollContainer = styled.div`
  display: flex;
  white-space: nowrap;
`;

const AnimatedContainer = styled.div<{ position: number }>`
  display: flex;
  transform: translateX(${(props) => props.position}px);
  transition: transform 0.1s linear;
`;

interface AnimatedBannerProps {
  text?: string;
  speed?: number;
}

const AnimatedBanner: FC<AnimatedBannerProps> = ({
  text = "Innovating Compilers, Transforming Technology",
  speed = 100,
}) => {
  const [position, setPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Measure the width of a single text element
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text, windowWidth]); // Re-measure when text or window width changes

  useEffect(() => {
    if (!textWidth) return;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number): void => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime: number = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Update position
      setPosition((prevPosition: number) => {
        // Calculate new position with the specified speed
        const newPosition = prevPosition - (speed * deltaTime) / 1000;

        // Reset position when text has moved by one full width to create seamless loop
        // We use modulo to create a looping effect
        return newPosition <= -textWidth
          ? newPosition + textWidth
          : newPosition;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [textWidth, speed, windowWidth]);

  // Adapt speed based on screen size
  // const responsiveSpeed = windowWidth < 768 ? speed * 0.7 : speed;

  // Generate multiple copies of the text to ensure seamless looping
  // We need at least enough copies to cover the screen width plus a buffer
  const renderMultipleTexts = () => {
    // Determine how many copies we need based on screen width
    const numCopies = Math.max(
      3,
      Math.ceil((windowWidth * 2) / (textWidth || 1000))
    );

    return Array.from({ length: numCopies }).map((_, index) => (
      <GradientText key={index} ref={index === 0 ? textRef : undefined}>
        {text}
      </GradientText>
    ));
  };

  return (
    <Banner>
      <InfiniteScrollContainer ref={containerRef}>
        <AnimatedContainer position={position}>
          {renderMultipleTexts()}
        </AnimatedContainer>
      </InfiniteScrollContainer>
    </Banner>
  );
};

export default AnimatedBanner;
