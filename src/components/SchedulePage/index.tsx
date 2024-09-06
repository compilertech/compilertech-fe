import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import Button from "./Paginate";
import ProgramTableDay1 from "./ProgramTableDay1";
// import ProgramTableDay2 from "./ProgramTableDay2";
function Schedule() {
  return (
    <Section>
      <Title>2024 Program</Title>
      <WrapperOutside>
        <Button text={"Day1"} borderLeft={"5px"} borderRight={"0px"} />
        <Button text={"Day2"} borderRight={"5px"} borderLeft={"0px"} />
      </WrapperOutside>
      <ProgramTableDay1 />
      {/* <ProgramTableDay2 /> */}
    </Section>
  );
}

export default Schedule;
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

const WrapperOutside = styled.div`
  border-top: 1px solid ${({ theme }) => theme.imageborder};
  width: 100%;
  display: flex;
`;
