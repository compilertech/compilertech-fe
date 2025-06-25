import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useThemeDetector } from "./utils/detectBrowserTheme";
import Home2024 from "./components/HomePage";
import Attending from "./components/AttendingPage";
import Organization from "./components/OrganizationPage";
import Schedule from "./components/SchedulePage";
import Home from "./components/2025Page";
import NewHeader from "./components/2025Page/NewHeader";
import NewFooter from "./components/2025Page/NewFooter";
import { useIs2024 } from "./utils/is2024";
import ProgramPage from "./components/2025Page/CommitteePage";
import CountdownTimer from "./components/2025Page/CountdownTimer";
import SubmissionsPage from "./components/2025Page/SubmissionsPage";
import SponsorshipPage from "./components/SponsorshipPage";
import ImportantDatesPage from "./components/ImportantDatesPage";

function App() {
  // TODO: Lazy loading
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const location = useLocation();
  const isBrowserDarkTheme = useThemeDetector();
  // @ts-ignore
  const isChrome = navigator?.userAgentData?.brands
    .map((data: any) => data.brand)
    .includes("Google Chrome");
  console.log("🚀 ~ App ~ isChrome:", isChrome);

  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
    }

    const faviconUpdate = async () => {
      const favicon: any = document.getElementById("favicon");
      if (isChrome) {
        favicon.href = "/icons/favicon_chrome.png";
        favicon.tye = "image/png";
      } else if (isBrowserDarkTheme) {
        favicon.href = "/icons/favicon_white.svg";
      } else {
        favicon.href = "/icons/favicon_black.svg";
      }
    };
    faviconUpdate();
  }, [isBrowserDarkTheme, location, isChrome]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const is2024Page = useIs2024();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Wrapper>
        {is2024Page && <Header onClick={toggleTheme} theme={theme} />}
        {!is2024Page && (
          <>
            <NewHeader />
            <CountdownTimer eventDate={new Date("2025-09-27T10:00:00")} />
          </>
        )}
        <Routes>
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/committee" element={<ProgramPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/important-dates" element={<ImportantDatesPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/2024" element={<Home2024 />} />
          <Route path="/2024/organization" element={<Organization />} />
          <Route path="/2024/attending" element={<Attending />} />
          <Route path="/2024/schedule" element={<Schedule />} />
        </Routes>
        {is2024Page && <Footer />}
        {!is2024Page && <NewFooter />}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
