import React from "react";
import styled from "styled-components";

const SubmissionReview: React.FC = () => {
  return (
    <Section id="submissions-and-review">
      <Column>
        <Title>SUBMISSION GUIDELINES</Title>
        <Text>
          <ul>
            <li>
              <Bold>Presentation Format:</Bold> Proposals should include a
              title, abstract (250 words maximum), and a brief outline of the
              proposed presentation (500 words maximum). Please indicate the
              preferred presentation format (oral presentation, poster
              presentation, or both).
            </li>
            <li>
              <Bold>Submision Deadliine: </Bold>TBD
            </li>
          </ul>
        </Text>
      </Column>
      <Column>
        <Title>REVIEW PROCESS</Title>
        <Text>
          <ul>
            <li>
              <Bold>Process: </Bold>All submissions will undergo a rigorous
              review process by a program committee of experts in the field.
              Selection criteria will include relevance to the conference theme,
              technical merit, clarity of presentation, and potential impact on
              the field.
            </li>
            <li>
              <Bold>Notification of acceptance:</Bold> TBD
            </li>
          </ul>
        </Text>
      </Column>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: auto;
  margin-top: 7.5rem;
  gap: 2rem;
  width: 100%;
  padding: 0 11.25rem;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 3.75rem;
    flex-direction: column;
    padding: revert;
  }
`;

const Column = styled.div`
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: justify;
  ul {
    padding: 1rem;
    margin: 0;
  }
  li {
    color: ${({ theme }) => theme.lightText};
    margin-bottom: 1rem;
  }
`;

const Bold = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
  li {
    font-weight: 100;
  }
`;

export default SubmissionReview;
