// Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #303134;
  color: white;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 60px 120px;
    h3 {
      margin: 0;
    }
  }
`;

const Section = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const Title = styled.h3`
  margin: 10px 0;
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
`;

const Copyright = styled.div`
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  color: #bbb;
`;

const Links = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-top: 50px;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <Section>
          <Title>COMPILER</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Neque non tincidunt
            scelerisque mauris suspendisse pellentesque. Tempus hendrerit
            facilisis morbi viverra. Neque vitae pellentesque facilisis lacus
            eget enim. Id aliquam elit condimentum enim urna. Lorem ipsum dolor
            sit amet consectetur. Neque non tincidunt scelerisque mauris
            suspendisse pellentesque. Tempus hendrerit facilisis morbi viverra.
            Neque vitae pellentesque facilisis lacus eget enim. Id aliquam elit
            condimentum enim urna.
          </Paragraph>
          <Copyright>©2024 Compiler</Copyright>
        </Section>
        <Links>
          <Section>
            <p style={{ marginBottom: "10px" }}>Tracks</p>
            <List>
              <ListItem>General Compiler Optimizations</ListItem>
              <ListItem>AI/ML</ListItem>
              <ListItem>Security</ListItem>
              <ListItem>Blockchain & Web3</ListItem>
            </List>
          </Section>
          <Section>
            <p style={{ marginBottom: "10px" }}>Social</p>
            <List>
              <ListItem>LinkedIn</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>WhatsApp</ListItem>
            </List>
          </Section>
        </Links>
      </FooterContainer>
    </>
  );
};

export default Footer;
