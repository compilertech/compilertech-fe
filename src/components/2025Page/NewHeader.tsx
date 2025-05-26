// import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../styles/GlobalStyle";
// import { useState } from "react";

const navigationLinks = [
  { text: "Overview", path: "/" },
  { text: "Committee", path: "/committee" },
  // { text: "Attending", path: "/attending" },
];
const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate("/")}>
          <img src="./icons/logo_light-cropped.png" alt="IICT Logo" />
        </Logo>
        <Navigation justify="center" gap="2rem">
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

        {/* Action Buttons - Now visible on all screen sizes */}
        <ActionButtons>
          <VisitButton onClick={() => window.open("/2024", "_blank")}>
            Visit IICT'24
          </VisitButton>
        </ActionButtons>
      </HeaderContent>
      {/* <HeaderContent>
        <Navigation border="1px solid rgba(0, 0, 0, 0.1)">
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
      </HeaderContent> */}
      <HeaderBorder />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  background: white;
  top: 0;
  z-index: 100;
  padding: 0 5vw;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

const Logo = styled.div`
  cursor: pointer;

  img {
    height: 86px;
    padding-top: 4px;
    padding-bottom: 4px;
    vertical-align: middle;
    margin-left: 2rem;

    @media (max-width: ${MOBILE_BREAKPOINT}) {
      margin-left: 0;
      height: 70px;
    }
  }
`;

const Navigation = styled.nav<{
  justify?: string;
  border?: string;
  gap?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justify || "space-around"};
  width: 100%;
  border-top: ${(props) => props.border || "none"};
  gap: ${(props) => props.gap || "0"};

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const NavLink = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#a93d9d" : "#333333")};
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
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
  flex-shrink: 0;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    margin-left: 4rem;
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 14px;
    padding: 8px 16px;
    height: 40px;
  }
`;

const HeaderBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default Header;
