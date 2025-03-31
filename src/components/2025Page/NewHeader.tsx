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
        <Logo onClick={() => navigate("/")}>
          <img src="./icons/logo_light-cropped.png" alt="IICT Logo" />
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
          <VisitButton onClick={() => window.open("/2024", "_blank")}>
            Visit IICT'24
          </VisitButton>
          <PartnerButton onClick={() => navigate("/partner")}>
            Partner with us
          </PartnerButton>
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
        <MenuHeader>
          {/* <MenuTitle>
            <GradientX>✕</GradientX>
          </MenuTitle> */}
        </MenuHeader>
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
  padding: 0 5vw;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  height: 80px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.75rem 0;
  }
`;

const Logo = styled.div`
  cursor: pointer;

  img {
    height: 45px;
    vertical-align: middle;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  margin-left: auto;

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
  transition: color 0.3s ease;

  &:hover {
    color: #a93d9d;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

const VisitButton = styled.button`
  height: 45px;
  background: transparent;
  color: #000000;
  border: 1px solid;
  border-image-slice: 1;
  border-radius: 8px;
  padding: 10px 20px;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const PartnerButton = styled.button`
  height: 45px;
  background: transparent;
  color: #ffffff;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  border-image-slice: 1;
  border-radius: 8px;
  padding: 10px 20px;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
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
    background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
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

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Satoshi", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const GradientX = styled.span`
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: bold;
`;

const MobileNavigation = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: white;
  padding: 2rem;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileNavLink = styled.div<{ isActive: boolean }>`
  font-family: "Satoshi", sans-serif;
  font-size: 24px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: #ffffff;
  padding: 1rem 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a93d9d;
  }
`;

const HeaderBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default Header;
