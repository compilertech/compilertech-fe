import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, WIDESCREEN_BREAKPOINT } from "../styles/GlobalStyle";
import CommitteeCard from "./Committee/CommitteeCard";
import {
  organizingCommitteeMemberData,
  programCommitteeMemberData,
} from "./Committee/Data/MembersData";
function Organization() {
  return (
    <Section id="oraganisation">
      <TextWrapper>
        <Title>Organization</Title>
        <Description>
          We believe this workshop will become a venue that brings together
          compiler engineers, students and professors. We have a strong
          organizing team with engineers from Google, AMD, and Nvidia who are
          experienced in organizing technical events working tirelessly to make
          the workshop successful.
        </Description>
      </TextWrapper>
      <CommitteeCard
        title="Program Committee"
        committeeMemberList={programCommitteeMemberData}
      />
      <CommitteeCard
        title="Organizing Committee"
        committeeMemberList={organizingCommitteeMemberData}
      />
    </Section>
  );
}

export default Organization;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:auto;
  justify-content: center;
  align-items: center;
  padding: 0 180px;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.body};
  height: auto !important;
  transition: all 0.2s ease-in-out;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    width: 90%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 0;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 0;
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const TextWrapper = styled.div`
  /* padding: 0 4rem 0 0; */
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: clamp(40px, 5vw, 40px);
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.titleText};
  margin-bottom: 20px;
  border-bottom:1px solid ${({ theme }) => theme.imageborder};;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    line-height: revert;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  line-height: 25px;
  text-align: justify;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: justify;
  }
`;
