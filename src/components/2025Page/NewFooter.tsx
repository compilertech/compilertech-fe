import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import LogoImage from "/icons/logo_dark-cropped.png";
import CraftedBy from "../shared/CraftedBy";
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
          <QuickLinksContainer>Quick Links</QuickLinksContainer>
          <QuickLinks>
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
          </QuickLinks>
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
  /* padding: 3rem 5rem; */
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
  gap: 30vw;
  padding: 6rem;
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
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
const QuickLinks = styled.div`
  display: flex;
  gap: 3rem;
`;
const QuickLinksContainer = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 32px;
  padding-bottom: 30px;
  line-height: 100%;
  letter-spacing: 0%;
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
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0%;

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
  width: 100vw;
  border-top: 1px solid white;
  padding: 1.5rem;
`;

export default NewFooter;
