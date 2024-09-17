import React, { useEffect } from "react";
import styled from "styled-components";

interface RegisterModalProps {
  onClose: () => void;
  hidden: boolean;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, hidden }) => {
  useEffect(() => {
    const rzpStudentPaymentForm = document.getElementById(
      "rzp_payment_form__student"
    );
    const rzpProfessionalPaymentForm = document.getElementById(
      "rzp_payment_form__professional"
    );
    const rzpLateBirdPaymentForm = document.getElementById(
      "rzp_payment_form_lateBird"
    );

    if (rzpLateBirdPaymentForm && !rzpLateBirdPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OZypo9JDPLwY9M";
      rzpLateBirdPaymentForm.appendChild(script);
    }

    if (rzpStudentPaymentForm && !rzpStudentPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OaZzHDuX92rO4K";
      rzpStudentPaymentForm.appendChild(script);
    }
    if (
      rzpProfessionalPaymentForm &&
      !rzpProfessionalPaymentForm.hasChildNodes()
    ) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_Oaa1MjHoIgFlDd";
      rzpProfessionalPaymentForm.appendChild(script);
    }
  });
  return (
    <Backdrop
      onClick={onClose}
      style={
        hidden ? { opacity: 0, zIndex: -100 } : { opacity: 100, zIndex: 100 }
      }
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Body>
          <div
            style={{
              display: "flex",
              gap: "16px",
              color: "black",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Bebas Neue",
                  letterSpacing: "0.3px",
                  fontSize: "20px",
                }}
              >
                For students
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bolder",
                    fontFamily: "cursive",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    gap: "5px",
                    color: "#a93d9d",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>₹</span>700
                </p>
                <form id="rzp_payment_form__student"></form>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Bebas Neue",
                  letterSpacing: "0.3px",
                  fontSize: "20px",
                }}
              >
                For professionals
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    gap: "2px",
                    color: "#a93d9d",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>₹</span>2000
                </p>
                <form id="rzp_payment_form__professional"></form>
              </div>
            </div>
          </div>
          <Deadline>
            Late Bird Special
            <div
              style={{ borderTop: "1px solid gray", marginTop: "5px" }}
            ></div>
            {/* <span>September 15</span>{" "} */}
            {/* <a href="https://time.is/Anywhere_on_Earth">(AoE)</a> */}
          </Deadline>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: "0.3px",
                fontSize: "20px",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              Last Minute Saver Registration
            </h3>
            <p>minimum 5 people/ 1500 INR per person</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <form
                id="rzp_payment_form_lateBird"
                style={{ marginTop: "16px" }}
              ></form>
            </div>
          </div>
          <Deadline>
            On successful registration, attendees will get a confirmation email.
            However the transaction receipt is enough. In case of any queries
            please email{" "}
            <a
              href="mailto:support@compilertech.org?subject=Support%20for%20sponsorship"
              target="_blank"
            >
              support@compilertech.org
            </a>
          </Deadline>
        </Body>
      </ModalContent>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 786px) {
    margin: 0 1rem;
  }
`;

const Body = styled.div`
  font-family: Satoshi;
`;

const Deadline = styled.p`
  text-align: center;
  color: black;
  padding: 10px;
  span,
  a {
    color: ${({ theme }) => theme.primary};
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default RegisterModal;
