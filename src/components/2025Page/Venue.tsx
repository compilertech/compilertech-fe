import styled from "styled-components";
import venueImg from "../../assets/2025/venue.svg";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const Container = styled.div`
  background-color: #000000;
  color: white;
  width: 100%;
  position: relative;
`;

const ContainerTwo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  padding: 6rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 4rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column-reverse;
    padding: 3rem 1.5rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 2rem;
  }
`;

const VenueImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding-left: 30px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const Heading = styled.h1`
  margin-bottom: 10px;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const SubHeading = styled.h2`
  color: #d14ed5;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    margin-bottom: 15px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

const Address = styled.p`
  margin-top: 0;
  margin-bottom: 40px;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  line-height: 140%;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 30px;
    font-size: 15px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 25px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 139px;
  height: 48px;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  gap: 12px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    width: 130px;
    height: 44px;
  }
`;

const TopBorder = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
`;

function Venue() {
  return (
    <Container id="venue">
      <TopBorder />
      <ContainerTwo>
        <ImageContainer>
          <VenueImage
            src={venueImg}
            alt="Historic building with tall tower and landscaped grounds"
          />
        </ImageContainer>
        <ContentContainer>
          <Heading>Where Innovation Meets</Heading>
          <SubHeading>Collaboration</SubHeading>
          <Address>
            Address : IISc, CV Raman Rd, Bengaluru, Karnataka 560012
          </Address>
          <Button
            onClick={() =>
              window.open("https://maps.app.goo.gl/TjPoMzQyJysDPiAi8", "_blank")
            }
          >
            View in Map
          </Button>
        </ContentContainer>
      </ContainerTwo>
      <TopBorder />
    </Container>
  );
}

export default Venue;
