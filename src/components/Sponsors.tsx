import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const Sponsors: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          innovation in compiler technology. Join us in making this event a
          remarkable success!
        </Description>
        <form id="rzp_payment_form"></form>
        {isModalOpen && (
          <Modal
            title="Sponsor us"
            description="Thank you for considering this. Fill out the details and we will get back to you."
            onClose={toggleModal}
          />
        )}
      </Section>
    </>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 7.5rem;
  padding: 0 11.75rem;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    padding: 0;
    margin-top: 3.75rem;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 3.75rem;
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
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export default Sponsors;
