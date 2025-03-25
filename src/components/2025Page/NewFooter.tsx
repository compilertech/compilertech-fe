import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import LogoImage from "/icons/logo_dark-cropped.png";

const NewFooter: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks1 = ["Overview", "About us", "Our Stats", "Tracks & themes"];

  const quickLinks2 = [
    "Past Highlights",
    "Venue",
    "FAQs",
    "Sponsorship opportunities",
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo src={LogoImage} alt="Compiler Technology Logo" />
        </LogoContainer>

        <QuickLinksSection>
          <QuickLinksColumn>
            {quickLinks1.map((link, index) => (
              <QuickLink key={index}>{link}</QuickLink>
            ))}
          </QuickLinksColumn>

          <QuickLinksColumn>
            {quickLinks2.map((link, index) => (
              <QuickLink key={index}>{link}</QuickLink>
            ))}
          </QuickLinksColumn>
        </QuickLinksSection>
      </FooterContent>

      <CopyrightSection>
        ©2024 Compiler Technology | Terms and conditions
      </CopyrightSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 3rem 5rem;
  width: 100vw;
  font-family: "Satoshi", sans-serif;
  border-top: 0.5px solid white;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 2rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 150px;
  }
`;

const QuickLinksSection = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const QuickLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    align-items: center;
  }
`;

const QuickLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.6;
  /* width: 100vw; */
  border-top: 0.5px solid white;
  padding-top: 1.5rem;
`;

export default NewFooter;
