// Footer.tsx
import React, { useState } from "react";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";
import CraftedBy from "./shared/CraftedBy";
import { useIs2024 } from "../utils/is2024";

const tracks = [
  {
    id: "classical-compiler",
    title: "Classical Compiler Techniques",
  },
  {
    id: "ai-ml",
    title: "AI/ML, DSLs",
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

const Footer: React.FC = () => {
  const is2024Page = useIs2024();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <FooterContainer>
        <Section>
          <>
            <img className="footer-logo" src="./icons/logo_dark-cropped.png" />
          </>
          <Paragraph>
            The IICT (Innovations In Compiler Technology) workshop aims to bring
            together researchers, practitioners, and enthusiasts in the field of
            compiler technologies. This year's theme focuses on the cutting-edge
            advancements in compiler design, implementation, and optimization,
            and their impact on emerging software and hardware platforms.
          </Paragraph>
          <Copyright>© 2024 Compiler Technology</Copyright>
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
              </ListItem>{" "}
              <ListItem>
                <a href="mailto:support@compilertech.org" target="_blank">
                  Email
                </a>
              </ListItem>
            </List>
          </Section>
          <Section style={{ width: "250px", flex: "none" }}>
            <Title>Get in touch</Title>
            <Paragraph>
              In case of any queries please reach out to the workshop organizers{" "}
              <Email href="mailto:aditya.kumar@compilertech.org">
                Aditya Kumar
              </Email>
              {", "}
              <Email href="mailto:ashutosh@compilertech.org">
                Ashutosh Pandey
              </Email>
              {", "}
              <Email href="mailto:pradeep.kumar@compilertech.org">
                Pradeep Kumar
              </Email>
              {"."}
            </Paragraph>

            <Button onClick={toggleModal}>Contact Us</Button>
            {isModalOpen && (
              <Modal
                title="Contact Us"
                formName="get-in-touch-form"
                description="Stay in the loop and don't miss a thing about this conference."
                onClose={toggleModal}
              />
            )}
          </Section>
        </Links>
      </FooterContainer>
      {is2024Page && <CraftedBy />}
    </Container>
  );
};

const Container = styled.div`
  background-color: #303134;
  margin-top: 3.75rem;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 28px;
  .footer-logo {
    width: 120px;
    margin-top: 20px;
    margin-bottom: 15px;
    @media (min-width: ${MOBILE_BREAKPOINT}) {
      margin-top: -1.5rem;
    }
  }
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    padding: 50px 60px;
    gap: 60px;
    h3 {
      margin: 0;
    }
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row;
    padding: 60px 60px 45px 60px;
    gap: 120px;
    h3 {
      margin: 0;
    }
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding: 3.75rem 0;
    max-width: 1340px;
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
    width: 100%;
  }
`;

const Email = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-decoration: none;
`;

export default Footer;
