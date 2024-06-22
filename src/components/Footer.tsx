// Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #303134;
  color: white;
  padding: 4rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Section = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  text-align: left;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #bbb;
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
            eget enim. Id aliquam elit condimentum enim urna.
          </Paragraph>
          <Copyright>©2024 Compiler</Copyright>
        </Section>
        <Section>
          <Title>Tracks</Title>
          <List>
            <ListItem>General Compiler Optimizations</ListItem>
            <ListItem>AI/ML</ListItem>
            <ListItem>Security</ListItem>
            <ListItem>Blockchain & Web3</ListItem>
          </List>
        </Section>
        <Section>
          <Title>Social</Title>
          <List>
            <ListItem>LinkedIn</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>WhatsApp</ListItem>
          </List>
        </Section>
      </FooterContainer>
    </>
  );
};

export default Footer;
