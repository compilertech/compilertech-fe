// TrackCard.tsx
import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

interface InterestCardProps {
  title: string;
  description?: string;
  listItems?: string[];
}

const Card = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  height: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
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

const Title = styled.h4`
  color: ${({ theme }) => theme.cardTitle};
  font-family: Bebas Neue;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
  width: 100%;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 100;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${({ theme }) => theme.lightText};
`;

const ListItem = styled.li`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 100;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${({ theme }) => theme.lightText};
`;

const InterestCard: React.FC<InterestCardProps> = ({
  title,
  description,
  listItems,
}) => {
  return (
    <Card>
      <CardContent>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {listItems?.length && (
          <ul style={{ marginTop: "0.85rem" }}>
            {listItems.map((item) => {
              return <ListItem>{item}</ListItem>;
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default InterestCard;
