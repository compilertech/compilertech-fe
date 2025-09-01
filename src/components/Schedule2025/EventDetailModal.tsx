import React from "react";
import styled from "styled-components";
import CrossIconWhite from "../../assets/common/CrossIcon_White.svg";
import DocIcon from "../../assets/common/DocIcon.svg";
import MicIcon from "../../assets/common/MicIcon.svg";
import CalendarIcon from "../../assets/common/CalendarIcon.svg";
import NoteIcon from "../../assets/common/NoteIcon.svg";
import PeopleIcon from "../../assets/common/PeopleIcon.svg";
import { RiPlayLargeLine } from "react-icons/ri";

import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

interface EventDetailModalProps {
  open: boolean;
  onClose: () => void;
  event: {
    name: string;
    type: string;
    datetime: string;
    abstract: string;
    speakers: string;
    teaser: string;
  };
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({
  open,
  onClose,
  event,
}) => {
  if (!open) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseModalButton onClick={onClose}>
          <img src={CrossIconWhite} />
        </CloseModalButton>
        <ModalTitle>Session Details</ModalTitle>
        <ModalScrollableContent>
          <EventDetailList>
            {event.name && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <EventIconImg src={DocIcon} />
                  </EventIconWrapper>
                  <EventLabel>Name</EventLabel>
                </EventDetailHeader>
                <EventValue>{event.name}</EventValue>
              </EventDetailItem>
            )}
            {event.type && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <EventIconImg src={MicIcon} />
                  </EventIconWrapper>
                  <EventLabel>Session Type</EventLabel>
                </EventDetailHeader>
                <EventValue>{event.type}</EventValue>
              </EventDetailItem>
            )}
            {event.datetime && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <EventIconImg src={CalendarIcon} />
                  </EventIconWrapper>
                  <EventLabel>Date &amp; Time</EventLabel>
                </EventDetailHeader>
                <EventValue>{event.datetime}</EventValue>
              </EventDetailItem>
            )}
            {event.abstract && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <EventIconImg src={NoteIcon} />
                  </EventIconWrapper>
                  <EventLabel>Abstract/s</EventLabel>
                </EventDetailHeader>
                {event.abstract.split("\n").map((line, i) => (
                  <EventValue key={i}>{line}</EventValue>
                ))}
              </EventDetailItem>
            )}
            {event.speakers && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <EventIconImg src={PeopleIcon} />
                  </EventIconWrapper>
                  <EventLabel>Speakers</EventLabel>
                </EventDetailHeader>
                <EventValue>{event.speakers}</EventValue>
              </EventDetailItem>
            )}
            {event.teaser && (
              <EventDetailItem>
                <EventDetailHeader>
                  <EventIconWrapper>
                    <StyledRiPlayLargeLine />
                  </EventIconWrapper>
                  <EventLabel>Teaser</EventLabel>
                </EventDetailHeader>
                <EventValue>
                  <a href={event.teaser} target="_blank">
                    {event.teaser}
                  </a>
                </EventValue>
              </EventDetailItem>
            )}
          </EventDetailList>
        </ModalScrollableContent>
      </ModalContainer>
    </Backdrop>
  );
};

export default EventDetailModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 900px;
  max-width: 85vw;
  padding: 36px 40px 32px 40px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.12);
  position: relative;
  max-height: 90vh;
  height: auto;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 98vw;
    padding: 18px 4vw 18px 4vw;
  }
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0 0 4px #f3e6ff;
  }
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 28px;
  color: #09100f;
  font-family: Satoshi, sans-serif;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 7px;
    font-size: 18px;
  }
`;

const EventDetailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EventDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EventIconWrapper = styled.div`
  color: #222;
  background: #f3f3f3;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 36px;
    height: 36px;
  }
`;

const EventLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #09100f;
  margin-bottom: 2px;
  font-family: Satoshi, sans-serif;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const EventValue = styled.div`
  max-width: 95%;
  font-size: 16px;
  color: #151b1a;
  font-family: Satoshi, sans-serif;
  margin-top: 2px;
  overflow-wrap: anywhere;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 14px;
  }
`;

const EventDetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const ModalScrollableContent = styled.div`
  overflow-y: auto;
  max-height: calc(90vh - 130px);
`;

const EventIconImg = styled.img`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 20px;
    max-height: 20px;
  }
`;

const StyledRiPlayLargeLine = styled(RiPlayLargeLine)`
  font-size: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 20px;
  }
`;
