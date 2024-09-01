import { MemberCardProps } from "./MemberCard";
import MemberCard from "./MemberCard";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
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
      <Title>{title}</Title>
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
              link={value.link}
            />
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default CommitteeCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  width: 100%;
  &:last-of-type {
    padding-bottom: 24px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-top: 48px;
    &:last-of-type {
      padding-bottom: revert;
    }
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.48px;
  color: ${({ theme }) => theme.text};
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;
const CardContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  width: 100%;
`;
