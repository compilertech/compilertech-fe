import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../styles/GlobalStyle";
import logo from "../../assets/2025/logo_acm.png";
import isoftLogo from "../../assets/2025/isoft-logo.png";
import nvidiaLogo from "../../assets/2025/nvidia-logo-vert-rgb-wht-no-reg-for-screen.svg";

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
  margin-bottom: 1rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 0px;
`;

const MainTitle = styled.h2`
  color: white;
  margin: 0;
  font-weight: normal;
  font-family: "Satoshi", sans-serif;
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
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  color: #fb4dd8;
  margin: 5px 0 30px;
  font-weight: normal;
  font-style: italic;
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
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
  height: ${props => props.height || "80px"};

  @media (max-width: ${SMALL_MOBILE_BREAKPOINT}) {
    height:  ${props => props.height ? (Number(props.height) * 0.75) + "px" : "60px"};
  }
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Satoshi", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 3rem auto 2rem;
  position: relative;
  z-index: 5;
  text-align: center;
  width: 100%;
  justify-content: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 5;
  }
`;

const SponsorsComponent = () => {
  const legendSponsors: SpoonsosrDetails[] = [
    {
      id: "L_1",
      name: "NVIDIA",
      logo: nvidiaLogo,
      height: 150
    },
  ];
  const regularSponsors: SpoonsosrDetails[] = [
    {
      id: 1,
      name: "Association for Computing Machinery",
      logo: logo,
    },
    {
      id: 2,
      name: "India SOFTware Engineering community",
      logo: isoftLogo,
      height: 60,
    },
  ];

  const renderSponsorsGrid = (
    sponsorsList: typeof regularSponsors | typeof legendSponsors,
    gridTitle: string
  ) => (
    <SponsorSection>
      <TitleHeader>{gridTitle}</TitleHeader>
      <SponsorsGrid count={sponsorsList.length}>
        {sponsorsList.map((sponsor) => (
          <SponsorLogo key={sponsor.id}>
            <Logo>
              <LogoImage height={sponsor.height} src={sponsor.logo} alt={sponsor.name} />
            </Logo>
          </SponsorLogo>
        ))}
      </SponsorsGrid>
    </SponsorSection>
  );

  return (
    <Container id="sponsors">
      <SectionTitle>
        <MainTitle>Making It Possible</MainTitle>
        <SubTitle>Our Sponsors</SubTitle>
      </SectionTitle>
      {renderSponsorsGrid(legendSponsors, "Platinum Sponsor")}
      {renderSponsorsGrid(regularSponsors, "Our Partners")}
    </Container>
  );
};

export default SponsorsComponent;
interface SponsorsGridProps {
  count: number;
}

interface SpoonsosrDetails {
  id: string | number;
  name: string;
  logo: string;
  height?: number; // Optional for flexibility
}
