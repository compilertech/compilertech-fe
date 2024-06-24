import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  color: ${({ theme }) => theme.primary};
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 0.04em;
  text-align: left;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0rem;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  width: 33.33%;
  @media (max-width: 768px) {
    width: 100%;
  }
  img {
    filter: ${({ theme }) => theme.filter};
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h4`
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: "./icons/benefit_1.svg",
      title: "Networking Opportunities",
      description:
        "Connect with leading researchers, practitioners, and industry experts in the field of compiler technologies.",
    },
    {
      icon: "./icons/benefit_2.svg",
      title: "Cutting-Edge Research",
      description:
        "Gain insights into the latest advancements and future trends in compiler design and optimization.",
    },
    {
      icon: "./icons/benefit_3.svg",
      title: "Collaboration",
      description:
        "Foster collaboration and exchange ideas with peers in the compiler community.",
    },
  ];
  return (
    <Container>
      <Title>CONFERENCE BENEFITS</Title>
      <RowContainer>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <img src={benefit.icon} />
            <CardTitle>{benefit.title}</CardTitle>
            <Description>{benefit.description}</Description>
          </BenefitCard>
        ))}
      </RowContainer>
    </Container>
  );
};

export default Benefits;
