import React, { useEffect } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const Sponsors: React.FC = () => {
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
        <Title>SPONSOR US</Title>
        <Description>
          We are looking for sponsors! Your support will help us deliver a
          high-quality, impactful workshop, fostering the next wave of
          innovations in compiler technology. Join us in making this event a
          remarkable success. Three sponsorship tiers are available Platinum, Gold, and Silver. Please reach out
          to know more about different tiers.
          Every sponsor will get their names listed on our website.
          Sponsors can also put booths to showcase their products, talk about their offerings, and share open job opportunities. You can directly donate using the link below or
          email{" "}
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
  margin-top: 3.5rem;
  padding: 0 11.75rem;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    padding: 0;
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
`;

const Email = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-decoration: none;
`;

export default Sponsors;
