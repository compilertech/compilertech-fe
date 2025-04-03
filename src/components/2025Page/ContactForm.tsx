import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <SectionDescription>
        Have questions about the IICT 2025 Workshop? Want to know more about
        participating or attending? We'd love to hear from you!
      </SectionDescription>

      <FormWrapper>
        <ContactForm />
      </FormWrapper>

      <ContactInfo>
        <InfoItem>
          <InfoLabel>Email:</InfoLabel>
          <InfoValue>contact@compilertech.org</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Follow us:</InfoLabel>
          <SocialLinks>
            <SocialLink
              href="https://twitter.com/compiler_tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/compiler-technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </SocialLink>
          </SocialLinks>
        </InfoItem>
      </ContactInfo>
    </Section>
  );
};

// Styled components
const Section = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  color: #a93d9d;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #a93d9d;
  margin-bottom: 0.5rem;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #a93d9d;
    text-decoration: underline;
  }
`;

export default ContactSection;
