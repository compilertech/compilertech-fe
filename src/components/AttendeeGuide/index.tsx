import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import AnimatedBanner from "../shared/AnimatedBanner";
import { useLayoutEffect } from "react";
import PartnerWithUs from "../shared/PartnerWithUs";
import HeroSection from "../shared/HeroSection";
import GuideDetails from "./GuideDetails";

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function AttendeeGuide() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Main>
      <HeroSection title={"A Guide for"} subTitle={"Attendees"} />
      <GuideDetails />
      <PartnerWithUs link={"mailto:support@compilertech.org"} />
      <AnimatedBanner />
    </Main>
  );
}
