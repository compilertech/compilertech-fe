// TrackCard.tsx
import React from "react";
import styled from "styled-components";

interface InterestCardProps {
  title: string;
  description: string;
}

const Card = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.p`
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.text};
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const Description = styled.p`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

const InterestCard: React.FC<InterestCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
};

export default InterestCard;
