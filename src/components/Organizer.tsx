import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./shared/Button";
import Modal from "./shared/Modal";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const Organizer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Section id="organizer">
      <TextWrapper>
        <Title>ORGANIZATION</Title>
        <Description>
          We believe this workshop will become a venue that brings together
          compiler engineers, students and professors. We have a strong
          organizing team with engineers from Google, AMD, and Nvidia who are
          experienced in organizing technical events working tirelessly to make
          the workshop successful.
        </Description>
        <CommiteeContainer>
          <CommitteeBox>
            <CommitteeName>Program Committee</CommitteeName>
            <CommitteeList>
              <CommitteeListItem>
                PC Chair: Prof. Uday Khedker, IIT Bombay
              </CommitteeListItem>
              <CommitteeListItem>
                Dr. Dibyendu Das, Sr. Principal Engineer, Intel
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Govindarajan Ramaswamy, IISc Bangalore
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Kartik Nagar, IIT Madras
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Krishna Nandivada, IIT Madras
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Komondoor V. Raghavan, IISc Bangalore
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Manas Thakur, IIT Bombay
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Ramakrishna Upadrasta, IIT Hyderabad
              </CommitteeListItem>
              <CommitteeListItem>
                Ramana Radhakrishnan, Director - CPU Compilers, Nvidia
              </CommitteeListItem>
              <CommitteeListItem>
                Dr. Saurabh Joshi, Principal Researcher, Supra Research
              </CommitteeListItem>
              <CommitteeListItem>
                Prof. Subodh Sharma, IIT Delhi
              </CommitteeListItem>
              <CommitteeListItem>
                Dr. Uday Bondhugula, Founder, CEO & CTO, Polymage Labs
              </CommitteeListItem>
            </CommitteeList>
          </CommitteeBox>
          <CommitteeBox>
            <CommitteeName>Organizing Committee</CommitteeName>
            <CommitteeList>
              <CommitteeListItem>
                Chair: Aditya Kumar, Distinguished Speaker at ACM
              </CommitteeListItem>
              <CommitteeListItem>
                Co-chair: Ashutosh Pandey, AMD
              </CommitteeListItem>
              <CommitteeListItem>
                Co-chair: Pradeep Kumar, Nvidia
              </CommitteeListItem>
              <CommitteeListItem>
                Volunteer: Prerona Chaudhuri, Nvidia
              </CommitteeListItem>
              <CommitteeListItem>
                Volunteer: Dr. Raveendra Kumar, TCS Research
              </CommitteeListItem>
              <CommitteeListItem>
                Volunteer: Vinayaka Bandishti, Google
              </CommitteeListItem>
            </CommitteeList>
          </CommitteeBox>
        </CommiteeContainer>
        <ButtonContainer>
          <Button onClick={toggleModal}>Get updates</Button>
          {isModalOpen && (
            <Modal
              title="Get Updates"
              description="Stay in the loop and don't miss a thing about this conference."
              onClose={toggleModal}
              formName="get-updates-form"
            />
          )}
        </ButtonContainer>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  height: auto;
  margin-top: 7.5rem;
  padding: 0 11.25rem;
  width: 100%;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 3.75rem;
    padding: revert;
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  font-size: clamp(38px, 5vw, 64px);
  letter-spacing: 4px;
  color: ${({ theme }) => theme.primary};
  font-family: "Bebas Neue", sans-serif;
  text-align: center;
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};
  line-height: 24px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: none;
  @media (min-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

const CommiteeContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 10px;
    gap: 20px;
  }
`;

const CommitteeBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 24px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
`;

const CommitteeName = styled.div`
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1.5px;
  font-size: 24px;
  color: ${({ theme }) => theme.cardTitle};
`;

const CommitteeList = styled.ul`
  margin-top: 10px;
  color: ${({ theme }) => theme.lightText};
`;

const CommitteeListItem = styled.li`
  line-height: 1.7rem;
`;

export default Organizer;
