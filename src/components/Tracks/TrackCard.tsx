import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

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
        <div className="overlay">
          <ComingSoon>COMING SOON</ComingSoon>
          <Location>Bangalore Only</Location>
        </div>
      </CardImage>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <List ref={listRef}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
        {list.length > 3 && (
          <ReadToggle onClick={toggleListLen}>
            {isExpanded ? "read less" : "read more"}
          </ReadToggle>
        )}
      </CardContent>
    </Card>
  );
};

const ReadToggle = styled.span`
  font-family: Satoshi;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Card = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-family: "Bebas Neue", sans-serif;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  transition: height 0.2s ease-in-out;
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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(232, 229, 229, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: 40%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 15.125rem;
  }
`;

const ComingSoon = styled.p`
  font-size: clamp(40px, 5vw, 48px);
  color: ${({ theme }) => theme.primary};
`;

const Location = styled.p`
  font-size: clamp(24px, 5vw, 36px);
  color: #000;
  margin-top: 10px;
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
  font-family: "Satoshi";
  font-weight: 100;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.lightText};
  padding-left: 1.25rem;
  overflow: hidden;
  max-height: 4.5rem;
  transition: max-height 0.3s ease-in-out;
`;

export default TrackCard;
