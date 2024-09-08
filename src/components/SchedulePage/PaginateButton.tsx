import styled from "styled-components";

// Define the props type
interface PaginatedButtonProps {
  text: string;
  selected: boolean;
  onclick: () => void;
}

function PaginateButton({ text, selected, onclick }: PaginatedButtonProps) {
  return (
    <Wrapper>
      <Button selected={selected} aria-label={text} onClick={onclick}>
        {text}
      </Button>
    </Wrapper>
  );
}

export default PaginateButton;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const Button = styled.button<{
  selected: boolean;
}>`
  width: 100%;
  padding: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.32px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primary : "#b779b5"};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, font-weight 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
