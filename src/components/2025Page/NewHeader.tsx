// import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const navigationLinks = [
  { text: "Overview", path: "/" },
  { text: "Committee", path: "/committee" },
  { text: "Submissions", path: "/submissions" },
  { text: "Sponsorship", path: "/sponsorship" },
  { text: "Important Dates", path: "/important-dates" },
  { text: "Schedule", path: "/schedule" },
  // { text: "Attending", path: "/attending" },
];
const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <ButtonRow>
          {location.pathname !== "/register" && (
            <RegisterButton onClick={() => navigate("/register")}>
              Register
            </RegisterButton>
          )}
          <Hamburger onClick={toggleMenu} isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </ButtonRow>

        <MobileMenu isOpen={isMenuOpen}>
          <div style={{ flex: 1 }}>
            {navigationLinks.map((link, index) => (
              <MobileNavLink
                style={
                  index === 0
                    ? {
                        marginTop: "40px",
                      }
                    : {}
                }
                key={index}
                isActive={isActivePath(link.path)}
                onClick={() => {
                  navigate(link.path);
                  toggleMenu();
                }}
              >
                {link.text}
              </MobileNavLink>
            ))}
          </div>
          <div
            onClick={() => window.open("/2024", "_blank")}
            style={{
              cursor: "pointer",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff",
              backgroundColor: "#a93d9d",
              padding: "12px 24px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Visit IICT'24 <FiExternalLink />
          </div>
        </MobileMenu>
      </HeaderContent>

      <style>
        {`
          @media (min-width: ${MOBILE_BREAKPOINT}) {
            .mobile-only {
              display: none;
            }
          }
        `}
      </style>
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

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
  span {
    height: 4px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;

    // Animate hamburger to close icon
    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, 5px)" : "rotate(0)"};
    }
    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    span:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(6px, -5px)" : "rotate(0)"};
    }
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1000;
  margin-top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.3s ease;
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
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

const MobileNavLink = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#a93d9d" : "#333333")};
  padding: 10px 0;
  text-align: center;
`;
const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    margin-left: 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
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

const RegisterButton = styled.button`
  height: 45px;
  padding: 0.75rem 1.75rem;
  color: #ffffff;
  border-radius: 8px;
  background: linear-gradient(95.98deg, #3779fe -7.3%, #fc4dd8 113.41%);
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 3%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 40px;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
