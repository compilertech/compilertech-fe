import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import PaginateButton from "./PaginateButton";
import ProgramTable from "./ProgramTable";
import { dayOneData } from "./Data/DayOne";
import { dayTwoData } from "./Data/DayTwo";
import { useState } from "react";
function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttons = ["Day1", "Day2"];

  return (
    <Section>
      <Title>2024 Program</Title>
      <WrapperOutside>
        {buttons.map((value, index) => {
          return (
            <PaginateButton
              key={index}
              text={value}
              borderLeft={index === 0 ? "5px" : "0px"}
              borderRight={index === 1 ? "5px" : "0px"}
              onclick={() => {
                setCurrentIndex(index);
              }}
              selected={index === currentIndex}
            />
          );
        })}
      </WrapperOutside>
      {currentIndex == 0 && <ProgramTable day={dayOneData} />}
      {currentIndex == 1 && <ProgramTable day={dayTwoData} />}
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
