// TrackCard.tsx
import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

export interface MemberCardProps {
  id: string;
  image: string;
  name: string;
  institute?: string;
  position?: string;
}

const Card = styled.div`
  display: flex;
  align-items:center;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  height: 100%;
  padding: 10px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
`;
const Name = styled.div`
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 4.5vw;
  }
`;

const Institute = styled.div`
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-align: left;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 3.5vw;
  }
`;

const Position = styled.div`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2.7vw;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #e7e7e7;
  width: 7.5rem;
  height: 7.5rem;
`;

const MemberCard: React.FC<MemberCardProps> = ({
  id,
  image,
  name,
  institute,
  position,
}) => {
  return (
    <Card>
      <Wrapper>
        <img src={image} />
      </Wrapper>
      <CardContent key={id}>
        <Name>{name}</Name>
        <Institute>{institute}</Institute>
        <Position>{position}</Position>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
