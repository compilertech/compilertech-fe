import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <Section id="about">
      <ContentWrapper>
        <TextWrapper>
          <Title>ABOUT</Title>
          <Description>
            The Compiler Technology Workshop organizing committee invites
            researchers, practitioners, and enthusiasts in the field of compiler
            technologies to submit presentation proposals for our upcoming
            workshop. This year's theme focuses on the cutting-edge advancements
            in compiler design, implementation, and optimization, and their
            impact on emerging software and hardware platforms.
          </Description>
          <Form>
            <Input type="email" placeholder="Email address" />
            <Button>GET UPDATES</Button>
          </Form>
        </TextWrapper>
        <ImageWrapper>
          <Image src="./about.jpeg" alt="About" />
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.body};
  height: auto !important;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(38px, 5vw, 64px);
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-family: "Bebas Neue", sans-serif;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  line-height: 1.7rem;
  letter-spacing: 0.125rem;
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

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-right: 1rem;
    margin-bottom: 0;
    width: 70%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-family: "Bebas Neue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: left;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 40px 0;
`;

export default About;
