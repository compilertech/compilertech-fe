// Footer.tsx
import React from "react";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";

const Footer: React.FC = () => {
  const tracks = [
    {
      id: "classical-compiler",
      title: "Classical Compiler Techniques",
    },
    {
      id: "ai-ml",
      title: "AI/ML, DLS",
    },
    {
      id: "security",
      title: "Security",
    },
    {
      id: "web3-blockchain",
      title: "Web3/Blockchain",
      description:
        "Compiler techniques for shaping the next generation of the Web",
    },
  ];
  return (
    <Container>
      <FooterContainer>
        <Section>
          <>
            <img className="footer-logo" src="./icons/logo_dark.png" />
          </>
          <Paragraph>
            The Compiler Technology Workshop organizing committee invites
            researchers, practitioners, and enthusiasts in the field of compiler
            technologies to submit presentation proposals for our upcoming
            workshop. This year's theme focuses on the cutting-edge advancements
            in compiler design, implementation, and optimization, and their
            impact on emerging software and hardware platforms.
          </Paragraph>
          <Copyright>©2024 Compiler</Copyright>
        </Section>
        <Links>
          <Section>
            <Title>Tracks</Title>
            <List>
              {tracks.map((track, index) => (
                <ListItem key={index}>
                  <a href={`#tracks-${track.id}`}>{track.title}</a>
                </ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <Title>Social</Title>
            <List>
              <ListItem>
                <a
                  href="https://www.linkedin.com/company/compiler-technology"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </ListItem>
              <ListItem>
                <a href="https://x.com/compiler_tech" target="_blank">
                  Twitter
                </a>
              </ListItem>
            </List>
          </Section>
        </Links>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #303134;
  margin-top: 3.75rem;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 2rem;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  .footer-logo {
    width: 100px;
    @media (min-width: ${MOBILE_BREAKPOINT}) {
      margin-top: -2.5rem;
    }
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: row;
    padding: 60px 60px;
    gap: 60px;
    h3 {
      margin: 0;
    }
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    padding: 60px 100px;
    gap: 120px;
    h3 {
      margin: 0;
    }
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding: 3.75rem 0;
    max-width: 1080px;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 10px 0 !important;
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.04em;
  text-align: left;
`;

const Paragraph = styled.p`
  margin: 0 0 20px 0;
  line-height: 1.5;
  color: #cccccc;
  text-align: justify;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #cccccc;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  text-align: left;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  color: #bbb;
`;

const Links = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    flex: 1.5;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
  }
`;

export default Footer;
