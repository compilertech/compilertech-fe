import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

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
    <Section id="benefits">
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
    </Section>
  );
};

const Section = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7.5rem;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 3.75rem;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  color: ${({ theme }) => theme.primary};
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: left;
  margin-bottom: 3.75rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    margin-bottom: 1.875rem;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 2rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  width: 33.33%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
  color: ${({ theme }) => theme.lightText};
  width: 70%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
  color: ${({ theme }) => theme.cardTitle};
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`;

export default Benefits;
