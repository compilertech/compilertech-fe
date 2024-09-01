import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../styles/GlobalStyle";

const Section = styled.section`
  height: auto;
  background: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.imageborder};
  width: 100%;
`;

const OptionText = styled.div<{ selected: boolean }>`
  cursor: pointer;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.32px;
  transition: color 200ms ease-in-out;
  ${({ selected, theme }) =>
    selected && `color: ${theme.primary}; font-weight: 700;`}
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 100px;
  padding: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    gap: revert;
    justify-content: space-around;
  }
`;

function HeaderOptions() {
  const navigate = useNavigate();
  // const options: string[] = ["Organization", "Attending", "Schedule"];
  const options: string[] = ["Organization", "Attending"];

  function handleOnClick(path: string) {
    navigate(`/${path.toLowerCase()}`);
  }

  const selectedOption = window.location.pathname.split("/")[1];
  return (
    <Section>
      <Wrapper>
        {options.map((option, index) => (
          <OptionText
            onClick={() => handleOnClick(option)}
            key={index}
            selected={selectedOption === option.toLowerCase()}
          >
            {option}
          </OptionText>
        ))}
      </Wrapper>
    </Section>
  );
}

export default HeaderOptions;
