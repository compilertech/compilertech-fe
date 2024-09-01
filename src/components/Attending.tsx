import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";
import { attendingText, vectors } from "./attending/Data";

function Attending() {
  const { location, accommodation, advices } = attendingText;
  const { location: locationVectors, accomodation: accommodationVectors } =
    vectors;
  const height: number = 40;
  const onClickIcon = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <Section>
      <Heading>{attendingText.heading}</Heading>
      <WrapperOutside>
        <Wrapper>
          <TextWrapper style={{ flex: 1 }}>
            <Title>{location.title}</Title>
          </TextWrapper>
          <Body style={{ flex: 1, alignItems: "center" }}>
            <Description style={{ flex: 1 }}>{location.address}</Description>
            {locationVectors.map((value, index) => (
              <IconWrapper
                key={index}
                style={{ flex: 1 }}
                onClick={() => onClickIcon(value.href)}
              >
                <img src={value.icon} height={height} alt="location-icon" />
                <IconDescription>{value.details}</IconDescription>
              </IconWrapper>
            ))}
          </Body>
        </Wrapper>

        <Wrapper>
          <TextWrapper style={{ flex: 1 }}>
            <Title>{accommodation.title}</Title>
          </TextWrapper>
          <Body style={{ flex: 1, alignItems: "center" }}>
            <Description style={{ flex: 1 }}>
              {accommodation.description}
            </Description>
            {accommodationVectors.map((value, index) => (
              <IconWrapper
                key={index}
                style={{ flex: 1 }}
                onClick={() => onClickIcon(value.href)}
              >
                <img
                  src={value.icon}
                  height={height}
                  alt="accommodation-icon"
                />
                <IconDescription>{value.details}</IconDescription>
              </IconWrapper>
            ))}
          </Body>
        </Wrapper>

        <Wrapper>
          <TextWrapper style={{ flex: 1 }}>
            <Title>{advices.title}</Title>
          </TextWrapper>
          <Body style={{ flex: 2.2 }}>
            <ul>
              {advices.description.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </Body>
        </Wrapper>
      </WrapperOutside>
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
  margin-top: 155px;
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
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 0;
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const Heading = styled.div`
  font-family: "Bebas Neue";
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  width: 100%;
  margin-top: 26px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: clamp(40px, 5vw, 40px);
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: clamp(30px, 5vw, 30px);
    line-height: 45px;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  padding: 0;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.48px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.lightText};
  line-height: 24px;
  text-align: justify;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;

const WrapperOutside = styled.div`
  border-top: 1px solid ${({ theme }) => theme.imageborder};
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 60px;
  width: 100%;
  &:last-of-type {
    padding-bottom: 24px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-top: 48px;
    &:last-of-type {
      padding-bottom: revert;
    }
    align-items: center;
    justify-content: center;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 24px;
  }

  li {
    color: ${({ theme }) => theme.lightText};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 15rem;

  &:hover {
    cursor: pointer;
  }

  > :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const IconDescription = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-top: 20px;
  max-width: 13rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
