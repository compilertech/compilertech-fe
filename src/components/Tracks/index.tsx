// Tracks.tsx
import React from "react";
import TrackCard from "./TrackCard";
import styled from "styled-components";

const Tracks: React.FC = () => {
  const tracks = [
    {
      title: "Classical Compiler Techniques",
      description:
        "Classical compiler techniques for performance, codesize, debugging and software engineering",
      imageSrc: "./card_bg.jpeg",
      list: [
        "Code Generation and optimization techniques",
        "Performance of runtime libraries (like standard libraries, high performance libraries)",
        "Any tools or products developed using compiler technologies",
        "Software performance tracing",
        "Compiler flags, annotations and remarks to understand and improve performance",
        "Program synthesis",
        "SuperOptimizers",
      ],
    },
    {
      title: "AI/ML, DSLS",
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
      title: "WEB3/Blockchain",
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
    <Section id="tracks">
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
    </Section>
  );
};

const Section = styled.section`
  margin-top: 7.5rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0 11.25rem;
  @media (max-width: 768px) {
    padding: 0;
    width: 90%;
    margin-top: 3.75rem;
  }
`;

const Heading = styled.p`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 1.75rem;
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 80px;
  letter-spacing: 4px;
`;

export default Tracks;
