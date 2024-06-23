// Tracks.tsx
import React from "react";
import TrackCard from "./TrackCard";
import styled from "styled-components";

const Container = styled.section`
  padding: 4rem 12rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  @media (max-width: 768px) {
    padding: 4rem 8rem;
  }
`;

const Heading = styled.p`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 40px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 4px;
`;

const Tracks: React.FC = () => {
  const tracks = [
    {
      title: "GENERAL COMPILER OPTIMIZATIONS",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.",
      imageSrc: "./card_bg.jpeg",
    },
    {
      title: "AI/ML",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.",
      imageSrc: "./card_bg.jpeg",
    },
    {
      title: "SECURITY",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.",
      imageSrc: "./card_bg.jpeg",
    },
    {
      title: "BLOCKCHAIN & WEB3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim. Amet ul nunc eu fusce sit venenatis amet nunc egestas. Sit eget integer consequat odio fringilla massa sed pulvinar.",
      imageSrc: "./card_bg.jpeg",
    },
  ];

  return (
    <Container id="tracks">
      <Heading>TRACKS</Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            title={track.title}
            description={track.description}
            imageSrc={track.imageSrc}
          />
        ))}
      </div>
    </Container>
  );
};

export default Tracks;
