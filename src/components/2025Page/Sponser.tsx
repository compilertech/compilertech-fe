import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../styles/GlobalStyle";
import logo from "../../assets/2025/logo_acm.png";
const Container = styled.div`
  background-color: #000;
  color: white;
  padding: 4rem 5rem;
  width: 100vw;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 3rem 3rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem 2rem;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    padding: 2rem 1rem;
  }
`;

const SponsorSection = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const MainTitle = styled.h2`
  color: white;
  margin: 0;
  font-weight: normal;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const SubTitle = styled.h3`
  font-family: Spectral;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  color: #fb4dd8;
  margin: 5px 0 0;
  font-weight: normal;
  font-style: italic;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const Divider = styled.hr`
  height: 0.5px;
  background-color: #cfcbc4;
  margin: 30px 0;
  border: none;
`;

const SponsorsGrid = styled.div<SponsorsGridProps>`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.count === 1) return "1fr";
    else if (props.count === 2) return "1fr 1fr";
    else return "repeat(3, 1fr)";
  }};
  justify-items: center;
  gap: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: ${(props) => {
      if (props.count === 1) return "1fr";
      else return "repeat(2, 1fr)";
    }};
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SponsorLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: auto;
  height: 80px;

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    height: 60px;
  }
`;

const SponsorsComponent = () => {
  const sponsors = [
    {
      id: 1,
      name: "Association for Computing Machinery",
      logo: logo,
    },
    {
      id: 2,
      name: "Association for Computing Machinery",
      logo: logo,
    },
    {
      id: 3,
      name: "Association for Computing Machinery",
      logo: logo,
    },
  ];

  const renderWithCount = (count: number) => {
    const limitedSponsors = sponsors.slice(0, count);

    return (
      <Container>
        <SponsorSection>
          <SectionTitle>
            <MainTitle>Making It Possible:</MainTitle>
            <SubTitle>Our Sponsors</SubTitle>
          </SectionTitle>
          <Divider />
          <SponsorsGrid count={limitedSponsors.length}>
            {limitedSponsors.map((sponsor) => (
              <SponsorLogo key={sponsor.id}>
                <Logo>
                  <LogoImage src={sponsor.logo} alt={sponsor.name} />
                </Logo>
              </SponsorLogo>
            ))}
          </SponsorsGrid>
        </SponsorSection>
      </Container>
    );
  };

  return (
    <div>
      {renderWithCount(1)}
      {/* {renderWithCount(2)} */}
      {/* {renderWithCount(3)} */}
    </div>
  );
};

export default SponsorsComponent;
interface SponsorsGridProps {
  count: number;
}
