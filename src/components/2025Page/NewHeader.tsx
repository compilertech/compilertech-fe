// import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const Header: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navigationLinks = [
  //   { text: "Overview", path: "/overview" },
  //   { text: "Why attend?", path: "/why-attend" },
  //   { text: "Themes and tracks", path: "/themes-and-tracks" },
  //   { text: "Venue", path: "/venue" },
  //   { text: "FAQs", path: "/faqs" },
  // ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const isActivePath = (path: string) => {
  //   return location.pathname === path;
  // };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate("/")}>
          <img src="./icons/logo_light-cropped.png" alt="IICT Logo" />
        </Logo>

        {/* Desktop Navigation */}
        {/* <Navigation>
          {navigationLinks.map((link, index) => (
            <NavLink
              key={index}
              isActive={isActivePath(link.path)}
              onClick={() => navigate(link.path)}
            >
              {link.text}
            </NavLink>
          ))}
        </Navigation> */}

        {/* Action Buttons - Now visible on all screen sizes */}
        <ActionButtons>
          <VisitButton onClick={() => window.open("/2024", "_blank")}>
            Visit IICT'24
          </VisitButton>
        </ActionButtons>
      </HeaderContent>

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

// const Navigation = styled.nav`
//   display: flex;
//   gap: 2rem;
//   margin-left: auto;

//   @media (max-width: ${TABLET_BREAKPOINT}) {
//     display: none;
//   }
// `;

// const NavLink = styled.div<{ isActive: boolean }>`
//   cursor: pointer;
//   font-family: "Satoshi", sans-serif;
//   font-size: 16px;
//   font-weight: ${(props) => (props.isActive ? "700" : "500")};
//   color: ${(props) => (props.isActive ? "#000000" : "#333333")};
//   padding: 0.5rem 0;
//   position: relative;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #a93d9d;
//   }
// `;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

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
