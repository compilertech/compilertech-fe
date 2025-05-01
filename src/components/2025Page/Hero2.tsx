// Add a wrapper for the carousel and dots
const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  /* Fixed width for medium-large screens to prevent zooming */
  @media (min-width: 796px) and (max-width: 1340px) {
    max-width: 650px;
    width: 650px; /* Force exact width in this range */
  }

  /* Custom width for screens between 520px and 796px */
  @media (min-width: 520px) and (max-width: 796px) {
    max-width: 500px; /* Increased width for this specific range */
  }

  @media (max-width: 520px) {
    max-width: 341px; /* Square-ish shape for mobile */
  }
`;
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import vectorImage from "../../assets/2025/vector.svg";

import { IoMdArrowForward } from "react-icons/io";
import img1 from "../../assets/2025/img1.webp";
import img2 from "../../assets/2025/img2.webp";
import img3 from "../../assets/2025/img3.webp";
import img4 from "../../assets/2025/img4.webp";

const heroData = {
  title: "Innovations in compiler technology at",
  subtitle: "Bengaluru, Karnataka",
  description:
    "The IICT (Innovations In Compiler Technology) workshop aims to bring together researchers, practitioners, and enthusiasts in the field of compiler technologies. This year's theme focuses on the cutting-edge advancements in compiler design, implementation, and optimization, and their impact on emerging software and hardware platforms. We invite presentation proposals for our upcoming workshop",
  emailPlaceholder: "Enter your email ID for updates",
  forMoreUpdates: "For more updates",
  comingSoon: "27, 28th September 2025",
  comingSoonSubText: "AV Ramo Rao auditorium, Chemical Sciences building, IISC",
  previousYearCta: "Previous Year CTA →",
};

function Hero2() {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  // Email subscription state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const images = [img1, img2, img3, img4];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Check if current view is tablet or mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrMobile(
        window.innerWidth <= parseInt(TABLET_BREAKPOINT.replace("px", ""))
      );
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Function to detect if we're running in development environment
  const isDevelopmentMode = () => {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  };

  // Function to encode form data for Netlify
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Handle email subscription form submission
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    // Check if we're in development mode
    if (isDevelopmentMode()) {
      // Simulate a successful submission in development
      console.log("DEV MODE: Form submission simulated for email:", email);

      // Simulate network delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setEmail(""); // Clear email field after successful submission

        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 800);

      return;
    }

    // Production code - actual Netlify form submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "get-updates-form",
        email: email,
      }),
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setEmail(""); // Clear email field after successful submission

        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
        setSubmitError(true);

        // Reset error message after 3 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 3000);
      });
  };

  return (
    <HeroContainer>
      <ContentSection>
        <TitleContainer>
          <Title>{heroData.title}</Title>
          <Subtitle>{heroData.subtitle}</Subtitle>
        </TitleContainer>

        <Description>{heroData.description}</Description>

        <UpdatesSection>
          <ForMoreUpdates>{heroData.forMoreUpdates}</ForMoreUpdates>

          <form
            name="get-updates-form"
            method="post"
            data-netlify="true"
            onSubmit={handleEmailSubmit}
            style={{ width: "100%" }}
          >
            {/* Hidden input for Netlify form identification */}
            <input type="hidden" name="form-name" value="get-updates-form" />

            {/* Honeypot field to reduce spam */}
            <p style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <EmailSubscriptionContainer>
              <EmailInput
                type="email"
                name="email"
                placeholder={heroData.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span
                    style={{ width: "24px", height: "24px", display: "block" }}
                  >
                    ·
                  </span>
                ) : (
                  <IoMdArrowForward size={24} />
                )}
              </SubmitButton>
            </EmailSubscriptionContainer>

            {/* Form status messages */}
            {submitSuccess && (
              <SubmitMessage success>Thank you for subscribing!</SubmitMessage>
            )}
            {submitError && (
              <SubmitMessage>
                Something went wrong. Please try again.
              </SubmitMessage>
            )}
          </form>
        </UpdatesSection>

        {/* Carousel component */}
        <CarouselWrapper>
          <CarouselContainer>
            <Slide
              src={images[currentIndex]}
              alt={`Conference slide ${currentIndex + 1}`}
            />

            {/* Coming Soon Box positioned here only for tablet and mobile */}
            {isTabletOrMobile && (
              <ComingSoonBoxMobile>
                <ComingSoonText>{heroData.comingSoon}</ComingSoonText>
                <ComingSoonSubText>
                  {heroData.comingSoonSubText}
                </ComingSoonSubText>
              </ComingSoonBoxMobile>
            )}
          </CarouselContainer>

          {/* Dots moved outside of CarouselContainer */}
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotsContainer>
        </CarouselWrapper>
      </ContentSection>

      <VectorContainer>
        {/* Original Coming Soon Box for desktop */}
        {!isTabletOrMobile && (
          <ComingSoonBox>
            <ComingSoonText>{heroData.comingSoon}</ComingSoonText>
            <ComingSoonSubText>{heroData.comingSoonSubText}</ComingSoonSubText>
          </ComingSoonBox>
        )}
      </VectorContainer>
    </HeroContainer>
  );
}

// Define interface for props that use success
interface SubmitMessageProps {
  success?: boolean;
}

// New styled component for form submission messages
const SubmitMessage = styled.p<SubmitMessageProps>`
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 14px;
  color: ${(props) => (props.success ? "#4caf50" : "#f44336")};
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 12px;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }
`;

// Carousel components
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 16px;
  position: relative;
  height: 300px; /* Fixed consistent height */
  margin-bottom: 1.5rem;

  /* Specific width for large screens */
  @media (min-width: 1340px) {
    max-width: 650px;
  }

  /* Fixed width for medium-large screens to prevent zooming */
  @media (min-width: 796px) and (max-width: 1340px) {
    max-width: 650px;
    width: 650px; /* Force exact width in this range */
  }

  /* Allow overflow on tablet/mobile for the overlap effect */
  @media (max-width: 796px) {
    overflow: visible;
    max-width: 90%;
    height: 300px; /* Maintain consistent height */
    margin-bottom: 60px; /* Extra space for overlapping box */
  }

  /* Custom width for screens between 520px and 796px */
  @media (min-width: 520px) and (max-width: 796px) {
    max-width: 500px; /* Increased width for this specific range */
  }

  @media (max-width: 520px) {
    max-width: 341px; /* Square-ish shape for mobile */
    height: 300px; /* Maintain consistent height */
    border-radius: 16px; /* Consistent border radius */
    margin-bottom: 50px;
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover; /* Changed from contain to cover for consistent appearance */
  object-position: center;
  border-radius: 16px; /* Consistent border radius */

  /* Ensure images don't get stretched in the problematic range */
  @media (min-width: 796px) and (max-width: 1340px) {
    object-fit: cover;
    max-height: 300px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 16px; /* Consistent border radius */
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Space between carousel and dots */
  position: static; /* Remove absolute positioning */
  width: 100%;
  z-index: 10;

  /* Hide dots on tablet and mobile screens */
  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

// Define interface for props that require active flag
interface DotProps {
  active: boolean;
}

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? "#a93d9d" : "rgba(169, 61, 157, 0.3)"};
  transition: background 0.3s ease;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
`;

// Updates section wrapper to center everything on mobile
const UpdatesSection = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    align-items: center;
    text-align: center;
  }
`;

// New components for the updated design
const ForMoreUpdates = styled.p`
  margin-bottom: 0.75rem;
  font-size: 16px;
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none; /* Hide "For more updates" on tablet and smaller screens */
  }
`;

const EmailSubscriptionContainer = styled.div`
  display: flex;
  margin-bottom: 0; /* Removed bottom margin since it's managed by the parent */
  width: 100%;
  gap: 0.75rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 90%;
    margin-top: 0.5rem; /* Add some space at the top when "For more updates" is hidden */
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    gap: 0.5rem;
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  width: 200px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 0.95rem;
    width: 200px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 6px;
    width: 200px;
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  min-width: 48px;
  height: 48px;

  &:hover {
    background-color: #e6e6e6;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 6px;
    min-width: 42px;
    height: 42px;
    padding: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
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
    min-height: 80vh;
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
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 2rem; /* Consistent spacing after description */
  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
    text-align: center;
    max-width: 90%;
    margin-bottom: 1.5rem; /* Slightly reduced spacing for tablet */
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.25rem; /* Even more reduced spacing for mobile */
  }
`;

// Keep the original Coming Soon Box for desktop
const ComingSoonBox = styled.div`
  /* Desktop styling (unchanged) */
  border-radius: 16px;
  border: 0.5px solid #ffffff;
  background: rgba(249, 248, 245, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px; /* Increased padding for better spacing */
  z-index: 10;
  width: 280px; /* Fixed width */

  /* Desktop positioning */
  position: absolute;
  top: 47%;
  right: 20vw;
  transform: translate(-50%, -50%);

  /* Common positioning for 1341-1553px screens */
  @media (min-width: 1341px) and (max-width: 1553px) {
    right: 15%;
    top: 50%;
  }

  /* Specific adjustment for 1350px screens to match */
  @media (min-width: 1350px) and (max-width: 1350px) {
    right: 15%;
    top: 50%;
  }

  /* Specific adjustment for 1435px screens to match */
  @media (min-width: 1435px) and (max-width: 1435px) {
    right: 15%;
    top: 50%;
  }

  /* Specific adjustment for 1350-1435px screens */
  @media (min-width: 1350px) and (max-width: 1435px) {
    right: 15%;
    top: 50%;
  }

  /* Adjust for very large screens */
  @media (min-width: 1554px) {
    right: 15vw;
  }
`;

// New mobile/tablet-specific Coming Soon Box with overlap
const ComingSoonBoxMobile = styled.div`
  /* Common styling */
  border-radius: 16px;
  border: 0.5px solid #ffffff;
  background: rgba(249, 248, 245, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Increased gap for better line spacing */
  padding: 15px; /* Added padding for better spacing */

  /* Positioning - absolute relative to carousel container */
  position: absolute;
  bottom: -45px; /* Create overlap */
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  /* Sizing */
  width: 250px; /* Increased width */

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 220px;
    padding: 12px;
    bottom: -40px;
  }
`;

const ComingSoonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px; /* Fixed line height */
  letter-spacing: 0.5px; /* Added letter spacing */
  color: #ffffff;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ComingSoonSubText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.3px; /* Added letter spacing */
  text-align: center;
  color: #ffffff;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export default Hero2;
