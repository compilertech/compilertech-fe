import { styled } from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import TopRightBackgroundImageSrc from "../../assets/common/ImportantDatesTopRightBackground.svg";
import BottomRightBackgroundImageSrc from "../../assets/common/ImportantDatesBottomRight.svg";

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #000000;
  min-height: 400px;
  justify-content: space-between;
  text-align: left;
  align-items: flex-start;
  padding: 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
  }
`;

const TimelineRow = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  max-width: 1085px;
  align-items: stretch;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`;

const TimelineConnector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-right: 12px;
  }
`;

const TimelineLine = styled.div<{ visible?: boolean; highlight?: boolean }>`
  width: ${({ highlight }) => (highlight ? "3px" : "2px")};
  flex-grow: 1;
  background-color: ${({ highlight }) => (highlight ? "#27AF77" : "#38434f")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

const TimelineCircle = styled.div<{
  highlight?: boolean;
  superHighlight?: boolean;
}>`
  height: 80px;
  width: 80px;
  background: ${({ superHighlight, highlight }) =>
    superHighlight
      ? `linear-gradient(90deg, #367aff 0%, #ff4dd8 100%)`
      : highlight
      ? `linear-gradient(216.94deg, #28B67B 13.55%, #0D1929 86.55%)`
      : `#151B1A`};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 36px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    align-items: center;
  }
`;

const TimelineEvent = styled.div<{ superHighlight?: boolean }>`
  flex: 1;
  margin: 20px;
  padding: 32px;
  background: ${({ superHighlight }) =>
    superHighlight
      ? `linear-gradient(90deg, rgba(54, 122, 255, 0.7) 0%, rgba(255, 77, 216, 0.7) 100%)`
      : `#151B1A`};
  border: ${({ superHighlight }) =>
    superHighlight ? "none" : "1px solid #989590B0"};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 320px;
    padding: 1rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    min-height: 70px;
    width: 100%;
    min-width: 0;
    flex-wrap: wrap;
  }
`;

const EventDate = styled.p`
  margin-left: 3rem;
  margin-right: 1rem;
  min-width: 35%;
  flex: 1;
  font-size: 24px;
  color: #fff;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 1rem;
    max-width: 45%;
    font-size: 14px;
  }
`;

const EventTitle = styled.p`
  flex: 2;
  font-size: 24px;
  color: #fff;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
  }
`;

const BackgroundImageTopRight = styled.img`
  position: absolute;
  right: 0;
  top: 100;
  z-index: 1;
  top: 15rem;
  width: 25rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const BackgroundImageBottomRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 25rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const TIMELINE_EVENTS = [
  { number: "1", date: "1 June 2025", description: "Submissions Open" },
  { number: "2", date: "1 July 2025", description: "Submission Deadline" },
  {
    number: "3",
    date: "7 August 2025",
    description: "Notification of Conditional Acceptance",
  },
  {
    number: "4",
    date: "15 August 2025",
    description: "Video submission Deadline",
  },
  { number: "5", date: "1 June 2025", description: "Submissions Open" },
  { number: "6", date: "1 July 2025", description: "Submission Deadline" },
  {
    number: "7",
    date: "7 August 2025",
    description: "Notification of Conditional Acceptance",
  },
  {
    number: "8",
    date: "15 August 2025",
    description: "Video submission Deadline",
  },
  { number: "9", date: "1 June 2025", description: "Submissions Open" },
  { number: "10", date: "1 July 2025", description: "Submission Deadline" },
];

const HIGHLIGHT_TILL_INDEX = 3;
const SUPER_HIGHLIGHT_INDEX = 9;

const ImportantDatesTimeline = () => {
  return (
    <TimelineWrapper>
      {TIMELINE_EVENTS.map((event, idx) => (
        <TimelineRow key={event.number + event.date}>
          <TimelineConnector>
            <TimelineLine
              visible={idx !== 0}
              highlight={idx < HIGHLIGHT_TILL_INDEX}
            />
            <TimelineCircle
              highlight={idx < HIGHLIGHT_TILL_INDEX}
              superHighlight={idx === SUPER_HIGHLIGHT_INDEX}
            >
              {event.number}
            </TimelineCircle>
            <TimelineLine
              visible={idx !== TIMELINE_EVENTS.length - 1}
              highlight={idx + 1 < HIGHLIGHT_TILL_INDEX}
            />
          </TimelineConnector>
          <TimelineEvent superHighlight={idx === SUPER_HIGHLIGHT_INDEX}>
            <EventDate>{event.date}</EventDate>
            <EventTitle>{event.description}</EventTitle>
          </TimelineEvent>
        </TimelineRow>
      ))}
      <BackgroundImageTopRight src={TopRightBackgroundImageSrc} />
      <BackgroundImageBottomRight src={BottomRightBackgroundImageSrc} />
    </TimelineWrapper>
  );
};

export default ImportantDatesTimeline;
