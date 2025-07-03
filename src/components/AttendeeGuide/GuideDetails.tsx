import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
} from "../../styles/GlobalStyle";
import venueImg from "../../assets/2025/venue.svg";
import AttendeeManualIconSrc from "../../assets/icons/attendee_manual.svg";
import SpeakerManualIconSrc from "../../assets/icons/speaker_manual.svg";
import TrainIconSrc from "../../assets/icons/train.svg";
import LocationPointIconSrc from "../../assets/icons/location_point.svg";
import FlightIconSrc from "../../assets/icons/flight.svg";

const GuideDetails = () => {
  const importantDocuments = [
    {
      icon: SpeakerManualIconSrc,
      title: "Speaker's manual",
      buttonText: "Download",
      onClick: () => {},
    },
    {
      icon: AttendeeManualIconSrc,
      title: "Attendee's manual",
      buttonText: "Download",
      onClick: () => {},
    },
  ];
  const venueDetails = [
    {
      icon: LocationPointIconSrc,
      title: "Location",
      buttonText: "View in map",
      onClick: () => {},
    },
    {
      icon: FlightIconSrc,
      title: "Airport",
      buttonText: "View in map",
      onClick: () => {},
    },
    {
      icon: TrainIconSrc,
      title: "Train Junction",
      buttonText: "View in map",
      onClick: () => {},
    },
  ];
  const nearbyAccommodations = [
    {
      icon: SpeakerManualIconSrc,
      title: "Hotel SY comfort",
      buttonText: "Visit",
      onClick: () => {},
    },
    {
      icon: AttendeeManualIconSrc,
      title: "Sri Shambhavi Comforts",
      buttonText: "Visit",
      onClick: () => {},
    },
    {
      icon: AttendeeManualIconSrc,
      title: "OYO 8501 Abhimani",
      buttonText: "Visit",
      onClick: () => {},
    },
  ];

  const renderTopicCards = (topics: typeof importantDocuments) => (
    <TopicsGrid>
      {topics.map((topic, index) => (
        <TopicCard key={index}>
          <TopicIcon>
            <StyledImg src={topic.icon} alt={topic.title} />
          </TopicIcon>
          <TopicTitle>{topic.title}</TopicTitle>
          <Button onClick={topic.onClick}>{topic.buttonText}</Button>
        </TopicCard>
      ))}
    </TopicsGrid>
  );

  return (
    <Container>
      <ContentWrapper>
        <ColumnLeft>
          <Title>Important</Title>
          <HighlightText>Documents</HighlightText>
        </ColumnLeft>
        <ColumnRight>
          <Description>
            The information provided in these documents will be valuable for all
            participants involved in the IICT 2024 workshop, including both the
            speaker's manual and the attendee guide. workshop.
          </Description>
          {renderTopicCards(importantDocuments)}
        </ColumnRight>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnLeft>
          <Title>Venue</Title>
          <HighlightText>Details</HighlightText>
        </ColumnLeft>
        <ColumnRight>
          <ImageContainer>
            <VenueImage
              src={venueImg}
              alt="Historic building with tall tower and landscaped grounds"
            />
          </ImageContainer>
          <Description>
            Address : IISc, CV Raman Rd, Bengaluru, Karnataka 560012
          </Description>
          {renderTopicCards(venueDetails)}
        </ColumnRight>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnLeft>
          <Title>Nearby</Title>
          <HighlightText>Accommodation</HighlightText>
        </ColumnLeft>
        <ColumnRight>
          <Description>
            The hotels mentioned are mere suggestions for accommodations near
            the venue. IICT in no way endorses these locations. Please do your
            own due diligence.
          </Description>
          {renderTopicCards(nearbyAccommodations)}
        </ColumnRight>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnLeft>
          <Title>On the day of</Title>
          <HighlightText>Workshop</HighlightText>
        </ColumnLeft>
        <ColumnRight>
          <Description>
            <StyledUl>
              {[
                `Please bring identity proof (Driver's License, Student Id, Aadhaar, or Passport)`,
                `If you have registered as a student please bring your student ID for verification`,
                `Email confirmation of the registration`,
                `If you don't have the confirmation please email support@compilertech.org or see someone at the checkin counter on the date of the registration.`,
              ].map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </StyledUl>
          </Description>
        </ColumnRight>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background-color: #000;
  color: white;
  padding: 6rem;
  position: relative;
  width: 100%;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ColumnLeft = styled.div`
  flex: 0 0 550px; /* Fixed width for the left column */
  margin-right: 32px; /* Space between columns */

  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex: 1 1 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: white;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 28px;
    text-align: center;
  }
`;

const HighlightText = styled.div`
  font-family: serif;
  background: #fb4dd8;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 70px;
  font-weight: 500;
  margin-top: 0.5rem;
  display: block;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 42px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 24px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const TopicsGrid = styled.div`
  display: grid;
  margin-top: 4rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  justify-items: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 1rem;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 1rem;
  }
`;

const TopicCard = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  border: 1px solid #d83bd2;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 1.25rem;
    width: 100%;
    align-items: center;
  }
`;

const TopicIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  background-color: #232928;
  width: 45px;
  height: 45px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40px;
    height: 40px;
  }
`;

const TopicTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 10px 12px;
  gap: 12px;
  height: min-content;
  margin: auto 0 0;
  width: fit-content;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    justify-content: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 2rem;
  }
`;

const VenueImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const StyledUl = styled.ul`
  text-align: start;
`;

const StyledImg = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export default GuideDetails;
