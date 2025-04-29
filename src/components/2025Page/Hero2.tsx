import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import vectorImage from "../../assets/2025/vector.svg";

import { IoMdArrowForward } from "react-icons/io";
import img1 from "../../assets/2025/img1.svg";
import img2 from "../../assets/2025/img2.svg";
import img3 from "../../assets/2025/img3.svg";
import img4 from "../../assets/2025/img4.png";

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

        <ForMoreUpdates>{heroData.forMoreUpdates}</ForMoreUpdates>

        <form
          name="get-updates-form"
          method="post"
          data-netlify="true"
          onSubmit={handleEmailSubmit}
          style={{ width: "100%", maxWidth: "500px" }}
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

        {/* Carousel with conditional placement of Coming Soon box */}
        <CarouselContainer>
          <Slide
            src={images[currentIndex]}
            alt={`Conference slide ${currentIndex + 1}`}
          />
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotsContainer>

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
      </ContentSection>

      <VectorContainer>
        {/* Original Coming Soon Box for desktop */}
        {!isTabletOrMobile && (
          <ComingSoonBox>
            <ComingSoonText>{heroData.comingSoon}</ComingSoonText>

            <ComingSoonText>{heroData.comingSoonSubText}</ComingSoonText>
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
  border-radius: 1.5rem;
  position: relative;
  height: 400px;
  margin-bottom: 1.5rem;

  /* Allow overflow on tablet/mobile for the overlap effect */
  @media (max-width: ${TABLET_BREAKPOINT}) {
    overflow: visible;
    max-width: 90%;
    height: 300px;
    margin-bottom: 60px; /* Extra space for overlapping box */
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    height: 250px;
    border-radius: 1rem;
    margin-bottom: 50px;
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
  z-index: 10;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    bottom: 8px;
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

// New components for the updated design
const ForMoreUpdates = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

const EmailSubscriptionContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  max-width: 500px;
  gap: 1rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  border: 1px solid white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 8px 12px;
    border-radius: 6px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

// const ExternalLink = styled.a`
//   font-size: 1rem;
//   color: white;
//   text-decoration: none;
//   margin-top: 1rem;
//   display: inline-block;

//   &:hover {
//     text-decoration: underline;
//   }

//   @media (max-width: ${MOBILE_BREAKPOINT}) {
//     font-size: 0.9rem;
//     margin-top: 0.75rem;
//   }
// `;

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
    min-height: 100vh;
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
  margin-bottom: 1rem;
  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
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
  padding: 15px;
  z-index: 10;

  /* Desktop positioning */
  position: absolute;
  top: 47%;
  right: 20vw;
  transform: translate(-50%, -50%);

  /* Specific adjustment for 1350-1435px screens */
  @media (min-width: 1350px) and (max-width: 1435px) {
    right: 10vw;
    top: 50%;
  }

  /* Adjust for very large screens */
  @media (min-width: 1920px) {
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
  gap: 8px;

  /* Positioning - absolute relative to carousel container */
  position: absolute;
  bottom: -45px; /* Create overlap */
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  /* Sizing */
  width: 200px;
  height: 90px;

  /* Mobile-specific adjustments */
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 180px;
    height: 80px;
    bottom: -40px;
  }
`;

const ComingSoonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  text-align: center;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 14px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 12px;
  }
`;
const ComingSoonSubText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 14px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 12px;
  }
`;
export default Hero2;
