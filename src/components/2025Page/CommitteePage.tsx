import { styled } from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../styles/GlobalStyle";
import {
  programCommitteeMemberData,
  organizingCommitteeMemberData,
  steeringCommitteeMemberData,
} from "./Data/MembersData";

const CommiteeSection = styled.div`
  background-color: #000;
  color: white;
  padding: 3rem 5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 950px) {
    padding: 2rem 2.5rem;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
  margin-left: 35px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
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
    text-align: center;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.3333%;
  align-self: stretch;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-basis: 50%;
  }
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    flex-basis: 100%;
  }
`;

const MemberImageContainer = styled.div`
  width: 100%;
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
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
        <span
          style={{
            display: "block",
            ...(member.image.endsWith(".webp")
              ? { padding: "25px", borderRadius: "14px" }
              : {}),
          }}
        >
          <MemberImg
            src={member.image}
            alt={member.name}
            style={{ borderRadius: "14px" }}
          />
        </span>
        <Role>{member.position.replace(/[()]/g, "")}</Role>
      </MemberImageContainer>
      <MemberInfo>
        <MemberName>{member.name}</MemberName>
        <MemberTitle>{member.institute}</MemberTitle>
      </MemberInfo>
    </MemberLink>
  </MemberCard>
);

const CommitteePage = () => {
  return (
    <CommiteeSection>
      <SectionTitle>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Program Committee</Committee>
      </SectionTitle>

      <Grid>
        {programCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>

      <SectionTitle style={{ marginTop: "50px" }}>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Steering Committee</Committee>
      </SectionTitle>
      <Grid>
        {steeringCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>

      <SectionTitle style={{ marginTop: "50px" }}>
        <SectionHeader>Meet the</SectionHeader>
        <Committee>Organizing Committee</Committee>
      </SectionTitle>
      <Grid>
        {organizingCommitteeMemberData.map((member) => (
          <MemberComponent key={member.id} member={member} />
        ))}
      </Grid>
    </CommiteeSection>
  );
};

export default CommitteePage;
interface Member {
  id: string;
  name: string;
  image: string;
  link: string;
  position: string;
  institute: string;
}
