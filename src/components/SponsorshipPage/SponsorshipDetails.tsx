import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import icon1 from "../../assets/2025/icon1.svg";

function SponsorshipDetails() {
  const topics = [
    {
      icon: icon1,
      title: "Novel Compiler Optimizations",
      description:
        "Techniques for improving performance, energy efficiency, code size, and security.",
    },
    {
      icon: icon1,
      title: "Domain-Specific Compilers",
      description:
        "Design and implementation of compilers tailored for specific applications or hardware architectures (e.g. AI, machine learning, high-performance computing).",
    },
    {
      icon: icon1,
      title: "Compiler Frameworks and Tools",
      description:
        "Advancements in compiler infrastructure, intermediate representations, program analysis, and transformation tools.",
    },
    {
      icon: icon1,
      title: "Just-in-Time (JIT) Compilation",
      description:
        "Techniques for dynamic code generation and optimization, adaptive compilation, and runtime feedback.",
    },
  ];

  return (
    <TopicsContainer>
      <WhySponsorsSection>
        <TopicsHeader>
          <Title>Why Sponsor</Title>
          <Subtitle>IICT 2025?</Subtitle>
        </TopicsHeader>
        <TopicsGrid>
          {topics.map((topic, index) => (
            <TopicCard key={index}>
              <TopicIcon src={topic.icon} alt={topic.title} />
              <TopicTitle>{topic.title}</TopicTitle>
              <TopicDescription>{topic.description}</TopicDescription>
            </TopicCard>
          ))}
        </TopicsGrid>
      </WhySponsorsSection>
    </TopicsContainer>
  );
}

export default SponsorshipDetails;

const TopicsContainer = styled.div`
  background-color: #000;
  color: white;
  padding: 6rem;
  padding-top: 4rem;
  position: relative;
  width: 100%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 1.5rem 1rem;
  }
`;

const WhySponsorsSection = styled.div`
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 2rem;
  }
`;

const TopicsHeader = styled.div`
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.2rem;
  font-style: italic;
  color: #d83bd2;
  margin-top: 10px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TopicCard = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  border: 1px solid #d83bd2;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.25rem;
  }
`;

const TopicIcon = styled.img`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  background-color: #232928;
  width: 45px;
  height: 45px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40px;
    height: 40px;
  }
`;

const TopicTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.1rem;
  }
`;

const TopicDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.85rem;
  }
`;
