import { SMALL_MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

import { styled } from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
//
export default function SubmissionsPage() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <TopicsHeader>
          <Title>Submissions Guidelines</Title>
          <Subtitle>Read carefully</Subtitle>
        </TopicsHeader>
        <div>
          <Description style={{ marginBottom: "10px" }}>
            Proposals should provide sufficient information for the review
            committee to be able to judge the quality of the submission.
            Proposals can be submitted under the form of an extended abstract,
            full paper, or slides, which will be reviewed by our esteemed
            Program Committee.
          </Description>
          <Description>
            Please note that some of the presentations may be accepted for
            posters rather than conventional presentations.
          </Description>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <TopicsHeader>
          <Title>Review Process</Title>
          <Subtitle>How it works</Subtitle>
        </TopicsHeader>
        <div>
          <Description>
            The selections will happen in two steps: In the first step, a
            conditional acceptance will be provided. The second step requires
            the participants of conditionally accepted papers to submit a three
            minute video of their presentation. The final acceptance will be
            provided based on the evaluation of the video presentations.
          </Description>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  background-color: #000;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: row;
  gap: 80px;

  width: 100%;
  box-sizing: border-box;

  @media (max-width: 950px) {
    padding: 2rem 2.5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 40px;
  }
`;

const SectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopicsHeader = styled.div`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
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

const Description = styled.p`
  font-size: 16px;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: justify;
  color: rgba(255, 255, 255, 0.8);
`;
