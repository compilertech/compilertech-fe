import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import LogoImage from "/icons/logo_dark-cropped.png";
import TwitterIcon from "../../assets/2025/twitter.svg";
import LinkedInIcon from "../../assets/2025/linkedin.svg";
import EmailIcon from "../../assets/2025/email.svg";

const NewFooter: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks1 = [
    { label: "Overview", href: "/#overview" },
    { label: "About us", href: "/#about" },
    { label: "Our Stats", href: "/#stats" },
    { label: "Tracks & themes", href: "/#tracks" },
  ];

  const quickLinks2 = [
    { label: "Past Highlights", href: "/#past-highlights" },
    { label: "Venue", href: "/#venue" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Sponsorship opportunities", href: "/#sponsorship-opportunities" },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo src={LogoImage} alt="Compiler Technology Logo" />
        </LogoContainer>

        <QuickLinksSection>
          <FooterSectionHeader>Quick Links</FooterSectionHeader>
          <QuickLinks>
            <QuickLinksColumn>
              {quickLinks1.map((link, index) => (
                <QuickLink key={index} href={link.href}>
                  {link.label}
                </QuickLink>
              ))}
            </QuickLinksColumn>

            <QuickLinksColumn>
              {quickLinks2.map((link, index) => (
                <QuickLink key={index} href={link.href}>
                  {link.label}
                </QuickLink>
              ))}
            </QuickLinksColumn>
          </QuickLinks>
        </QuickLinksSection>
        <GetInTouchSection>
          <FooterSectionHeader>Get in touch</FooterSectionHeader>
          <p>
            In case of any queries please reach out to the workshop
            organizers&nbsp;
            <Email href="mailto:aditya.kumar@compilertech.org">
              Aditya Kumar
            </Email>
            ,&nbsp;
            <Email href="mailto:ashutosh@compilertech.org">
              Ashutosh Pandey
            </Email>
            ,&nbsp;
            <Email href="mailto:pradeep.kumar@compilertech.org">
              Pradeep Kumar
            </Email>
            .
          </p>

          <SocialMediaContainer>
            <a
              href="https://www.linkedin.com/company/compiler-technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" height={36} width={36} />
            </a>
            <a
              href="https://x.com/compiler_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="Twitter" height={36} width={36} />
            </a>
            <a
              href="mailto:support@compilertechnology.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} alt="Email" height={36} width={36} />
            </a>
          </SocialMediaContainer>
        </GetInTouchSection>
      </FooterContent>

      <CopyrightSection>© 2025 Compiler Technology</CopyrightSection>
    </FooterContainer>
  );
};
const Email = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-decoration: none;
`;

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
  justify-content: space-between;
  padding: 6rem;
  gap: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
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
const GetInTouchSection = styled.div`
  width: 280px;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 200px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    text-align: center;
  }
  p {
    color: white;
    text-decoration: none;
    opacity: 0.8;
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

const FooterSectionHeader = styled.div`
  font-family: "Satoshi", sans-serif;
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
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0%;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 14px;
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
