import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import { Button } from "../shared/Button";
import InterestCard from "./Interests/InterestCard";

function CallForProposals() {
  const data = [
    {
      title: "What we are looking for?",
      content: [
        "Keynote speakers (30-60minutes)",
        "Technical presentations: 20 minutes plus questions and discussion",
        "Tutorials (30-60minutes)",
        "Poster presentations",
      ],
    },
    {
      title: "What types of people attend?",
      content: [
        "Active developers of compilers",
        "Students and Researchers in the field of compilers",
        "Those interested in using compiler and toolchain technology in novel and interesting ways",
      ],
    },
  ];

  const handleCallForProposalClick = () => {
    window.open("https://easychair.org/conferences/?conf=compilertech2024");
  };

  return (
    <Section id="call-for-proposals">
      <TextWrapper>
        <Title>CALL FOR PROPOSALS</Title>
        <Description>
          The IICT (Innovations In Compiler Technology) workshop aims to bring
          together researchers, practitioners, and enthusiasts in the field of
          compiler technologies. This year's theme focuses on the cutting-edge
          advancements in design, implementation, and optimization of compiler
          techniques as well as their applications in emerging software and
          hardware platforms. The workshop consists of accepted talks by our
          esteemed Program Committee along with invited talks by experts from
          both academia and industry. This is a novel opportunity to interact
          and learn from experts and enthusiasts from both academia and industry.
          Register and attend to make the best of this opportunity!
        </Description>
      </TextWrapper>
      <CardGroupContainerColumn style={{ marginTop: "24px" }}>
        <InterestCard
          title="About the proposals:"
          description="Proposals should provide sufficient information for the review committee to be able to judge the quality of the submission. Proposals can be submitted under the form of an abstract(for example https://llvm.org/devmtg/2023-02-25/), full paper, or slides. Accepted presentations must be presented in-person. The presentations and recordings may be publicly available in future."
        />
        <CardGroupContainerRow>
          {data.map((element) => {
            return (
              <InterestCard title={element.title} listItems={element.content} />
            );
          })}
        </CardGroupContainerRow>
        <ButtonContainer>
          <Button onClick={handleCallForProposalClick}>
            Abstract Submission Link
          </Button>
        </ButtonContainer>
      </CardGroupContainerColumn>
    </Section>
  );
}

export default CallForProposals;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
  padding: 0 180px;
  background-color: ${({ theme }) => theme.body};
  height: auto !important;
  transition: all 0.2s ease-in-out;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    margin-top: 3.75rem;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  padding: 0 4rem 0 0;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: clamp(40px, 5vw, 64px);
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  margin: 0 0 3.75rem 0;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  text-align: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    line-height: revert;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 1rem;
  line-height: 24px;
  text-align: justify;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row;
  }
`;

const CardGroupContainerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const CardGroupContainerColumn = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  justify-content: stretch;
  align-items: flex-start;
`;
