// Tracks.tsx
import React from "react";
import TrackCard from "./TrackCard";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../../styles/GlobalStyle";
const tracks = [
  {
    id: "classical-compiler",
    title: "Classical Compiler Techniques",
    description:
      "Classical compiler techniques for performance, codesize, debugging and software engineering",
    imageSrc: "./classical-compiler-tech.webp",
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
    id: "ai-ml",
    title: "AI/ML, DSLs",
    description:
      "Exploring the intersection of AI/ML with compiler technologies",
    imageSrc: "./ai-ml.webp",
    list: [
      "Compilers for AI/ML",
      "AI Frameworks (Tensorflow, Pytorch etc.)",
      "Machine Learning Model Optimization",
      "Optimizing compilers for Machine Learning workloads",
    ],
  },
  {
    id: "security",
    title: "SECURITY, VERIFICATION, TESTING",
    description:
      "Improving the security of workloads using static/dynamic analysis techniques and validating compilation transformations",
    imageSrc: "./security.webp",
    list: [
      "Improving the security of generated code",
      "Validating compiler optimizations (translation validation)",
      "Fuzzing Techniques",
      "Mutation Techniques",
    ],
  },
  {
    id: "web3-blockchain",
    title: "WEB3, Blockchain, Emerging Tech",
    description:
      "Compiler techniques for shaping the next generation of technologies",
    imageSrc: "./blockchain.webp",
    list: [
      "Programming language advancements to address Web3 challenges",
      "Verification of smart contracts using abstract interpretation (e.g., symbolic evaluation) techniques.",
      "Fuzz testing of smart contracts, fault injection etc using compiler techniques",
      "Compilers for quantum computers",
      "Anything else that doesn't fit into the other three categories but are interesting to the compiler community",
    ],
  },
];
const Tracks: React.FC = () => {
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
            id={track.id}
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
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
