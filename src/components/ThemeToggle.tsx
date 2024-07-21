import React from "react";
import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <ToggleWrapper onClick={toggleTheme} theme={theme}>
      <IconWrapper theme={theme}>
        {theme === "dark" ? <GoSun size={16} /> : <IoMoonOutline size={16} />}
      </IconWrapper>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div<{ theme: string }>`
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
  background: ${({ theme }) => (theme === "dark" ? "#474646" : "#fafafa")};
`;

const IconWrapper = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  position: absolute;
  top: 0;
  left: ${({ theme }) => (theme === "dark" ? "30px" : "0")};
  transition: all 0.2s ease-in-out;
`;

export default ThemeToggle;
