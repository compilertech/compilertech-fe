import React, { useState } from "react";
import styled from "styled-components";

interface TrackCardProps {
  title: string;
  description: string;
  imageSrc: string;
  list: string[];
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  description,
  imageSrc,
  list,
}) => {
  const [listLen, setListLen] = useState(3);
  const toggleListLen = () => {
    setListLen(listLen === 3 ? list.length : 3);
  };
  return (
    <Card>
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
        <List>
          {list.slice(0, listLen).map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
          <ReadToggle onClick={toggleListLen}>
            {listLen === 3 ? "read more" : "read less"}
          </ReadToggle>
        </List>
      </CardContent>
    </Card>
  );
};

const ReadToggle = styled.a`
  color: ${({ theme }) => theme.primary};
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
  @media (max-width: 768px) {
    flex-direction: column;
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
  @media (max-width: 768px) {
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
  padding-left: 1rem;
`;

export default TrackCard;
