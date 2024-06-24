// Tracks.tsx
import React from "react";
import TrackCard from "./TrackCard";
import styled from "styled-components";

const Tracks: React.FC = () => {
  const tracks = [
    {
      title: "GENERAL COMPILER OPTIMIZATIONS",
      description:
        "Classical compiler techniques for performance, codesize, debugging and software engineering",
      imageSrc: "./card_bg.jpeg",
      list: [
        "Code Generation and optimization techniques",
        "Performance of runtime libraries (like standard libraries, high performance libraries)",
        "Any tools or products developed using compiler technologies",
      ],
    },
    {
      title: "AI/ML",
      description:
        "Exploring the intersection of AI/ML with compiler technologies",
      imageSrc: "./card_bg.jpeg",
      list: [
        "Compilers for AI/ML",
        "AI Frameworks (Tensorflow, Pytorch etc.)",
        "Machine Learning Model Optimization",
        "Optimizing compilers for Machine Learning workloads",
      ],
    },
    {
      title: "SECURITY",
      description:
        "Improving the security of workloads using static/dynamic analysis techniques and validating compilation transformations",
      imageSrc: "./card_bg.jpeg",
      list: [
        "Improving the security of generated code",
        "Validating compiler optimizations (translation validation)",
      ],
    },
    {
      title: "BLOCKCHAIN & WEB3",
      description:
        "Compiler techniques for shaping the next generation of the Web",
      imageSrc: "./card_bg.jpeg",
      list: [
        "Programming language advancements to address Web3 challenges",
        "Verification of smart contracts using abstract interpretation (e.g., symbolic evaluation) techniques.",
        "Fuzz testing, fault injection etc using compiler techniques",
      ],
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
            list={track.list}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 12rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
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

export default Tracks;
