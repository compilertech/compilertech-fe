import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import About from "./components/About";
import CallForProposals from "./components/CallForProposals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Organizer from "./components/Organizer";
import Sponsors from "./components/Sponsors";
import SubmissionReview from "./components/SubmissionReview";
import Tracks from "./components/Tracks";
import TravelAssistance from "./components/TravelAssitance";
import { GlobalStyle, MOBILE_BREAKPOINT } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useThemeDetector } from "./utils/detectBrowserTheme";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const isBrowserDarkTheme = useThemeDetector();
  
  const darkModeHandler = () => {
    document.body.classList.toggle("dark");
  }
  // @ts-ignore
  const isChrome = navigator?.userAgentData?.brands
    .map((data: any) => data.brand)
    .includes("Google Chrome");
  console.log("🚀 ~ App ~ isChrome:", isChrome);

  useEffect(() => {
    const hasDarkClass = document.body.classList.contains("dark");
    if (theme === "dark" && !hasDarkClass) darkModeHandler();
    const faviconUpdate = async () => {
      const favicon: any = document.getElementById("favicon");
      if (Boolean(isChrome)) {
        favicon.href = "/icons/favicon_chrome.png";
        favicon.tye = "image/png";
      } else if (isBrowserDarkTheme) {
        favicon.href = "/icons/favicon_white.svg";
      } else {
        favicon.href = "/icons/favicon_black.svg";
      }
    };

    faviconUpdate();
   
  }, [isBrowserDarkTheme]);

  const toggleTheme = () => {
    darkModeHandler()
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
          <CallForProposals />
          <About />
          <Interests />
          <Tracks />
          <Organizer />
          <SubmissionReview />
          <Sponsors />
          <TravelAssistance />
          <Footer />
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
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default App;
