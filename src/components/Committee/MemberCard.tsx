// TrackCard.tsx
import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import { RiExternalLinkLine } from "react-icons/ri";

export interface MemberCardProps {
  id: string;
  image: string;
  name: string;
  institute: string;
  position: string;
  link: string;
}

const Icon = styled.div`
  visibility: hidden;
  color: ${({ theme }) => theme.primary};
  margin-left: 20px;
  cursor: pointer;
  padding-right: 10px;
  transition: visibility 0.2s ease-in-out;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease-in-out;
  height: auto;
  box-sizing: border-box;
  gap: 16px;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover ${Icon} {
    visibility: visible;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
    height: 130px;
    width: 100% !important;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex: 1;
`;

const Name = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.32px;
  color: ${({ theme }) => theme.primary};
  max-width: 100%;
  word-wrap: break-word; /* Allows the text to wrap within the container */

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 19px;
  }
`;

const Institute = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.32px;
  color: ${({ theme }) => theme.text};
  max-width: 100%;
  word-wrap: break-word; /* Allows the text to wrap within the container */

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    line-height: 24px;
    font-size: 16px;
  }
`;

const Position = styled.div`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.32px;
  color: ${({ theme }) => theme.lightText};
  max-width: 100%;
  word-wrap: break-word; /* Allows the text to wrap within the container */
  line-height: 24px; /* 150% */

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    line-height: 21px;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.imageborder};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.6rem;
  height: 7.6rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 6rem;
    height: 6rem;
  }
`;

const MemberCard: React.FC<MemberCardProps> = ({
  id,
  image,
  name,
  institute,
  position,
  link,
}) => {
  return (
    <Card>
      <Wrapper>
        <img src={image} alt={`${name}'s profile`} />
      </Wrapper>
      <CardContent key={id}>
        <NameWrapper>
          <Name>{name}</Name>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon>
              <RiExternalLinkLine size={25} />
            </Icon>
          </a>
        </NameWrapper>
        <Institute>{institute}</Institute>
        <Position>{position}</Position>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
