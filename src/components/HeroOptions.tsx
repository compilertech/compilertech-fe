import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";

const Section = styled.section`
  height: auto;
  background: ${({ theme }) => theme.body};
  display: flex;
  padding: 0 7rem;
  border-top: 1px solid ${({ theme }) => theme.imageborder};
  margin-top: 110px;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    width: 90%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 2rem;
    width: 90%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 0;
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const OptionText = styled.div`
  margin-bottom: 30px;
  display: flex;
  margin-right: 20px;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 10px;
  justify-content: space-evenly;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-family: "Satoshi", sans-serif;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    /* margin-right:5vw;
    margin-bottom: 0px; */
    visibility: hidden;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* background-color:blue; */
  width: 100%;
`;

function HeroOptions() {
  const navigate = useNavigate();
  const options: string[] = ["Attending", "Organization", "Schedule"];

  function handleOnClick(path: string) {
    navigate(`/${path.toLowerCase()}`);
  }
  return (
    <Section>
      <Wrapper>
        {options.map((option, index) => (
          <OptionText onClick={() => handleOnClick(option)} key={index}>
            {option}
          </OptionText>
        ))}
      </Wrapper>
    </Section>
  );
}

export default HeroOptions;
