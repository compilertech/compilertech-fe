import { styled } from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import Hero2 from "./Hero2";
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

const Main = styled.main`
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Home2() {
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Set the event date to March 25, 2025 at 10:00 AM
  const eventDate = new Date("2025-04-30T10:00:00");

  return (
    <Main>
      <CountdownTimer eventDate={eventDate} />
      <Hero2 />
      <Testimonial />
      <KeyTopics />
      <Highlights />
      {/* <Venue />
      <QAndA />
      <Collab />
      <AnimatedBanner /> */}
    </Main>
  );
}

{
  /* <Agenda /> */
}
{
  /* <Agenda2 /> */
}
{
  /* <Agenda3 /> */
}
