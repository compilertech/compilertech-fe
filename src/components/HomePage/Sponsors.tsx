import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const Sponsors: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OZypo9JDPLwY9M";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <>
      <Section id="sponsors">
        <Title>SPONSORS</Title>
        <SponsorTypeSectionList>
          <SponsorTypeSection>
            <SponsorType>Platinum</SponsorType>
            <SponsorListing>
              <p>Contact us for sponsorship</p>
            </SponsorListing>
          </SponsorTypeSection>
          <SponsorTypeSection>
            <SponsorType>Gold</SponsorType>
            <SponsorListing>
              <SponsorImage
                src={
                  theme.name === "light"
                    ? "nvidia-logo-horz-dark.png"
                    : "nvidia-logo-horz-light.png"
                }
              />
            </SponsorListing>
          </SponsorTypeSection>
          <SponsorTypeSection>
            <SponsorType>Silver</SponsorType>
            <SponsorListing>
              <p>Contact us for sponsorship</p>
            </SponsorListing>
          </SponsorTypeSection>
        </SponsorTypeSectionList>
        <Description>
          We are looking for sponsors! Your support will help us deliver a
          high-quality, impactful workshop, fostering the next wave of
          innovations in compiler technology. Join us in making this event a
          remarkable success. Three sponsorship tiers are available Platinum,
          Gold, and Silver. Please reach out to know more about different tiers.
          Every sponsor will get their names listed on our website. Sponsors can
          also put booths to showcase their products, talk about their
          offerings, and share open job opportunities. You can directly donate
          using the link below or email{" "}
          <Email
            href="mailto:support@compilertech.org?subject=Support%20for%20sponsorship"
            target="_blank"
          >
            support@compilertech.org
          </Email>{" "}
          for any help.
          <form id="rzp_payment_form" style={{ marginTop: "16px" }}></form>
        </Description>
      </Section>
    </>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 6rem;
  padding: 0 11.75rem;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    padding: 2rem 0 0 0;
    margin-top: 1.5rem;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 2px;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 0.5rem;
  }
`;

const SponsorTypeSectionList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 60px;
  margin-top: 16px;
  margin-bottom: 32px;
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 24px;
    flex-direction: column;
    gap: 20px;
  }
`;

const SponsorTypeSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.lightText};
`;

const SponsorType = styled.h4`
  font-family: monospace;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${({ theme }) => theme.primary};
`;

const SponsorListing = styled.div`
  display: flex;
  gap: 20px;
  height: 72px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    align-items: flex-start;
    p {
      margin-top: 12px;
    }
  }
`;

// PeakXV might require this
// const DarkSponsorImage = styled.img`
//   height: 60px;
//   ${({ theme }) =>
//     theme.name === "light" &&
//     "background-color: black; border-radius: 8px; padding: 8px; margin: 8px;"}
// `;

const SponsorImage = styled.img`
  height: 60px;
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
  color: ${({ theme }) => theme.lightText};
  text-align: center;
  margin-bottom: 3.75rem;
  form {
    margin-top: 28px;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 1.5rem;
    text-align: center;
    form {
      margin-top: 16px;
    }
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: justify;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Email = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-decoration: none;
`;

export default Sponsors;
