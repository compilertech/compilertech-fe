import styled from "styled-components";

// Define the props type
interface PaginatedButtonProps {
  text: string;
  borderLeft: string;
  borderRight: string;
  selected: boolean;
  onclick(): any;
}

function PaginateButton({
  text,
  borderLeft,
  borderRight,
  selected,
  onclick,
}: PaginatedButtonProps) {
  return (
    <Wrapper>
      <Button
        borderLeft={borderLeft}
        borderRight={borderRight}
        selected={selected}
        aria-label={text}
        onClick={onclick}
      >
        {text}
      </Button>
    </Wrapper>
  );
}

export default PaginateButton;

const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{
  borderLeft: string;
  borderRight: string;
  selected: boolean;
}>`
  width: 100%;
  height: 56px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.primary : "#b779b5"};
  color: white;
  border: none;
  border-radius: ${({ borderLeft, borderRight }) =>
    `${borderLeft} ${borderRight} ${borderRight} ${borderLeft}`}; /* Top-left, Top-right, Bottom-right, Bottom-left */
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ selected }) => (selected ? "700" : "500")};
  transition: background-color 200ms ease-in-out, font-weight 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
