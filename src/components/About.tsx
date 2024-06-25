import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <Section id="about">
      <TextWrapper>
        <Title>ABOUT</Title>
        <Description>
          The Compiler Technology Workshop organizing committee invites
          researchers, practitioners, and enthusiasts in the field of compiler
          technologies to submit presentation proposals for our upcoming
          workshop. This year's theme focuses on the cutting-edge advancements
          in compiler design, implementation, and optimization, and their impact
          on emerging software and hardware platforms.
        </Description>
        <Form>
          <Button>GET UPDATES</Button>
        </Form>
      </TextWrapper>
      <ImageWrapper>
        <Image src="./about.jpeg" alt="About" />
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
  gap: 2rem;
  height: auto !important;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: revert;
    margin: revert;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-size: clamp(40px, 5vw, 64px);
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  margin: 3.75rem 0;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  @media (max-width: 768px) {
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-family: "Bebas Neue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: center;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: 768px) {
    width: 40%;
    align-self: center;
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
  border-radius: 40px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 60px 0;
  }
`;

export default About;
