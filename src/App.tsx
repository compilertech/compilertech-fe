import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Sponsors from "./components/Sponsors";
import Tracks from "./components/Tracks";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderWrapper>
          <Header onClick={toggleTheme} theme={theme} />
        </HeaderWrapper>
        <Main>
          <Hero />
          <About />
          <Tracks />
          <Sponsors />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.body};

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
`;

const Main = styled.main`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default App;
