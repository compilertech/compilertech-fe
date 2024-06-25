import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";

const Organizer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Section id="organizer">
      <ImageWrapper>
        <Image src="./about.jpeg" alt="organizer" />
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
              description="Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit."
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
  @media (max-width: 768px) {
    margin-top: 3.75rem;
    padding: revert;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const Title = styled.p`
  font-size: clamp(38px, 5vw, 64px);
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  font-family: "Bebas Neue", sans-serif;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 2rem;
  line-height: 1.7rem;
  font-weight: 100;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 786px) {
    display: none;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 0 40px;
  transition: border-radius 0.2s ease-in-out;
  &:hover {
    border-radius: 0 60px;
  }
`;

export default Organizer;
