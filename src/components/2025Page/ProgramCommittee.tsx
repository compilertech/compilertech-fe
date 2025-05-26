import { styled } from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import {
  programCommitteeMemberData,
  organizingCommitteeMemberData,
  steeringCommitteeMemberData,
} from "./Data/MembersData";

const ProgramSection = styled.div`
  background-color: #000;
  color: white;
  padding: 4rem 5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 950px) {
    padding: 3rem 2.5rem;
  }

  @media (max-width: 660px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
  margin-left: 35px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

const SectionHeader = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const Committee = styled.div`
  color: #fb4dd8;
  font-size: 14px;
  margin-top: 5px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    gap: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 35px;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 30px;
    gap: 20px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const MemberCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 0px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    align-items: center;
    margin-bottom: 5px;
  }

  @media (max-width: 660px) {
    margin-bottom: 0;
  }
`;

const MemberImageContainer = styled.div`
  height: 350px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  @media (max-width: 950px) {
    margin-bottom: 0;
    border-radius: 10px;
    height: 340px;
  }

  @media (max-width: 660px) {
    height: 350px;
  }

  @media (max-width: 370px) {
    height: 320px;
  }
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Role = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(173, 181, 189, 0.85);
  width: 132px;
  height: 42px;
  border-radius: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  color: white;
  z-index: 10;

  @media (max-width: 950px) {
    top: 20px;
    right: 20px;
  }

  @media (max-width: 660px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 20px;
    right: 30px;
  }
  @media (min-width: 661px) and (max-width: 680px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 5vw;
    right: 3vw;
  }
  @media (min-width: 680px) and (max-width: 708px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 5vw;
    right: 4vw;
  }
  @media (min-width: 709px) and (max-width: 750px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 5vw;
    right: 5vw;
  }
  @media (min-width: 751px) and (max-width: 830px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 4vw;
    right: 5vw;
  }
  @media (min-width: 831px) and (max-width: 860px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 5vw;
  }
  @media (min-width: 861px) and (max-width: 950px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 2vw;
    right: 5vw;
  }
  @media (min-width: 951px) and (max-width: 1140px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 1vw;
  }
  @media (min-width: 1141px) and (max-width: 1200px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 20px;
  }
  @media (min-width: 1201px) and (max-width: 1230px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 25px;
  }
  @media (min-width: 1231px) and (max-width: 1250px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 30px;
  }
  @media (min-width: 1251px) and (max-width: 1300px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 3vw;
    right: 3vw;
  }
  @media (min-width: 1301px) and (max-width: 1340px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 30px;
    right: 3vw;
  }
  @media (min-width: 1341px) {
    width: 120px;
    height: 38px;
    font-size: 14px;
    top: 20px;
    right: 3vw;
  }
  @media (max-width: 500px) {
    top: 7.5vw;
    right: 7.5vw;
  }

  @media (max-width: 400px) {
    top: 30px;
    right: 8vw;
  }
`;

const MemberInfo = styled.div`
  padding: 15px 0;
  text-align: center;
  width: 100%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 10px 0;
  }
`;

const MemberName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-family: "Satoshi", sans-serif;
  color: white;
  font-size: 18px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    margin-bottom: 3px;
  }
`;

const MemberTitle = styled.div`
  font-size: 14px;
  color: #aaa;
  font-family: "Satoshi", sans-serif;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 13px;
  }
`;

const Divider = styled.div`
  border: 0.5px solid #cfcbc4;
  margin: 40px 0;
  width: 96%;
  margin-left: 35px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const MemberLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: block;
  width: 100%;
`;

const MemberComponent = ({ member }: { member: Member }) => (
  <MemberCard>
    <MemberLink href={member.link} target="_blank" rel="noopener noreferrer">
      <MemberImageContainer>
        <MemberImg src={member.image} alt={member.name} />
        <Role>{member.position.replace(/[()]/g, "")}</Role>
      </MemberImageContainer>
      <MemberInfo>
        <MemberName>{member.name}</MemberName>
        <MemberTitle>{member.institute}</MemberTitle>
      </MemberInfo>
    </MemberLink>
  </MemberCard>
);

const ProgramCommittee = () => {
  return (
    <ProgramSection>
      <SectionTitle>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Program Committee</Committee>
      </SectionTitle>

      <Grid>
        {programCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>

      <Divider />

      <SectionTitle>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Steering Committee</Committee>
      </SectionTitle>
      <Grid>
        {steeringCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>

      <SectionTitle>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Organizing Committee</Committee>
      </SectionTitle>
      <Grid>
        {organizingCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>
    </ProgramSection>
  );
};

export default ProgramCommittee;
interface Member {
  id: string;
  name: string;
  image: string;
  link: string;
  position: string;
  institute: string;
}
