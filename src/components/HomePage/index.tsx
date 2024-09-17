import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import Hero from "./Hero";
import CallForProposals from "./CallForProposals";
import About from "./About";
import Interests from "./Interests";
import Tracks from "./Tracks";
import SubmissionReview from "./SubmissionReview";
import Sponsors from "./Sponsors";
import TravelAssistance from "./TravelAssitance";
import { useLayoutEffect } from "react";

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Home() {
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <Main>
      <Hero />
      <CallForProposals />
      <Sponsors />
      <About />
      <Interests />
      <Tracks />
      <SubmissionReview />
      <TravelAssistance />
    </Main>
  );
}
