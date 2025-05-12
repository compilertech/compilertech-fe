import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
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

      <CopyrightSection>©2025 Compiler Technology</CopyrightSection>
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
    width: 100%;
    overflow: hidden;
  }
`;

const FooterContent = styled.div`
  display: flex;
  gap: 30vw;
  padding: 6rem;
  margin-bottom: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 15vw;
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 3rem 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 180px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 150px;
  }
`;

const QuickLinksSection = styled.div`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    text-align: center;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 2rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const QuickLinksContainer = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 32px;
  padding-bottom: 30px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 28px;
    padding-bottom: 25px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
    padding-bottom: 20px;
    text-align: center;
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

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 18px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    text-align: center;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.6;
  width: 100%;
  border-top: 1px solid white;
  padding: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    /* padding: 1rem; */
    border-top: 1px solid white;

    font-size: 0.8rem;
  }
`;

export default NewFooter;
