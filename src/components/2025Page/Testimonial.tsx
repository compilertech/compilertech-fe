import React from "react";
import styled from "styled-components";

function Testimonial() {
  return (
    <TestimonialContainer>
      <TestimonialCard>
        <LeftContent>
          <Title>
            Exploring the Future of
            <HighlightText>Compiler Technology</HighlightText>
          </Title>
          <Divider />
        </LeftContent>

        <RightContent>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
            vivamus mauris elit. Hendrerit a donec platea nulla pretium
            venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
            egestas. Sit eget integer consequat odio fringilla massa sed
            pulvinar dignissim. Faucibus est in tincidunt cras egestas duis dui
            eros. Velit tempus scelerisque facilisis at amet habitant mattis
            aenean. Vitae quisque enim laoreet urna dictum nunc vestibulum.
          </Description>

          <SubscriptionSection>
            <SubscriptionText>
              Subscribe now and stay informed with the latest updates and
              important announcements
            </SubscriptionText>
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscriptionSection>
        </RightContent>
      </TestimonialCard>

      {/* Decorative elements */}
      <PurpleCircle />
      <BlueCircle />
      <GoldCircle />
    </TestimonialContainer>
  );
}

export default Testimonial;

// Styled Components
const TestimonialContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  padding: 4rem;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TestimonialCard = styled.div`
  background-color: #151515;
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

const RightContent = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HighlightText = styled.div`
  color: #d83bd2;
  font-style: italic;
  font-size: 2.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1.5rem 0;
  width: 100%;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  color: rgba(255, 255, 255, 0.9);
`;

const SubscriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

const SubscriptionText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const SubscribeButton = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Decorative elements
const PurpleCircle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: #9c27b0;
  border-top-right-radius: 200px;
  border-radius: 0;
  opacity: 0.8;
  z-index: 1;
`;

const BlueCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 200px;
  width: 300px;
  height: 300px;
  background-color: #1a3c80;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 1;
`;

const GoldCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background-color: #d4af37;
  border-bottom-left-radius: 250px;
  border-radius: 0;
  opacity: 0.8;
  z-index: 1;
`;
