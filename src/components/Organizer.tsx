import React from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";

const Organizer: React.FC = () => {
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
        <Form>
          <Button>Get Updates</Button>
        </Form>
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
  @media (max-width: 768px) {
    margin-top: 3.75rem;
    padding: revert;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
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
  letter-spacing: 1px;
  font-weight: 100;
  text-align: justify;
`;

const Form = styled.form`
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
`;

export default Organizer;
