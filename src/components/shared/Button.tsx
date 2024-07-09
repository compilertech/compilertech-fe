import styled from "styled-components";

export const Button = styled.button<{ width?: number }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary} !important;
  color: white;
  font-family: "Bebas Neue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: center;
  &:disabled {
    background-color: #a86aa1 !important;
    cursor: not-allowed;
  }

  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: 1000px) {
    width: fit-content;
    align-self: center;
  }
`;
