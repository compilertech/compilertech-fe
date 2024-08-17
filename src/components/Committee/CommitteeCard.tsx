import { MemberCardProps } from "./MemberCard";
import MemberCard from "./MemberCard";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
export interface CommitteeCardProps {
  title: string;
  committeeMemberList: MemberCardProps[];
}
const CommitteeCard: React.FC<CommitteeCardProps> = ({
  title,
  committeeMemberList,
}) => {
  return (
    <Wrapper>
      <Title> {title}</Title>
      <CardContainer>
        {committeeMemberList.map((value, index) => {
          return (
            <MemberCard
              key={index}
              id={value.id}
              image={value.image}
              name={value.name}
              institute={value.institute}
              position={value.position}
            />
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default CommitteeCard;

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
`;

const Title = styled.p`
  font-size: clamp(30px, 5vw, 30px);
  margin-top: 20px;
  line-height: 80px;
  letter-spacing: 2px;
  /* color: ${({ theme }) => theme.primary}; */
  margin-bottom: 20px;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 6vw;
    line-height: revert;
    margin-bottom: 1rem;
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;
