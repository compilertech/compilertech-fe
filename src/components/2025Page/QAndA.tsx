import React, { useState } from "react";
import styled from "styled-components";

interface AccordionContentProps {
  isOpen: boolean;
}

const Container = styled.div`
  background-color: #000000;
  color: white;
  width: 100%;
  padding: 6rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 40px;
`;

const LeftColumn = styled.div`
  flex: 0 0 30%;
`;

const RightColumn = styled.div`
  flex: 0 0 70%;
`;

const Title = styled.h2`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  margin-bottom: 10px;
  margin-left: 80px;
`;

const Subtitle = styled.h3`
  color: #d14ed5;
  font-style: italic;
  font-family: Spectral, sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  margin-left: 80px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0;
`;

const AccordionItem = styled.div`
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
`;

const Question = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const PlusIcon = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

const AccordionContent = styled.div<AccordionContentProps>`
  padding-bottom: ${({ isOpen }) => (isOpen ? "20px" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Answer = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
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
      answer:
        "Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit. Hendrerit a donec platea nulla pretium venenatis enim",
    },
    {
      question: "Is there a virtual participation option?",
      answer:
        "Yes, we offer virtual participation through our dedicated event platform. Attendees can join live sessions, participate in Q&As, and network with other participants remotely.",
    },
    {
      question: "Are there any sponsorship or exhibitor opportunities?",
      answer:
        "We offer various sponsorship packages and exhibitor booths to showcase your products and services. Please contact our sponsorship team for more information.",
    },
    {
      question: "Who do I contact for more information?",
      answer:
        "For general inquiries, please contact our event team at events@example.com or call our helpline at +1-555-123-4567.",
    },
    {
      question: "Will meals be provided during the event?",
      answer:
        "Yes, we provide breakfast, lunch, and refreshments during coffee breaks. Dinner is included on the main conference day. We accommodate dietary restrictions with advance notice.",
    },
  ];

  const toggleAccordion = (index: number): void => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Container>
      <ContentWrapper>
        <LeftColumn>
          <Title>Your Questions,</Title>
          <Subtitle>Answered</Subtitle>
        </LeftColumn>
        <RightColumn>
          {faqItems.map((item, index) => (
            <React.Fragment key={index}>
              <AccordionItem>
                <AccordionHeader onClick={() => toggleAccordion(index)}>
                  <Question>{item.question}</Question>
                  <PlusIcon>{openItem === index ? "−" : "+"}</PlusIcon>
                </AccordionHeader>
                <AccordionContent isOpen={openItem === index}>
                  <Answer>{item.answer}</Answer>
                </AccordionContent>
              </AccordionItem>
              <Divider />
            </React.Fragment>
          ))}
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
};

export default QAndA;
