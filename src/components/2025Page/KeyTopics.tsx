import styled from "styled-components";
import img from "../../assets/2025/kt.svg";
function KeyTopics() {
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
      <KeyTopicsSection>
        <TopicsHeader>
          <Title>Key Topics Shaping</Title>
          <Subtitle>Compiler Advancements</Subtitle>
        </TopicsHeader>

        <GlobeImage>
          <img
            src={img}
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
            <SubmissionDeadline>
              Submission Deadline : <i>To be announced</i>
            </SubmissionDeadline>
            <SubmitButton>Submit Now</SubmitButton>
          </SubmissionText>
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
  padding: 6rem;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
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
  grid-column: 4;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
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
  display: flex;
  justify-content: space-between;
  gap: 200px;
  /* max-width: 800px; */
`;

const SubmissionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SubmissionTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
`;

const SubmissionSubtitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  font-style: italic;
  color: #d83bd2;
  font-family: spectral;
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

  margin-top: 1rem;
  margin-bottom: 1rem;

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
