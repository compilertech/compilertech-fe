import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import AnimatedBanner from "../shared/AnimatedBanner";
import { useLayoutEffect } from "react";
import PartnerWithUs from "../shared/PartnerWithUs";
import HeroSection from "../shared/HeroSection";
import SponsorshipDetails from "./SponsorshipDetails";
import SponsorshipTable from "./SponsorshipTable";

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Home() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Main>
      <HeroSection title={"Become a"} subTitle={"Sponsor"} />
      <SponsorshipDetails />
      <SponsorshipTable />
      <PartnerWithUs />
      <AnimatedBanner />
    </Main>
  );
}
