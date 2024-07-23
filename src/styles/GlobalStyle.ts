import { createGlobalStyle } from "styled-components";

export const TABLET_BREAKPOINT = "1340px";
export const WIDESCREEN_BREAKPOINT = "1920px";
export const MOBILE_BREAKPOINT = "786px";
export const SMALL_MOBILE_BREAKPOINT = "480px";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out !important;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
      section:not(#hero)
      {
        max-width: 1080px;
      }
      section {
        width: 100%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  }

  section {
    width: 90%;
  }
`;
