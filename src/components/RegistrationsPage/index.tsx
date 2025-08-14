import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import AnimatedBanner from "../shared/AnimatedBanner";
import { useLayoutEffect } from "react";
import HeroSection from "../shared/HeroSection";
import RegistrationsDetails from "./RegistrationsDetails";

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function RegistrationsPage() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Main>
      <HeroSection title={""} subTitle={"Registrations"} />
      <RegistrationsDetails />
      <AnimatedBanner />
    </Main>
  );
}
