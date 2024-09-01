import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../shared/Button";
import Modal from "../shared/Modal";
import { TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Section id="about">
      <TextWrapper>
        <Title>ABOUT</Title>
        <Description>
          The IICT (Innovations In Compiler Technology) workshop aims to bring
          together researchers, practitioners, and enthusiasts in the field of
          compiler technologies. This year's theme focuses on the cutting-edge
          advancements in compiler design, implementation, and optimization, and
          their impact on emerging software and hardware platforms. We invite
          presentation proposals for our upcoming workshop.
        </Description>
        <ButtonContainer>
          <Button onClick={toggleModal}>Get Updates</Button>
        </ButtonContainer>
        {isModalOpen && (
          <Modal
            title="Get Updates"
            formName="get-updates-form"
            description="Stay in the loop and don't miss a thing about this conference."
            onClose={toggleModal}
          />
        )}
      </TextWrapper>
      <ImageWrapper>
        <Image src="./about.webp" alt="About" />
      </ImageWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 7.5rem;
  padding: 0 180px;
  background-color: ${({ theme }) => theme.body};
  height: auto !important;
  transition: all 0.2s ease-in-out;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    margin-top: 3.75rem;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  padding: 0 4rem 0 0;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: clamp(40px, 5vw, 64px);
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  margin: 0 0 3.75rem 0;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 2rem;
  line-height: 24px;
  text-align: justify;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  max-width: 580px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 40px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 60px 0;
  }
`;

export default About;
