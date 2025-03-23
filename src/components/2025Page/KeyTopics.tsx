import React from "react";
import styled from "styled-components";

function KeyTopics() {
  const stats = [
    { number: "20+", description: "Key note Speakers" },
    { number: "300+", description: "Attendees from various domains" },
    { number: "50+", description: "Partners and sponsors" },
    { number: "200+", description: "Presenters" },
  ];

  const topics = [
    {
      icon: "🔍",
      title: "Novel Compiler Optimizations",
      description:
        "Techniques for improving performance, energy efficiency, code size, and security.",
    },
    {
      icon: "🎯",
      title: "Domain-Specific Compilers",
      description:
        "Design and implementation of compilers tailored for specific applications or hardware architectures (e.g. AI, machine learning, high-performance computing).",
    },
    {
      icon: "🔧",
      title: "Compiler Frameworks and Tools",
      description:
        "Advancements in compiler infrastructure, intermediate representations, program analysis, and transformation tools.",
    },
    {
      icon: "💡",
      title: "Just-in-Time (JIT) Compilation",
      description:
        "Techniques for dynamic code generation and optimization, adaptive compilation, and runtime feedback.",
    },
    {
      icon: "📚",
      title: "Programming Language Design & Implementation",
      description:
        "Compiler support for new or evolving programming languages, including type systems, concurrency models, and memory management.",
    },
    {
      icon: "🔄",
      title: "Hardware-Software Co-design",
      description:
        "Compiler optimizations and techniques for emerging hardware architectures, such as heterogeneous systems, FPGAs, and accelerators.",
    },
    {
      icon: "🔐",
      title: "Compiler Verification and Correctness",
      description:
        "Methods for ensuring the reliability and safety of compiler transformations and optimizations.",
    },
    {
      icon: "🎓",
      title: "Compiler Education and Outreach",
      description:
        "Approaches for teaching compiler concepts, promoting diversity and inclusion in the compiler community, and fostering collaboration.",
    },
  ];

  return (
    <TopicsContainer>
      <StatsSection>
        <SectionTitle>Our stats</SectionTitle>
        <Divider />
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatDescription>{stat.description}</StatDescription>
            </StatItem>
          ))}
        </StatsContainer>
      </StatsSection>

      <KeyTopicsSection>
        <TopicsHeader>
          <Title>Key Topics Shaping</Title>
          <Subtitle>Compiler Advancements</Subtitle>
        </TopicsHeader>

        <GlobeImage>
          <img
            src="/globe-circuit.jpg"
            alt="Digital globe with circuit connections"
            width="100%"
          />
        </GlobeImage>

        <TopicsGrid>
          {topics.map((topic, index) => (
            <TopicCard key={index}>
              <TopicIcon>{topic.icon}</TopicIcon>
              <TopicTitle>{topic.title}</TopicTitle>
              <TopicDescription>{topic.description}</TopicDescription>
            </TopicCard>
          ))}
        </TopicsGrid>
      </KeyTopicsSection>

      <SubmissionSection>
        <SubmissionContent>
          <SubmissionHeader>
            <SubmissionTitle>Submission</SubmissionTitle>
            <SubmissionSubtitle>Guidelines</SubmissionSubtitle>
          </SubmissionHeader>

          <SubmissionText>
            Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
            vivamus mauris elit. Hendrerit a donec platea nulla pretium
            venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
            egestas. Sit eget integer consequat odio fringilla massa sed
            pulvinar dignissim. Faucibus est in tincidunt cras egestas duis dui
            eros. Velit tempus scelerisque facilisis at amet habitant mattis
            aenean. Vitae quisque enim laoreet urna dictum nunc vestibulum.
          </SubmissionText>

          <SubmissionDeadline>
            Submission Deadline : <i>To be announced</i>
          </SubmissionDeadline>

          <SubmitButton>Submit Now</SubmitButton>
        </SubmissionContent>
      </SubmissionSection>
    </TopicsContainer>
  );
}

export default KeyTopics;

// Styled Components
const TopicsContainer = styled.div`
  background-color: #0a0a0a;
  color: white;
  padding: 3rem;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1rem 0 2rem 0;
  width: 100%;
`;

const StatsSection = styled.div`
  margin-bottom: 3rem;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 150px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const KeyTopicsSection = styled.div`
  margin-bottom: 3rem;
`;

const TopicsHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  font-style: italic;
  color: #d83bd2;
  margin: 0;
`;

const GlobeImage = styled.div`
  border: 2px solid #1e3a8a;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TopicCard = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  border: 1px solid #d83bd2;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopicIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TopicTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
`;

const TopicDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
`;

const SubmissionSection = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  border: 1px solid #1e3a8a;
  border-radius: 12px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SubmissionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SubmissionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SubmissionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;

const SubmissionSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
  color: #d83bd2;
  margin: 0;
`;

const SubmissionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SubmissionDeadline = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  i {
    font-style: italic;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
