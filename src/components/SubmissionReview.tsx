import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem 4rem;
  height: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: revert;
  }
`;

const Column = styled.div`
  padding: 2rem 4rem;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  ul {
    padding: 1rem;
    margin: 0;
  }
  li {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${({ theme }) => theme.primary};
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
`;

const SubmissionReview: React.FC = () => {
  return (
    <Section>
      <Column>
        <Title>SUBMISSION GUIDELINES</Title>
        <Text>
          <ul>
            <li>
              <strong>Presentation Format:</strong> Proposals should include a
              title, abstract (250 words maximum), and a brief outline of the
              proposed presentation (500 words maximum). Please indicate the
              preferred presentation format (oral presentation, poster
              presentation, or both).
            </li>
            <li>
              <strong>Submision Deadliine: </strong>TBD
            </li>
            <li>
              <strong>Notification of acceptance </strong>TBD
            </li>
          </ul>
        </Text>
      </Column>
      <Column>
        <Title>REVIEW PROCESS</Title>
        <Text>
          <ul>
            <li>
              All submissions will undergo a rigorous review process by a
              program committee of experts in the field. Selection criteria will
              include relevance to the conference theme, technical merit,
              clarity of presentation, and potential impact on the field.
            </li>
          </ul>
        </Text>
      </Column>
    </Section>
  );
};

export default SubmissionReview;
