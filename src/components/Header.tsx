import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar>
        <div>
          <Logo className="logo">COMPILER</Logo>
        </div>
        <NavLinks isOpen={isOpen}>
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#organizer">Organizer</a>
          <a href="#sponsors">Sponsor Us</a>
          <CtaBtn>GET IN TOUCH</CtaBtn>
          <ThemeToggle theme={props.theme} toggleTheme={props.onClick} />
        </NavLinks>
        <Hamburger isOpen={isOpen} onClick={handleToggle}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavBar>
    </>
  );
};

const Logo = styled.span`
  letter-spacing: 0.3rem;
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 2rem;
  height: auto;
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  width: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.body};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    z-index: 999;

    a {
      margin: 1rem 0;
      font-size: 1rem;
    }
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001; // Make sure the hamburger menu stays above the nav
  span {
    height: 4px;
    width: 25px;
    background: ${({ theme }) => theme.text};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    display: flex;

    // Animate hamburger to close icon
    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    }
    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    span:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    }
  }
`;
const CtaBtn = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: white !important;
  padding: 8px 16px;
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 1px 3px 1px black;
  }
`;

export default Header;
