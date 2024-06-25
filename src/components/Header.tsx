import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Modal from "./shared/Modal";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#interests">Topics of interests</a>
            <a href="#benefits">Benefits of conference</a>
            <a href="#organizer">Organizer</a>
            <a href="#sponsors">Sponsor Us</a>
            <CtaBtn onClick={toggleModal}>GET IN TOUCH</CtaBtn>
          </Links>
        </NavLinks>
        <Action>
          <CtaBtn onClick={toggleModal}>GET IN TOUCH</CtaBtn>
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
          title="Get updates"
          description="Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus vivamus mauris elit."
          onClose={toggleModal}
        />
      )}
    </>
  );
};
const Action = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    position: absolute;
    right: 10%;
    a {
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
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Logo = styled.span`
  letter-spacing: 0.3rem;
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
const CtaBtn = styled.a`
  margin: 0;
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.primary};
  color: white !important;
  font-family: "Bebas Neue";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: center;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
  }
`;

export default Header;
