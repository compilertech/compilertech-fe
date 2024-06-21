import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <ToggleWrapper onClick={toggleTheme}>
      {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.textHover};
    color: ${({ theme }) => theme.bodyHover};
  }
`;

export default ThemeToggle;
