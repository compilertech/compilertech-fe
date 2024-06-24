import React from "react";
import styled from "styled-components";

const Sponsors: React.FC = () => {
  return (
    <Section id="sponsors">
      <Title>SPONSOR US</Title>
      <Description>
        We are looking for sponsors! Your support will help us deliver a
        high-quality, impactful workshop, fostering the next wave of innovation
        in compiler technology. Join us in making this event a remarkable
        success!
      </Description>
      <Button>SPONSOR US</Button>
    </Section>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  padding: 1rem 3rem;

  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  padding-bottom: 2rem;
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: justify;
  color: ${({ theme }) => theme.text};
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default Sponsors;
