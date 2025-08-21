import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import RightBlobSvg from "../../assets/common/Segfault_Right_Blob.svg";
import LeftBlobDesktopSvg from "../../assets/common/Segfault_Left_Blob_Desktop.svg";
import LeftBlobMobileSvg from "../../assets/common/Segfault_Left_Blob_Mobile.svg";
import SegfaultIconPng from "../../assets/common/SEGFAULT_Icon.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #000000;
  min-height: 400px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 9rem 2.5rem 10.5rem;
  }
`;

const LeftBlobDesktop = styled.img`
  position: absolute;
  left: 0;
  bottom: 70px;
  z-index: 1;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const RightBlob = styled.img`
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    top: 11px;
    right: 7px;
    height: 113px;
  }
`;

const LeftBlobMobile = styled.img`
  display: none;
  position: absolute;
  left: 16px;
  bottom: 48px;
  z-index: 1;
  height: 150px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
  }
`;

const ContentContainer = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tagline = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-top: 24px;
  max-width: 450px;
  font-family: "Satoshi", sans-serif;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-top: 40px;
  max-width: 372px;
  text-align: center;
  text-wrap: wrap;
  font-family: "Satoshi", sans-serif;
`;

const HackathonButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 15px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  font-family: "Satoshi", sans-serif;
`;

const SegFaultLogoImg = styled.img`
  width: 120%
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
  }
`;

const Segfault = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <SegFaultLogoImg src={SegfaultIconPng} alt="Segfault Logo" />
        <Tagline>Where Impossible is Just an Error Code.</Tagline>
        <Description>
          The SegFault Hackathon is co-located and organized as a part of the
          Innovations In Compiler Technology (IICT) Workshop.
        </Description>
        <HackathonButton
          onClick={() =>
            window.open("https://segfault.compilertech.org/", "_blank")
          }
        >
          Check out the hackathon website here
        </HackathonButton>
      </ContentContainer>
      <LeftBlobDesktop src={LeftBlobDesktopSvg} alt="" />
      <RightBlob src={RightBlobSvg} alt="" />
      <LeftBlobMobile src={LeftBlobMobileSvg} alt="" />
    </Wrapper>
  );
};

export default Segfault;
