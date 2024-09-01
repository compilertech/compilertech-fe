import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../../styles/GlobalStyle";

interface TrackCardProps {
  title: string;
  description: string;
  imageSrc: string;
  list: string[];
  id: string;
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  description,
  imageSrc,
  list,
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleListLen = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.style.maxHeight = isExpanded
        ? `${listRef.current.scrollHeight}px`
        : "5.5rem";
    }
  }, [isExpanded]);

  return (
    <Card id={`tracks-${id}`}>
      <CardImage>
        <img src={imageSrc} alt={title} />
      </CardImage>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <List ref={listRef}>
          {list.slice(0, isExpanded ? list.length : 2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
        {list.length > 2 && (
          <ReadToggle onClick={toggleListLen}>
            <span>{isExpanded ? "read less" : "read more"}</span>
          </ReadToggle>
        )}
      </CardContent>
    </Card>
  );
};

const ReadToggle = styled.div`
  margin-top: 5px;
  font-family: Satoshi;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  span:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Card = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    width: 100%;
  }
`;

const CardImage = styled.div`
  width: 25%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: 40%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 15.125rem;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const Title = styled.p`
  margin: 0 0 10px 0;
  font-size: clamp(40px, 5vw, 48px);
  letter-spacing: 1px;
  color: ${({ theme }) => theme.cardTitle};
  width: 100%;
`;

const Description = styled.p`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-weight: 100;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.lightText};
`;

const List = styled.ul`
  margin-top: 5px;
  font-family: "Satoshi";
  font-weight: 100;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.lightText};
  padding-left: 1.25rem;
  overflow: hidden;
  max-height: 4.5rem;
  transition: all 0.2s ease-in-out;
`;

export default TrackCard;
