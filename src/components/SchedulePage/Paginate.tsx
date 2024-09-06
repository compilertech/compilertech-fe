import styled from "styled-components";

// Define the props type
interface PaginateProps {
  text: string;
  borderLeft?: string;
  borderRight?: string;
  selected?: boolean;
}

function Paginate({
  text,
  borderLeft = "4px",
  borderRight = "4px",
  selected = false,
}: PaginateProps) {
  return (
    <Wrapper>
      <Button
        borderLeft={borderLeft}
        borderRight={borderRight}
        selected={selected}
        aria-label={text}
      >
        {text}
      </Button>
    </Wrapper>
  );
}

export default Paginate;

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
  border-radius: ${(props) => `
    ${props.borderLeft} ${props.borderRight} ${props.borderRight} ${props.borderLeft}
  `};
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${(props) => (props.selected ? "700" : "500")};
  transition: background-color 200ms ease-in-out, font-weight 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
