import styled from "styled-components";
import venueImg from "../../assets/2025/venue.svg";
const Container = styled.div`
  display: flex;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
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
  justify-content: center;
  padding-left: 40px;
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 42px;
  color: #d14ed5;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 18px;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function Venue() {
  return (
    <Container>
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
    </Container>
  );
}

export default Venue;
