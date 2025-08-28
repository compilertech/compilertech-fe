import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import AnimatedBanner from "../shared/AnimatedBanner";
import { useLayoutEffect } from "react";
import Schedule2025HeroSection from "./Schedule2025HeroSection";
import Collab from "../2025Page/Collab";
import EventDetails from "./EventDetails";

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Schedule2025() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Main>
      <Schedule2025HeroSection />
      <EventDetails />
      <Collab />
      <AnimatedBanner />
    </Main>
  );
}
