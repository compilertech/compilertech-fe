import styled from "styled-components";

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.primary} !important;
  color: white;
  font-family: "Bebas Neue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: center;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: 768px) {
    width: 40%;
    align-self: center;
  }
`;
