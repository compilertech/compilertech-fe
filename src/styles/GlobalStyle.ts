import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in-out !important;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    width: 90%;
  }
`;

export const TABLET_BREAKPOINT = "1340px"
export const MOBILE_BREAKPOINT = "786px"