import { styled } from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import { FiExternalLink } from "react-icons/fi";

export default function CraftedBy() {
  return (
    <CreditSection>
      <CreditLine>
        Carefully crafted by{" "}
        <CreditLineHighlight
          href="https://embraystechnologies.com?ref=compilertechnology"
          target="_blank"
        >
          Embrays Technologies <FiExternalLink />
        </CreditLineHighlight>
      </CreditLine>
    </CreditSection>
  );
}

const CreditSection = styled.div`
  font-family: "Satoshi", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  padding: 16px 0;
  border-top: 0.5px solid
    ${({ theme }) => (theme.name === "light" ? theme.lightText : "black")};
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 8px 0;
    padding-bottom: 16px;
  }
`;

const CreditLine = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 16px !important;
  letter-spacing: 0.3px;
  text-wrap: wrap;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-left: 60px;
    padding-right: 60px;
    text-align: center;
    line-height: 28px;
  }
`;

const CreditLineHighlight = styled.a`
  text-wrap: nowrap;
  font-size: 16px !important;
  color: black !important;
  text-decoration: none;
  background: #d2ff03;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 0 0 2px !important;
  svg {
    margin-bottom: -2px;
  }
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    margin: 0 !important;
  }
`;
