import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const CollabContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background: linear-gradient(97.09deg, #367aff 0%, #f150da 100%);
  display: flex;
  padding: 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
    min-height: 400px;
    flex-direction: column;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  z-index: 2;
  max-width: 600px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 500px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
  }
`;

const Heading = styled.h2`
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

const SubHeading = styled.h3`
  color: white;
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

const Divider = styled.hr`
  width: 90vw;
  height: 0.5px;
  background-color: white;
  border: none;
  margin-bottom: 30px;
  margin-top: 30px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 17px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const EmailText = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 17px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    margin-bottom: 25px;
  }
`;

const EmailHighlight = styled.span`
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
    padding: 8px 16px;
  }
`;

const CirclesContainer = styled.div`
  position: absolute;
  right: 60px;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    right: 30px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    right: 20px;
    top: auto;
    bottom: -50px;
    transform: translateY(0);
  }
`;

const LargeCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    visibility: hidden;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    visibility: hidden;
  }
`;

const SmallCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd700 0%, #ffa07a 100%);
  position: absolute;
  bottom: -20px;
  left: -30px;
  opacity: 0.8;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100px;
    height: 100px;
    top: 0px;
    left: -25px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 80px;
    height: 80px;
    top: 0px;
    left: -20px;
  }
`;

function Collab() {
  return (
    <CollabContainer id="sponsorship-opportunities">
      <ContentSection>
        <Heading>Partner with Us to</Heading>
        <SubHeading style={{ width: "160%", maxWidth: "100%" }}>
          Support the Compiler Community
        </SubHeading>
        <Divider />
        <Description>
          We offer various sponsorship tiers tailored to your goals, Let's
          collaborate to drive the future of compiler technology together.
        </Description>
        <EmailText>
          Get in touch at{" "}
          <EmailHighlight>sponsor@compilertech.org</EmailHighlight> to explore
          sponsorship opportunities!
        </EmailText>
        <Button href="#">Get in touch</Button>
      </ContentSection>

      <CirclesContainer>
        <LargeCircle>
          <SmallCircle />
        </LargeCircle>
      </CirclesContainer>
    </CollabContainer>
  );
}

export default Collab;
