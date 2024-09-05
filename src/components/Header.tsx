import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import RegisterModal from "./shared/RegisterModal";
import { Button } from "./shared/Button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";
import CraftedBy from "./shared/CraftedBy";
import HeaderOptions from "./HeaderOptions";
import { useNavigate } from "react-router-dom";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const allLinks = [
    { id: "/#about", desc: "about" },
    { id: "/#interests", desc: "topics of interests" },
    { id: "/#tracks", desc: "tracks" },
    { id: "/#organizer", desc: "organizer" },
    { id: "/#submissions-and-review", desc: "Submissions & Review" },
    { id: "/#sponsors", desc: "sponsors" },
    { id: "/#travel-assistance", desc: "travel assistance" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCallForProposalClick = useCallback(() => {
    window.open("https://easychair.org/conferences/?conf=compilertech2024");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderBox>
        <NavBar>
          <Logo className="logo" onClick={() => navigate("/")}>
            <img
              src={
                props.theme === "light"
                  ? "./icons/logo_light-cropped.png"
                  : "./icons/logo_dark-cropped.png"
              }
            />
          </Logo>
          <NavLinks isOpen={isOpen}>
            <Links>
              {allLinks.map((link, index) => (
                <a key={index} onClick={handleToggle} href={link.id}>
                  {link.desc}
                </a>
              ))}
            </Links>
            {isOpen && <CraftedBy />}
          </NavLinks>
          <Action isOpen={isOpen}>
            <StyledButton onClick={handleCallForProposalClick}>
              Abstract Submission Link
            </StyledButton>
            <StyledButton onClick={toggleModal}>REGISTER NOW</StyledButton>
            <ThemeToggle theme={props.theme} toggleTheme={props.onClick} />
          </Action>
          <Hamburger isOpen={isOpen} onClick={handleToggle}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavBar>
        <HeaderOptions />
      </HeaderBox>

      {width > 786 && (
        <RegisterModal onClose={toggleModal} hidden={!isModalOpen} />
      )}
    </>
  );
};

const HeaderBox = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
  background: ${({ theme }) => theme.body};
  border-bottom: 1px solid ${({ theme }) => theme.imageborder};
  height: fit-content;
  nav a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 1rem;
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const StyledButton = styled(Button)`
  color: white !important;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const Action = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  gap: 20px;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: auto;
    button {
      width: auto;
    }
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    ${({ isOpen }) => (!isOpen ? `right:60px` : "left:15px;")};
    position: absolute;
    button {
      display: none;
    }
  }
`;
const Links = styled.div`
  margin-top: 40px;
  margin-bottom: -16px;
  display: none;
  a {
    text-align: center;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Logo = styled.div`
  img {
    height: 70px;
    margin-top: 15px;
    margin-bottom: 7px;
  }
  cursor: pointer;
`;

const NavBar = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  height: auto;
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    position: fixed;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.body};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.2s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    a {
      font-size: 24px;
    }
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
  span {
    height: 4px;
    width: 25px;
    background: ${({ theme }) => theme.text};
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

export default Header;
