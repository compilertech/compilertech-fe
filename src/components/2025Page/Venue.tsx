import styled from "styled-components";
import venueImg from "../../assets/2025/venue.svg";
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
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const Heading = styled.h1`
  margin-bottom: 10px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
`;

const SubHeading = styled.h2`
  color: #d14ed5;
  margin-top: 0;
  margin-bottom: 40px;
  font-family: Spectral;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0%;
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
`;
const TopBorder = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
`;
function Venue() {
  return (
    <Container>
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
          <Button>Venue details</Button>
        </ContentContainer>
      </ContainerTwo>
      <TopBorder />
    </Container>
  );
}

export default Venue;
