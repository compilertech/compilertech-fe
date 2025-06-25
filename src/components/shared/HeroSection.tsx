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
  min-height: 400px;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
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

const CirclesContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-image: url(${PageBannerImage});
  width: 350px;
  height: 350px;
  top: 0;
  right: 0px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    right: 30px;
    width: 250px;
    height: 350px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    right: -70px;
    top: 0;
    bottom: -50px;
    width: 180px;
    height: 180px;
    transform: translateY(0);
  }
`;

const HeroSection: React.FC<HeroSectionProps> = ({ title, subTitle }) => {
  return (
    <>
      <HeroSectionContainer>
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </TitleWrapper>
        <CirclesContainer />
      </HeroSectionContainer>
      <Divider />
    </>
  );
};

export default HeroSection;
