import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import {
  programCommitteeMemberData,
  organizingCommitteeMemberData,
} from "../OrganizationPage/Data/MembersData";

const ProgramSection = styled.div`
  background-color: #000;
  color: white;
  padding: 4rem 5rem;
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 20px;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
  margin-left: 35px;
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
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
`;

const MemberCard = styled.div`
  position: relative;
`;

const MemberImageContainer = styled.div`
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Role = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  background: #ffffff63;
  width: 132px;
  height: 42px;
  border-radius: 24px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const MemberInfo = styled.div`
  margin-top: 10px;
  margin-left: 35px;
`;

const MemberName = styled.div`
  font-weight: bold;
  margin-bottom: 3px;
  font-family: Poppins, sans-serif;
`;

const MemberTitle = styled.div`
  font-size: 12px;
  color: #aaa;
  font-family: Poppins, sans-serif;
`;

const Divider = styled.div`
  border: 0.5px solid #cfcbc4;
  margin: 50px 0;
  width: 96%;
  margin-left: 35px;
`;

const MemberLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const MemberComponent = ({ member }: { member: Member }) => (
  <MemberCard>
    <MemberLink href={member.link} target="_blank" rel="noopener noreferrer">
      <MemberImageContainer>
        <MemberImg src={member.image} alt={member.name} />
      </MemberImageContainer>
      <Role>{member.position.replace(/[()]/g, "")}</Role>
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
