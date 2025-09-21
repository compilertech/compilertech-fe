import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import PageBannerImage from "../../assets/common/PageBanner.svg";

interface HeroSectionProps {
  title?: string;
  subTitle?: string;
}

const HeroSectionContainer = styled.div`
  display: flex;
  width: 100%;
  background: #000000;
  min-height: 252px;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
    min-height: 200px;
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  z-index: 3;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: white;
  font-family: Satoshi, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h3`
  color: #fb4dd8;
  margin-top: 5px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 70px;
  line-height: 120%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 56px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 42px;
  }
`;

const BackgroundImageSection = styled.img`
  display: none;
  position: absolute;
  z-index: 2;
  width: 350px;
  height: 350px;
  top: 0;
  right: 50px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    right: -50px;
    top: 0;
    bottom: -50px;
    width: 180px;
    height: 180px;
    transform: translateY(0);
  }
`;

const Schedule2025HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <>
      <HeroSectionContainer>
        <TitleWrapper>
          <Title>Event</Title>
          <Subtitle>Schedule</Subtitle>
        </TitleWrapper>
        <BackgroundImageSection src={PageBannerImage} />
      </HeroSectionContainer>
    </>
  );
};

export default Schedule2025HeroSection;
