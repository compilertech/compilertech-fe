// TrackCard.tsx
import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import { RiExternalLinkLine } from "react-icons/ri";

export interface MemberCardProps {
  id: string;
  image: string;
  name: string;
  institute?: string;
  position?: string;
}
const Icon = styled.div`
  visibility: hidden;
  color:${({ theme }) => theme.primary};
  margin-left:10px;
  cursor: pointer;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid transparent;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  &:hover ${Icon} {
    visibility: visible;
  }
`;

const NameWrapper = styled.div`
  display:flex;
  align-items:center;
`

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
  border: 1px solid ${({ theme }) => theme.imageborder};
  border-radius: 5px;
  width: 7.6rem;
  height: 7.6rem;
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
        <img src={image} alt={`${name}'s profile`} />
      </Wrapper>
      <CardContent key={id}>
        <NameWrapper>
        <Name>{name}</Name>
        <Icon>
          <RiExternalLinkLine size={25}/>
        </Icon>
        </NameWrapper>
        
        <Institute>{institute}</Institute>
        <Position>{position}</Position>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
