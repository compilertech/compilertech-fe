import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import img from "../../assets/2025/kt.svg";
import icon1 from "../../assets/2025/icon1.svg";
import icon2 from "../../assets/2025/icon2.png";
import icon3 from "../../assets/2025/icon3.svg";
import icon4 from "../../assets/2025/icon4.svg";
import icon5 from "../../assets/2025/icon5.svg";
import icon6 from "../../assets/2025/icon6.svg";
import icon7 from "../../assets/2025/icon7.svg";
import icon8 from "../../assets/2025/icon8.svg";

function KeyTopics() {
  const topics = [
    {
      icon: icon1,
      title: "Novel Compiler Optimizations",
      description:
        "Techniques for improving performance, energy efficiency, code size, and security.",
    },
    {
      icon: icon2,
      title: "Domain-Specific Compilers",
      description:
        "Design and implementation of compilers tailored for specific applications or hardware architectures (e.g. AI, machine learning, high-performance computing).",
    },
    {
      icon: icon3,
      title: "Compiler Frameworks and Tools",
      description:
        "Advancements in compiler infrastructure, intermediate representations, program analysis, and transformation tools.",
    },
    {
      icon: icon4,
      title: "Just-in-Time (JIT) Compilation",
      description:
        "Techniques for dynamic code generation and optimization, adaptive compilation, and runtime feedback.",
    },
    {
      icon: icon5,
      title: "Programming Language Design & Implementation",
      description:
        "Compiler support for new or evolving programming languages, including type systems, concurrency models, and memory management.",
    },
    {
      icon: icon6,
      title: "Hardware-Software Co-design",
      description:
        "Compiler optimizations and techniques for emerging hardware architectures, such as heterogeneous systems, FPGAs, and accelerators.",
    },
    {
      icon: icon7,
      title: "Compiler Verification and Correctness",
      description:
        "Methods for ensuring the reliability and safety of compiler transformations and optimizations.",
    },
    {
      icon: icon8,
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
              <TopicIcon src={topic.icon} alt={topic.title} />
              <TopicTitle>{topic.title}</TopicTitle>
              <TopicDescription>{topic.description}</TopicDescription>
            </TopicCard>
          ))}
        </TopicsGrid>
      </KeyTopicsSection>

      <SubmissionSection>
        <SubmissionContent>
          <ColumnLeft>
            <SubmissionTitle>Submission</SubmissionTitle>
            <SubmissionSubtitle>Guidelines</SubmissionSubtitle>
          </ColumnLeft>

          <ColumnRight>
            {/* <SubmissionText>
              Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
              vivamus mauris elit. Hendrerit a donec platea nulla pretium
              venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
              egestas. Sit eget integer consequat odio fringilla massa sed
              pulvinar dignissim. Faucibus est in tincidunt cras egestas duis
              dui eros. Velit tempus scelerisque facilisis at amet habitant
              mattis aenean. Vitae quisque enim laoreet urna dictum nunc
              vestibulum.
            </SubmissionText> */}
            <SubmissionDeadline>
              Submission Deadline : <em>To be announced. Coming soon…</em>
            </SubmissionDeadline>
            {/* <SubmitButton>Submit Now</SubmitButton> */}
          </ColumnRight>
        </SubmissionContent>
      </SubmissionSection>
    </TopicsContainer>
  );
}

export default KeyTopics;

// Styled Components
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

const KeyTopicsSection = styled.div`
  margin-bottom: 3rem;

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
  font-family: Poppins;
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
  font-family: Spectral;
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 1.5rem;
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

const SubmissionSection = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  border: 1px solid #1e3a8a;
  border-radius: 12px;
  border: 0.5px solid #ffffff;
  overflow: hidden;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 8px;
  }
`;

const SubmissionContent = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  background-color: #f9f8f50d;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    text-align: center;
    padding: 1.75rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 1.25rem;
  }
`;

const ColumnLeft = styled.div`
  flex: 0 0 316px; /* Fixed width for the left column */
  margin-right: 43px; /* Space between columns */

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex: 1 1 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const ColumnRight = styled.div`
  flex: 1; /* Take remaining space */

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
    text-align: center;
  }
`;

const SubmissionTitle = styled.h2`
  font-family: Poppins;
  font-weight: 400;
  font-size: 36px;
  margin: 0;

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

const SubmissionSubtitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  font-style: italic;
  color: #d83bd2;
  font-family: Spectral;
  margin-top: 10px;
  margin-bottom: 0;

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

const SubmissionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SubmissionDeadline = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: left;

  em {
    font-style: italic;
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.7rem 1.25rem;
    font-size: 0.9rem;
  }
`;
