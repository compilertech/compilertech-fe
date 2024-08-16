import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  height: 70px;
  background: ${({ theme }) => theme.body};
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
  const options: string[] = ["Attending", "Organization", "Schedule"];

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
