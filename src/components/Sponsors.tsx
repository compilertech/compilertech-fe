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
      <Button>Become a sponsor</Button>
    </Section>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 3.75rem;
  padding: 0 11.75rem;
  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
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
  letter-spacing: 0.02em;
  text-align: justify;
  color: ${({ theme }) => theme.lightText};
  text-align: center;
  margin-bottom: 3.75rem;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    text-align: justify;
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
    width: 60%;
    align-self: center;
  }
`;

export default Sponsors;
