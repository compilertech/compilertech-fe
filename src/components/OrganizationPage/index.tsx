import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import CommitteeCard from "./CommitteeCard";
import {
  organizingCommitteeMemberData,
  programCommitteeMemberData,
} from "./Data/MembersData";
import { useLayoutEffect } from "react";
function Organization() {
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <Section id="oraganisation">
      <Title>Organization</Title>
      <WrapperOutside>
        <Description>
          We believe this workshop will become a venue that brings together
          compiler engineers, students and professors. We have a strong
          organizing team with engineers from Google, AMD, and Nvidia who are
          experienced in organizing technical events working tirelessly to make
          the workshop successful.
        </Description>
        <CommitteeCard
          title="Program Committee"
          committeeMemberList={programCommitteeMemberData}
        />
        <CommitteeCard
          title="Organizing Committee"
          committeeMemberList={organizingCommitteeMemberData}
        />
      </WrapperOutside>
    </Section>
  );
}

export default Organization;
const Section = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 155px;
  background-color: ${({ theme }) => theme.body};
  transition: all 0.2s ease-in-out;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    width: 90%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
    width: 90%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 0;
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const WrapperOutside = styled.div`
  border-top: 1px solid ${({ theme }) => theme.imageborder};
  width: 100%;
`;

const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.text};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: clamp(40px, 5vw, 40px);
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: clamp(30px, 5vw, 30px);
    line-height: 45px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.lightText};
  line-height: 25px;
  text-align: justify;
  margin-top: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;
