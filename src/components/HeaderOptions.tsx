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
    justify-content: space-between;
  }
`;
// const Pill = styled.div<{ position?: string }>`
//   display: inline-block;
//   padding: 2px 8px;
//   background-color: #f5d6f5;
//   border: 2px solid ${({ theme }) => theme.primary};
//   border-radius: 24px;
//   color: black;
//   font-size: 14px;
//   font-weight: 700;
//   position: ${({ position }) => position || "absolute"};
//   top: 112px;
//   left: 785px;
// `;

function HeaderOptions() {
  const navigate = useNavigate();
  const options: string[] = ["Organization", "Attending", "Schedule"];

  function handleOnClick(path: string) {
    navigate(`/2024/${path.toLowerCase()}`);
  }

  const selectedOption = window.location.pathname.split("/2024/")[1];
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
            {/* {option === "Schedule" && (
              <PillContainer>
                <Pill position="inherit">New</Pill>
              </PillContainer>
            )} */}
          </OptionText>
        ))}
      </Wrapper>
    </Section>
  );
}

export default HeaderOptions;

// const PillContainer = styled.span`
//   display: inline-block;
//   margin-left: 8px;
//   @media (max-width: ${MOBILE_BREAKPOINT}) {
//     display: none;
//   }
// `;
