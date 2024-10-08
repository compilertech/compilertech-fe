import { useEffect, useState } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import dayOne from "./Data/DayOne";
import dayTwo from "./Data/DayTwo";
import PaginateButton from "./PaginateButton";
import ProgramTable from "./ProgramTable";
function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttons = ["Day 1", "Day 2"];
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const dayNumber = urlParams.get("day") || "1";
    if (dayNumber === "1") {
      setCurrentIndex(0);
    }
    if (dayNumber === "2") {
      setCurrentIndex(1);
    }
  }, []);
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("day", (currentIndex + 1).toString());
    window.history.pushState(null, "", url.toString());
  }, [currentIndex]);
  return (
    <Section>
      <Title>2024 Program</Title>
      <WrapperOutside>
        {buttons.map((value, index) => {
          return (
            <PaginateButton
              key={index}
              text={value}
              onclick={() => {
                setCurrentIndex(index);
              }}
              selected={index === currentIndex}
            />
          );
        })}
      </WrapperOutside>
      <ProgramTable day={currentIndex === 0 ? dayOne : dayTwo} />
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
  padding-top: 22px;
  padding-bottom: 30px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-top: 16px;
    padding-bottom: 24px;
  }
`;
