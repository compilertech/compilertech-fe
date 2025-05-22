const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 796px) and (max-width: 1340px) {
    max-width: 650px;
    width: 650px;
  }

  @media (min-width: 520px) and (max-width: 796px) {
    max-width: 500px;
  }

  @media (max-width: 520px) {
    max-width: 341px;
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
import { FaCircleNotch } from "react-icons/fa";
import acmLogo from "../../assets/2025/logo_acm.png";

const heroData = {
  title: "Innovations in compiler technology",
  subtitle: "at Bengaluru, Karnataka",
  description:
    "Innovations in Compiler Technology (IICT) is a workshop dedicated to bringing together researchers, practitioners, and enthusiasts in the field of compiler technologies. Our inaugural edition, IICT 2024, was met with an enthusiastic response, drawing over 200 participants from across the compiler community. Building on that success, we're excited to announce that IICT 2025 is set to be even bigger — now an ACM-sponsored event, hosted at IISc Bangalore!",
  emailPlaceholder: "Enter your email ID for updates",
  forMoreUpdates: "For more updates",
  comingSoon: "27, 28th September 2025",
  comingSoonSubText: "AV Ramo Rao auditorium, Chemical Sciences building, IISC",
  previousYearCta: "Previous Year CTA →",
};

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrMobile(
        window.innerWidth <= parseInt(TABLET_BREAKPOINT.replace("px", ""))
      );
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const isDevelopmentMode = () => {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    if (isDevelopmentMode()) {
      console.log("DEV MODE: Form submission simulated for email:", email);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setEmail("");

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 800);

      return;
    }

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
        setEmail("");

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
        setSubmitError(true);

        setTimeout(() => {
          setSubmitError(false);
        }, 3000);
      });
  };

  return (
    <HeroContainer id="overview">
      <ContentSection>
        <TitleContainer>
          <Subtitle>{heroData.title}</Subtitle>
          <Title>{heroData.subtitle}</Title>
        </TitleContainer>

        <Description>{heroData.description}</Description>
        {isTabletOrMobile && (
          <img
            src={acmLogo}
            alt="ACM Logo"
            height={"80px"}
            style={{ marginBottom: "20px" }}
          />
        )}

        <UpdatesSection>
          <ForMoreUpdates>{heroData.forMoreUpdates}</ForMoreUpdates>

          <form
            name="get-updates-form"
            method="post"
            data-netlify="true"
            onSubmit={handleEmailSubmit}
            style={{ width: "100%" }}
          >
            <input type="hidden" name="form-name" value="get-updates-form" />

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
                  <Loader size={24} />
                ) : (
                  <IoMdArrowForward size={24} />
                )}
              </SubmitButton>
            </EmailSubscriptionContainer>

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

        <CarouselWrapper>
          <CarouselContainer>
            <Slide
              src={images[currentIndex]}
              alt={`Conference slide ${currentIndex + 1}`}
            />

            {isTabletOrMobile && (
              <ComingSoonBoxMobile>
                <ComingSoonText
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250927T033000Z%2F20250927T233000Z&details=The%202025%20Innovations%20In%20Compiler%20Technology%20%28IICT%29%20Workshop%20will%20be%20held%20at%20Indian%20Institute%20of%20Science%2C%20Bengaluru%2C%20India.%20The%20two-day%20workshop%20will%20be%20in-person.%20More%20details%20can%20be%20accessed%20in%20compilertech.org&location=Indian%20Institute%20of%20Science%20%28Bengaluru%29&text=Innovations%20in%20compiler%20technology"
                  target="_blank"
                >
                  {heroData.comingSoon}
                </ComingSoonText>
                <ComingSoonSubText
                  href="https://maps.app.goo.gl/TjPoMzQyJysDPiAi8"
                  target="_blank"
                >
                  {heroData.comingSoonSubText}
                </ComingSoonSubText>
              </ComingSoonBoxMobile>
            )}
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
        </CarouselWrapper>
      </ContentSection>

      <VectorContainer>
        {!isTabletOrMobile && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <img
              style={{ display: "block", margin: "0 auto" }}
              src={acmLogo}
              height={70}
              width={210}
              alt="ACM Logo"
            />
            <ComingSoonBox>
              <ComingSoonText
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250927T033000Z%2F20250927T233000Z&details=The%202025%20Innovations%20In%20Compiler%20Technology%20%28IICT%29%20Workshop%20will%20be%20held%20at%20Indian%20Institute%20of%20Science%2C%20Bengaluru%2C%20India.%20The%20two-day%20workshop%20will%20be%20in-person.%20More%20details%20can%20be%20accessed%20in%20compilertech.org&location=Indian%20Institute%20of%20Science%20%28Bengaluru%29&text=Innovations%20in%20compiler%20technology"
                target="_blank"
              >
                {heroData.comingSoon}
              </ComingSoonText>
              <ComingSoonSubText
                target="_blank"
                href="https://maps.app.goo.gl/TjPoMzQyJysDPiAi8"
              >
                {heroData.comingSoonSubText}
              </ComingSoonSubText>
            </ComingSoonBox>
          </div>
        )}
      </VectorContainer>
    </HeroContainer>
  );
}

interface SubmitMessageProps {
  success?: boolean;
}

const SubmitMessage = styled.p<SubmitMessageProps>`
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

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 16px;
  position: relative;
  height: 300px;
  margin-bottom: 1.5rem;

  @media (min-width: 1340px) {
    max-width: 650px;
  }

  @media (min-width: 796px) and (max-width: 1340px) {
    max-width: 650px;
    width: 650px;
  }

  @media (max-width: 796px) {
    overflow: visible;
    max-width: 90%;
    height: 300px;
    margin-bottom: 60px;
  }

  @media (min-width: 520px) and (max-width: 796px) {
    max-width: 500px;
  }

  @media (max-width: 520px) {
    max-width: 341px;
    height: 300px;
    border-radius: 16px;
    margin-bottom: 50px;
  }
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;

  @media (min-width: 796px) and (max-width: 1340px) {
    object-fit: cover;
    max-height: 300px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 16px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: static;
  width: 100%;
  z-index: 10;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

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

const ForMoreUpdates = styled.p`
  margin-bottom: 0.75rem;
  font-size: 16px;
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const EmailSubscriptionContainer = styled.div`
  display: flex;
  margin-bottom: 0;
  width: 100%;
  gap: 4px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 90%;
    margin-top: 0.5rem;
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

const HeroContainer = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 2rem;
  font-family: "Satoshi", sans-serif;

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
  font-size: 45px;
  font-weight: 500;
  font-style: italic;
  font-family: serif;
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
  margin-bottom: 2rem;
  max-width: 650px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 1.1rem;
    text-align: center;
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
`;

const ComingSoonBox = styled.div`
  border-radius: 16px;
  border: 0.5px solid #ffffff;
  background: rgba(249, 248, 245, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  z-index: 10;
  width: 280px;
`;

const ComingSoonBoxMobile = styled.div`
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

  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
  z-index: 20;

  width: 250px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 220px;
    padding: 12px;
    bottom: -40px;
  }
`;

const ComingSoonText = styled.a`
  text-decoration: none;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ComingSoonSubText = styled.a`
  text-decoration: none;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Loader = styled(FaCircleNotch)`
  animation: heartbeat 1s linear infinite;
  @keyframes heartbeat {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Hero;
