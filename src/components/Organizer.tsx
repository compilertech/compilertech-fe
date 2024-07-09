import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const Organizer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Section id="organizer">
      <ImageWrapper>
        <Image src="./organizer.webp" alt="organizer" />
      </ImageWrapper>
      <TextWrapper>
        <Title>ORGANIZER</Title>
        <Description>
          We believe this workshop will become a venue that brings together
          compiler engineers, students and professors from all over India. We
          have a strong organizing team with engineers from Google, AMD, Nvidia
          and TCS Research who are experienced in organizing technical events
          working tirelessly to make the workshop successful.
        </Description>
        <ButtonContainer>
          <Button onClick={toggleModal}>Get updates</Button>
          {isModalOpen && (
            <Modal
              title="Get Updates"
              description="Stay in the loop and don't miss a thing about this conference."
              onClose={toggleModal}
            />
          )}
        </ButtonContainer>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  height: auto;
  margin-top: 7.5rem;
  padding: 0 11.25rem;
  width: 100%;
  transition: background 0.2s ease-in-out;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 3.75rem;
    padding: revert;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  padding: 0 0 0 5rem;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: clamp(38px, 5vw, 64px);
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  font-family: "Bebas Neue", sans-serif;
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    justify-content: center;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const Image = styled.img`
  max-width: 520px;
  border-radius: 0 40px;
  transition: border-radius 0.2s ease-in-out;
  &:hover {
    border-radius: 0 60px;
  }
`;

export default Organizer;
