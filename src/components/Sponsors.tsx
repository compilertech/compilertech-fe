import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";

const Sponsors: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Section id="sponsors">
      <Title>SPONSOR US</Title>
      <Description>
        We are looking for sponsors! Your support will help us deliver a
        high-quality, impactful workshop, fostering the next wave of innovation
        in compiler technology. Join us in making this event a remarkable
        success!
      </Description>
      <Button width={50} onClick={toggleModal}>
        Become a sponsor
      </Button>
      {isModalOpen && (
        <Modal
          title="Sponsor us"
          description="Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit."
          onClose={toggleModal}
        />
      )}
    </Section>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 7.5rem;
  padding: 0 11.75rem;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
    margin-top: 3.75rem;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 3.75rem;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 786px) {
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
  color: ${({ theme }) => theme.lightText};
  text-align: center;
  margin-bottom: 3.75rem;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

export default Sponsors;
