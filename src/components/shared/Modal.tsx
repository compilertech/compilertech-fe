import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { FaCheckCircle, FaCircleNotch } from "react-icons/fa";

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormChange = (field: keyof typeof formState, value: string) => {
    const newForm = {
      ...formState,
    };
    newForm[field] = value;
    setFormState(newForm);
  };
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmission = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": title.toLowerCase().split(" ").join("-") + "-form",
          ...formState,
        }),
      })
        .then(() => {
          setIsLoading(false);
          setIsSubmitted(true);
          setTimeout(() => onClose(), 1500);
        })
        .catch((error) => {
          console.error(`${title} form submission failing: ${error}`);
          setIsLoading(false);
          setIsSubmitted(false);
          alert("Something went wrong, please try again!");
        });
    },
    [formState, onClose, title]
  );
  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>
        <Body>
          <form onSubmit={handleSubmission}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formState.name}
              disabled={loading || isSubmitted}
              onChange={(e) => handleFormChange("name", e.target.value)}
            />
            <Input
              type="email"
              name="email"
              value={formState.email}
              placeholder="Email Address"
              onChange={(e) => handleFormChange("email", e.target.value)}
              disabled={loading || isSubmitted}
              required
            />
            <Textarea
              onChange={(e) => handleFormChange("message", e.target.value)}
              name="message"
              placeholder="Message"
              value={formState.message}
              disabled={loading || isSubmitted}
              required
            ></Textarea>
            <Footer>
              {isSubmitted ? (
                <Button type="submit" style={{ flex: 1, color: "white" }}>
                  <FaCheckCircle
                    size={22}
                    style={{ verticalAlign: "middle" }}
                  />
                </Button>
              ) : (
                <>
                  <StyledButton onClick={onClose}>Cancel</StyledButton>
                  <Button
                    disabled={loading}
                    type="submit"
                    style={{ flex: 1, color: "white" }}
                  >
                    {loading ? (
                      <Loader size={22} style={{ verticalAlign: "middle" }} />
                    ) : (
                      title
                    )}
                  </Button>
                </>
              )}
            </Footer>
          </form>
        </Body>
      </ModalContent>
    </Backdrop>
  );
};

const Loader = styled(FaCircleNotch)`
  animation: heartbeat 1s linear infinite;
  @keyframes heartbeat {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledButton = styled(Button)`
  background: white !important;
  color: black !important;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.6);
  flex: 1;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
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

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

const Description = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
  color: #666;
`;

const Body = styled.div`
  font-family: Satoshi;
  height: 200px !important;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Satoshi;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export default Modal;
