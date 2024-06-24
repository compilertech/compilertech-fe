// TrackCard.tsx
import React from "react";
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
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;

const ComingSoon = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Location = styled.div`
  font-size: 14px;
  color: white;
  margin-top: 10px;
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
`;

const Title = styled.p`
  margin: 0 0 10px 0;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-weight: 100;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.text};
`;

const List = styled.ul`
  font-family: "Satoshi";
  font-weight: 100;
  line-height: 1.7rem;
`;

export default TrackCard;
