// Tracks.tsx
import React from "react";
import InterestCard from "./InterestCard";
import styled from "styled-components";

const Tracks: React.FC = () => {
  const tracks = [
    {
      title: "Novel Compiler Optimizations",
      description:
        "Techniques for improving performance, energy efficiency, code size, and security.",
    },
    {
      title: "Domain-Specific Compilers",
      description:
        "Design and implementation of compilers tailored for specific applications or hardware architectures (e.g., AI, machine learning, high-performance computing).",
    },
    {
      title: "Compiler Frameworks and Tools",
      description:
        "Advancements in compiler infrastructure, intermediate representations, program analysis, and transformation tools.",
    },
    {
      title: "Just-in-Time (JIT) Compilation",
      description:
        "Techniques for dynamic code generation and optimization, adaptive compilation, and runtime feedback.",
    },
    {
      title: "Programming Language Design and Implementation",
      description:
        "Compiler support for new or evolving programming languages, including type systems, concurrency models, and memory management.",
    },
    {
      title: "Hardware-Software Co-design",
      description:
        "Compiler optimizations and techniques for emerging hardware architectures, such as heterogeneous systems, FPGAs, and accelerators.",
    },
    {
      title: "Compiler Verification and Correctness",
      description:
        "Methods for ensuring the reliability and safety of compiler transformations and optimizations.",
    },
    {
      title: "Compiler Education and Outreach",
      description:
        "Approaches for teaching compiler concepts, promoting diversity and inclusion in the compiler community, and fostering collaboration.",
    },
  ];

  return (
    <Section id="interests">
      <Title>TOPICS OF INTEREST</Title>
      <CardContainer>
        {tracks.map((track, index) => (
          <InterestCard
            key={index}
            title={track.title}
            description={track.description}
          />
        ))}
      </CardContainer>
    </Section>
  );
};

const Section = styled.section`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0 11.25rem;
  margin-top: 7.5rem;
  @media (max-width: 786px) {
    margin-top: 3.75rem;
    width: 90%;
    padding: 0;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  letter-spacing: 4px;
  margin-bottom: 1.875rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 27px;
  grid-row-gap: 52px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

export default Tracks;
