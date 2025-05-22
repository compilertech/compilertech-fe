import React, { useState } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

interface AccordionContentProps {
  isOpen: boolean;
}

const Container = styled.div`
  background-color: #000000;
  color: white;
  width: 100%;
  padding: 6rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 30px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 30%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    margin-bottom: 1.5rem;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 70%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }
`;

const Title = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  margin-bottom: 10px;
  margin-left: 80px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    margin-left: 40px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    margin-left: 0;
  }
`;

const Subtitle = styled.h3`
  color: #d14ed5;
  font-style: italic;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  margin-left: 80px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    margin-left: 40px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    margin-left: 0;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0;
`;

const AccordionItem = styled.div`
  padding: 25px 0;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px 0;
  }
`;

const Question = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 18px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const PlusIcon = styled.span`
  font-size: 24px;
  font-weight: 300;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 22px;
  }
`;

const AccordionContent = styled.div<AccordionContentProps>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.5s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  margin-top: ${({ isOpen }) => (isOpen ? "10px" : "0")};
`;

const Answer = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
    line-height: 1.5;
  }
`;

interface FaqItem {
  question: string;
  answer: string;
}

const QAndA: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: "Are there any travel or accommodation recommendations?",
      answer: "To be shared soon.",
    },
    {
      question: "Is there a virtual participation option?",
      answer:
        "This ACM event is an in-person and not a hybrid event. We recommend the participants to be present in person to make the best out of this unique networking opportunity.",
    },
    {
      question: "Are there any sponsorship or exhibitor opportunities?",
      answer:
        "Absolutely! We see IICT as a valuable platform to strengthen collaboration between industry and academia, and to help grow the compiler community in India and beyond. Your support plays a crucial role in making this initiative more impactful and smoothly executed.\nFor details on sponsorship tiers and associated benefits, please contact us at support@compilertech.org.",
    },
    {
      question: "Who do I contact for more information?",
      answer: "Please send your queries to support@compilertech.org",
    },
    {
      question: "What is included in the registration?",
      answer:
        "While final details are still being confirmed, your registration currently includes breakfast, tea breaks, lunch, and evening snacks on both days of the event. Additionally, attendees will receive some fun souvenirs — including custom laptop stickers — as a memento of the experience!",
    },
  ];

  const toggleAccordion = (index: number): void => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Container id="faqs">
      <ContentWrapper>
        <LeftColumn>
          <Title>Your Questions,</Title>
          <Subtitle>Answered</Subtitle>
        </LeftColumn>
        <RightColumn>
          {faqItems.map((item, index) => (
            <React.Fragment key={index}>
              <AccordionItem
                style={index === 0 ? { padding: "0 0 25px 0" } : {}}
              >
                <AccordionHeader onClick={() => toggleAccordion(index)}>
                  <Question>{item.question}</Question>
                  <PlusIcon>{openItem === index ? "-" : "+"}</PlusIcon>
                </AccordionHeader>
                <AccordionContent isOpen={openItem === index}>
                  <Answer>{item.answer}</Answer>
                </AccordionContent>
              </AccordionItem>
              {index !== faqItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
};

export default QAndA;
