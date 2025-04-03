import styled from "styled-components";

const CollabContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background: linear-gradient(90deg, #4169e1 0%, #9370db 100%);
  display: flex;
  padding: 60px;
  position: relative;
  overflow: hidden;
`;

const ContentSection = styled.div`
  flex: 1;
  z-index: 2;
  max-width: 600px;
`;

const Heading = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 0;
`;

const SubHeading = styled.h3`
  color: white;
  font-size: 50px;
  font-weight: 400;
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 40px;
`;

const Divider = styled.hr`
  width: 80px;
  height: 2px;
  background-color: white;
  border: none;
  margin: 30px 0;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EmailText = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
`;

const EmailHighlight = styled.span`
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const CirclesContainer = styled.div`
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const LargeCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
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
`;

function Collab() {
  return (
    <CollabContainer>
      <ContentSection>
        <Heading>Partner with Us to</Heading>
        <SubHeading>Shape the Future</SubHeading>
        <Divider />
        <Description>
          We offer various sponsorship tiers tailored to your goals, Let's
          collaborate to drive the future of compiler technology together.
        </Description>
        <EmailText>
          Get in touch at <EmailHighlight>sposnships@CT.com</EmailHighlight> to
          explore sponsorship opportunities!
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
