import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { text: "Overview", path: "/overview" },
    { text: "Why attend?", path: "/why-attend" },
    { text: "Themes and tracks", path: "/themes-and-tracks" },
    { text: "Venue", path: "/venue" },
    { text: "FAQs", path: "/faqs" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo className="logo" onClick={() => navigate("/")}>
          <img src={"./icons/logo_light-cropped.png"} />
        </Logo>

        {/* Desktop Navigation */}
        <Navigation>
          {navigationLinks.map((link, index) => (
            <NavLink
              key={index}
              isActive={isActivePath(link.path)}
              onClick={() => navigate(link.path)}
            >
              {link.text}
            </NavLink>
          ))}
        </Navigation>

        {/* Action Buttons */}
        <ActionButtons>
          <PartnerButton onClick={() => navigate("/partner")}>
            Partner With Us
          </PartnerButton>
          {/* <RegisterButton onClick={() => navigate("/register")}>
            Register
          </RegisterButton> */}
        </ActionButtons>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMenu} isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </HeaderContent>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isMenuOpen}>
        {navigationLinks.map((link, index) => (
          <MobileNavLink
            key={index}
            isActive={isActivePath(link.path)}
            onClick={() => {
              navigate(link.path);
              setIsMenuOpen(false);
            }}
          >
            {link.text}
          </MobileNavLink>
        ))}
        <MobileActionButtons>
          <PartnerButton onClick={() => navigate("/partner")}>
            Partner With Us
          </PartnerButton>
          <RegisterButton onClick={() => navigate("/register")}>
            Register
          </RegisterButton>
        </MobileActionButtons>
      </MobileNavigation>

      <HeaderBorder />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.75rem 2rem; */
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.75rem 1rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const NavLink = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#000000" : "#333333")};
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000000;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const MobileActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

const Logo = styled.div`
  img {
    height: 70px;
    margin-top: 15px;
    margin-bottom: 7px;
  }
  cursor: pointer;
`;

const PartnerButton = styled.button`
  width: 153px;
  height: 48px;
  background: transparent;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const RegisterButton = styled.button`
  width: 153px;
  height: 48px;
  background: linear-gradient(95.98deg, #3779fe -7.3%, #fc4dd8 113.41%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001;

  span {
    height: 2px;
    width: 100%;
    background-color: #000000;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(5px, 6px)" : "rotate(0)"};
  }

  span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(5px, -6px)" : "rotate(0)"};
  }

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: flex;
  }
`;

const MobileNavigation = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 5rem 2rem 2rem;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled.div<{ isActive: boolean }>`
  font-family: "Satoshi", sans-serif;
  font-size: 24px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: #000000;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const HeaderBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default Header;
