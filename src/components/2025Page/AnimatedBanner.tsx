import { useEffect, useState, useRef, FC } from "react";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";

// Create a styled component for the gradient text with responsive font sizes
const GradientText = styled.div`
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  font-size: 128px;
  line-height: 180px;
  letter-spacing: 0%;
  background: linear-gradient(97.15deg, #367aff -7.35%, #f150da 99.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  margin-right: 100px;
  margin-top: 20px;
  margin-bottom: 34px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    line-height: 100px;
    font-size: 80px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    line-height: 80px;
    font-size: 60px;
  }
`;

const Banner = styled.div`
  width: 100%;
  background-color: #000000;
  overflow: hidden;
  position: relative;

  // Responsive padding
  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const ScrollingTextWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: scrollText 20s linear infinite;

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    } /* Move by half the width for seamless loop */
  }
`;

interface AnimatedBannerProps {
  text?: string;
  speed?: number; // in seconds for one complete cycle
}

const AnimatedBanner: FC<AnimatedBannerProps> = ({
  text = "Innovating Compilers, Transforming Technology",
  speed = 20, // Default animation duration in seconds
}) => {
  const scrollingTextRef = useRef<HTMLDivElement>(null);
  const [repeats, setRepeats] = useState<number>(4);

  useEffect(() => {
    // Function to calculate how many text repeats we need
    const calculateRepeats = () => {
      if (!scrollingTextRef.current) return;

      const windowWidth = window.innerWidth;
      const textWidth = scrollingTextRef.current.children[0]?.clientWidth || 0;

      // Calculate how many repeats we need to fill the screen twice
      // (for seamless looping we need at least twice the screen width)
      if (textWidth > 0) {
        const needed = Math.ceil((windowWidth * 2) / textWidth) + 1;
        setRepeats(Math.max(4, needed)); // At least 4 repeats
      }
    };

    // Initial calculation
    calculateRepeats();

    // Recalculate on resize
    window.addEventListener("resize", calculateRepeats);

    return () => {
      window.removeEventListener("resize", calculateRepeats);
    };
  }, [text]);

  // Adjust the animation duration based on the speed prop
  const ScrollingText = styled(ScrollingTextWrapper)`
    animation-duration: ${speed}s;
  `;

  return (
    <Banner>
      <MarqueeContainer>
        <ScrollingText ref={scrollingTextRef}>
          {Array.from({ length: repeats }).map((_, index) => (
            <GradientText key={index}>{text}</GradientText>
          ))}
        </ScrollingText>
      </MarqueeContainer>
    </Banner>
  );
};

export default AnimatedBanner;
