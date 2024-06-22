import React from "react";
import styled from "styled-components";

const Organizer: React.FC = () => {
  return (
    <Section id="organizer">
      <ContentWrapper>
        <ImageWrapper>
          <Image
            src="https://images.unsplash.com/photo-1718659107049-af60bebaacf0"
            alt="organizer"
          />
        </ImageWrapper>
        <TextWrapper>
          <Title>ORGANIZER</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Consectetur eget rhoncus
            vivamus mauris elit. Hendrerit a donec platea nulla pretium
            venenatis enim. Amet ut nunc eu fusce sit venenatis amet nunc
            egestas. Sit eget integer consequat odio fringilla massa sed
            pulvinar dignissim. Faucibus est in tincidunt cras egestas duis dui
            eros. Velit tempus scelerisque facilisis at amet habitant mattis
            aenean. Vitae quisque enim laoreet urna dictum nunc vestibulum.
          </Description>
          <Form>
            <Button>Get Updates</Button>
          </Form>
        </TextWrapper>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.body};
  height: auto !important;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const Title = styled.p`
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-family: "Bebas Neue", sans-serif;
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  line-height: 1.7rem;
  letter-spacing: 0.125rem;
  font-weight: 100;
  text-align: justify;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 40px 0;
`;

export default Organizer;
