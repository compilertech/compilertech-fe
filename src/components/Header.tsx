import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Modal from "./shared/Modal";
import { Button } from "./shared/Button";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allLinks = [
    { id: "about", desc: "about" },
    { id: "tracks", desc: "tracks" },
    { id: "topics", desc: "topics of interests" },
    { id: "benefits", desc: "benefits of conference" },
    { id: "organizer", desc: "organizer" },
    { id: "sponsors", desc: "sponsor us" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          <Links>
            {allLinks.map((link, index) => (
              <a key={index} onClick={handleToggle} href={`#${link.id}`}>
                {link.desc}
              </a>
            ))}
            <StyledButton onClick={toggleModal}>GET IN TOUCH</StyledButton>
          </Links>
        </NavLinks>
        <Action isOpen={isOpen}>
          <StyledButton onClick={toggleModal}>GET IN TOUCH</StyledButton>
          <ThemeToggle theme={props.theme} toggleTheme={props.onClick} />
        </Action>
        <Hamburger isOpen={isOpen} onClick={handleToggle}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavBar>
      {isModalOpen && (
        <Modal
          title="Get in touch"
          description="Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit."
          onClose={toggleModal}
        />
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  color: white !important;
`;
const Action = styled.div<{ isOpen: boolean }>`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: ${({ isOpen }) => (isOpen ? "translateX(-300%)" : "none")};
  transition: transform 0.5s ease-in-out;
  @media (max-width: 768px) {
    right: 12%;
    position: absolute;
    button {
      display: none;
    }
  }
`;
const Links = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Logo = styled.span`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primary};
`;

const NavBar = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.body};
  padding: 1rem 11.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 2rem;
  height: auto;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  width: 15%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    a {
      margin: 1rem 0;
      font-size: 1.75rem;
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
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
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
