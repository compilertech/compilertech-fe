import React from "react";
import styled from "styled-components";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <>
      <NavBar>
        <div>
          <span className="logo">COMPILER</span>
        </div>
        <NavLinks>
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#organizer">Organizer</a>
          <a href="#sponsors">Sponsor Us</a>
          <CtaBtn>GET IN TOUCH</CtaBtn>
          <button onClick={props.onClick}>
            {props.theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </NavLinks>
      </NavBar>
    </>
  );
};

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 2rem;
`;

const NavLinks = styled.div`
  width: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 1rem;
  letter-spacing: 0.125em;
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
