import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import PartnerWithUsBackgroundImageSrc from "../../assets/common/ParterWithUsBackgroundImage.svg";

const PartnerWithUsContainer = styled.div`
  display: flex;
  width: 100%;
  background: #000000;
  min-height: 292px;
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
    min-height: 250px;
    flex-direction: column;
  }
`;

const Divider = styled.div<{ hideForMobile?: boolean }>`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: ${({ hideForMobile }) => (hideForMobile ? "none" : "block")};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  z-index: 2;

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

const GetInTouchButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 10px 12px;
  gap: 12px;
  height: min-content;
  margin: auto 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
    width: 100%;
  }
`;

const StyledBackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
  }
`;

function PartnerWithUs() {
  return (
    <>
      <Divider hideForMobile={true} />
      <PartnerWithUsContainer>
        <StyledBackgroundImage src={PartnerWithUsBackgroundImageSrc} />
        <TitleWrapper>
          <Title>Partner with Us to</Title>
          <Subtitle>Shape the Future</Subtitle>
        </TitleWrapper>
        <ButtonWrapper>
          <GetInTouchButton onClick={() => {}}>Get in touch</GetInTouchButton>
        </ButtonWrapper>
      </PartnerWithUsContainer>
      <Divider />
    </>
  );
}

export default PartnerWithUs;
