import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";
import { attendingText, vectors } from "./attending/Data";

function Attending() {
  const {
    location,
    accommodation,
    advices,
    codeOfConduct: coc,
  } = attendingText;
  const { location: locationVectors, accomodation: accommodationVectors } =
    vectors;
  const height: number = 40;
  return (
    <Section>
      <Heading>{attendingText.heading}</Heading>

      <Wrapper>
        <TextWrapper>
          <Title>{location.title}</Title>
          <LocationDescription>{location.address}</LocationDescription>
        </TextWrapper>
        <Vector>
          {locationVectors.map((value, index) => (
            <IconWrapper key={index}>
              <img src={value.icon} height={height} alt="location-icon" />
              <IconDescription>{value.details}</IconDescription>
            </IconWrapper>
          ))}
        </Vector>
      </Wrapper>

      <Wrapper>
        <TextWrapper>
          <Title>{accommodation.title}</Title>
          <AccommodationDescription>
            {accommodation.description}
          </AccommodationDescription>
        </TextWrapper>
        <Vector>
          {accommodationVectors.map((value, index) => (
            <IconWrapper key={index}>
              <img src={value.icon} height={height} alt="accommodation-icon" />
              <IconDescription>{value.details}</IconDescription>
            </IconWrapper>
          ))}
        </Vector>
      </Wrapper>

      <TextWrapper>
        <Title>{advices.title}</Title>
        <ListDescription>
          <ul>
            {advices.description.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </ListDescription>
      </TextWrapper>

      <TextWrapper>
        <CocTitle>{coc.title}</CocTitle>
        <Description>{coc.description}</Description>
      </TextWrapper>
    </Section>
  );
}

export default Attending;

const Section = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 180px;
  background-color: ${({ theme }) => theme.body};
  transition: all 0.2s ease-in-out;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
    padding: revert;
    width: 90%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
    width: 90%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 0;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 0;
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const Heading = styled.div`
  font-size: clamp(45px, 5vw, 45px);
  line-height: 80px;
  width: 100%;
  text-align: center;
  letter-spacing: 6px;
  margin-bottom: 0;
  font-family: "Bebas Neue", sans-serif;
  border-bottom: 1px solid gray;
  color: ${({ theme }) => theme.titleText};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: clamp(40px, 5vw, 40px);
    letter-spacing: 4px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: clamp(30px, 5vw, 30px);
    line-height: 45px;
    letter-spacing: 3px;
  }
`;

const TextWrapper = styled.div`
  padding: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: clamp(30px, 4vw, 30px);
  letter-spacing: 2.5px;
  margin-bottom: 10px;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  color: ${({ theme }) => theme.titleText};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 40px;
  line-height: 24px;
  text-align: justify;

  @media (max-width: ${TABLET_BREAKPOINT}) {
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ListDescription = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 40px;
  line-height: 24px;
  text-align: justify;

  @media (max-width: ${TABLET_BREAKPOINT}) {
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    width: 95%;
  }
`;

const LocationDescription = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 1rem;
  line-height: 24px;
  max-width: 30vw;
  text-align: justify;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 2rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 90%;
    margin-left: 5vw;
    /* padding-right:5%; */
    text-align: justify;
  }
`;
const AccommodationDescription = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  margin-bottom: 3rem;
  line-height: 24px;
  max-width: 25vw;
  text-align: justify;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    max-width: 100%;
    margin-bottom: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 55px;
  padding-bottom: 40px;
  width: 100%;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    flex-direction: column;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Vector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 5vw;
  margin-top: 20px;

  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 15rem;
`;

const IconDescription = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-top: 20px;
  max-width: 13rem;
  color: ${({ theme }) => theme.iconText};
  text-align: center;
`;

const CocTitle = styled.p`
  font-size: clamp(30px, 4vw, 30px);
  line-height: 80px;
  letter-spacing: 2.5px;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  font-family: "Bebas Neue", sans-serif;
  text-align: left;
  margin-top: 2rem;
  color: ${({ theme }) => theme.titleText};
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }
`;
