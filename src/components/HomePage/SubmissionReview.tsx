import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

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
              preferred presentation format (either oral presentation or poster
              presentation).
            </li>
            <li>
              <Bold>
                Submision Deadline: September 1, 2024 <Pill>Closed</Pill>
              </Bold>
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
              <Bold>
                Notification of acceptance: September 14, 2024{" "}
                <Pill>Closed</Pill>
              </Bold>
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
  gap: 4rem;
  width: 100%;
  padding: 0 11.25rem;
  flex-direction: row;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
    flex-direction: column;
    gap: 3rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    flex-direction: column;
    margin-top: 3.75rem;
    padding: revert;
    gap: 2rem;
  }
`;

const Column = styled.div`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: justify;
  li {
    color: ${({ theme }) => theme.lightText};
    margin-bottom: 1rem;
  }
`;

const Bold = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 1em;
  line-height: 1.5;
  ul {
    padding: 1.25rem;
  }
  li {
    font-weight: 100;
  }
`;
const Pill = styled.div`
  display: inline-block;
  padding: 2px 8px;
  background-color: #f5d6f5;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 24px;
  color: black;
  font-size: 14px;
  font-weight: 700;
`;

export default SubmissionReview;
