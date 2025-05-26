import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import Hero from "./Hero";
// import Agenda from "./Agenda";
// import Agenda2 from "./Agenda2";
// import Agenda3 from "./Agenda3";
import Testimonial from "./Testimonial";
import KeyTopics from "./KeyTopics";
import Highlights from "./Highlights";
import AnimatedBanner from "./AnimatedBanner";
import CountdownTimer from "./CountdownTimer";
import Collab from "./Collab";
import QAndA from "./QAndA";
import Venue from "./Venue";
import { useLayoutEffect } from "react";
import SponsorsComponent from "./Sponser";
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

  const eventDate = new Date("2025-09-27T10:00:00");

  return (
    <Main>
      <CountdownTimer eventDate={eventDate} />
      <Hero />
      <Testimonial />
      <KeyTopics />
      <Highlights />
      <SponsorsComponent />
      <Venue />
      <QAndA />
      <Collab />
      <AnimatedBanner />
    </Main>
  );
}
