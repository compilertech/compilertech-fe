import { styled } from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import {
  programCommitteeMemberData,
  organizingCommitteeMemberData,
} from "../OrganizationPage/Data/MembersData";

const ProgramSection = styled.div`
  background-color: #000;
  color: white;
  padding: 4rem 5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 3rem 2rem;
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
    margin-bottom: 30px;
  }
`;

const SectionHeader = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
`;

const Committee = styled.div`
  color: #fb4dd8;
  font-size: 14px;
  margin-top: 5px;
  font-family: Spectral;
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto 40px;
  }
`;

const CommitteeLabel = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  margin: 30px 0;
  margin-left: 35px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    text-align: center;
    margin: 10px 0;
    width: 100%;
  }
`;

const MemberCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 25px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    align-items: center;
  }
`;

const MemberImageContainer = styled.div`
  height: 350px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 0;
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    height: 350px;
    border-radius: 10px;
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
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: white;
  z-index: 10;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    top: 20px;
    right: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 120px;
    height: 38px;
    font-size: 14px;
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
`;

const MemberName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-family: Poppins, sans-serif;
  color: white;
  font-size: 18px;
`;

const MemberTitle = styled.div`
  font-size: 14px;
  color: #aaa;
  font-family: Poppins, sans-serif;
`;

const Divider = styled.div`
  border: 0.5px solid #cfcbc4;
  margin: 50px 0;
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
        <SectionHeader>Meet the Program</SectionHeader>
        <Committee>Committee</Committee>
      </SectionTitle>

      <CommitteeLabel>PROGRAM COMMITTEE</CommitteeLabel>
      <Grid>
        {programCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>

      <Divider />

      <CommitteeLabel>ORGANIZING COMMITTEE</CommitteeLabel>
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
