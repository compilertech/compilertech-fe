import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  height: 150px;
  width: 100%;
  /* top: 0;
  left: 0;
  position:fixed;
  z-index:20; */
  background: ${({ theme }) => theme.body};
  padding: 0 11.25rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const OptionText = styled.div`
  margin-bottom: 30px;
  margin-right: 5vw;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function HeroOptions() {
  const navigate = useNavigate();
  const options: string[] = ["Attending", "Organisation", "Schedule"];

  function handleOnClick(path: string) {
    navigate(`/${path.toLowerCase()}`);
  }
  return (
    <Section>
      {options.map((option, index) => (
        <OptionText onClick={() => handleOnClick(option)} key={index}>
          {option}
        </OptionText>
      ))}
    </Section>
  );
}

export default HeroOptions;
