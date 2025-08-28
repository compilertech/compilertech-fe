import React, { useState } from "react";
import styled from "styled-components";
import ClockIcon from "../../assets/common/ClockIcon.svg";
import TeaCupIconSrc from "../../assets/common/TeaCupIcon.svg";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import EventDetailModal from "./EventDetailModal";

export default function EventDetails() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dayTabs = ["Day 1", "Day 2"];
  const scheduleItems = [
    {
      id: "1_1",
      time: "8:00 am - 9:00 am",
      event: "Registration and Breakfast",
      icon: ClockIcon,
    },
    {
      id: "1_2",
      time: "9:00 am - 9:30 am",
      event: "Welcome and General Address",
      icon: ClockIcon,
    },
    {
      id: "1_3",
      time: "9:30 am - 10:30 am",
      icon: ClockIcon,
      buttonText: "Invited Talks",
      highlightedHeading: "Building compilers for AI programming frameworks",
      subHeading: "Uday Reddy Bondhugula",
    },
    {
      id: "1_4",
      time: "10:30 am - 10:50 am",
      icon: ClockIcon,
      highlightedHeading: "FireDucks: Pandas Accelerator using MLIR",
      subHeading: "Sourav Saha, Kazuhisa Ishizaka and Ashu Thakur",
    },
    {
      id: "1_5",
      time: "10:50 am - 11:10 am",
      icon: ClockIcon,
      highlightedHeading:
        "STGraph: A Framework for Temporal Graph Neural Networks",
      subHeading:
        "Joel Mathew Cherian, Nithin Puthalath Manoj, Kevin Jude Concessao and Unnikrishnan Cheramangalath",
    },
    {
      id: "1_6",
      time: "11:10 am - 11:40 am",
      event: "Tea Break",
      icon: TeaCupIconSrc,
    },
    {
      id: "1_7",
      time: "11:40 am - 12:00 pm",
      icon: ClockIcon,
      highlightedHeading: "New Age of compilation for AI HPC",
      subHeading: "Srihari Karnam and Judhajit Dutta",
    },
    {
      id: "1_8",
      time: "12:00 pm - 12:20 pm",
      icon: ClockIcon,
      highlightedHeading: "No-ISA is the Best ISA",
      subHeading: "Shreyash Pandey and Rishik Ram Jallarapu",
    },
    {
      id: "1_9",
      time: "12:20 pm - 12:40 pm",
      icon: ClockIcon,
      highlightedHeading:
        "Towards Higher First Silicon Success via Improved Finite-State Machine Detection",
      subHeading:
        "Ian D. Taras, Nicholas V. Giamblanco, Thomas Peters, Vikram Narayan and Samir Mitta",
    },
    {
      id: "1_10",
      time: "12:40 pm - 13:00 pm",
      icon: ClockIcon,
      highlightedHeading:
        "Unveiling the Future: A Glimpse into the Emerging Landscape of Quantum Compilers",
      subHeading: "By : Tanmay Sarka",
    },
    {
      id: "1_11",
      time: "13:00 pm - 14:00 pm",
      icon: TeaCupIconSrc,
      event: "Lunch Break",
    },
    {
      id: "1_12",
      time: "14:00 pm - 14:30 pm",
      icon: ClockIcon,
      buttonText: "Invited Talk",
      highlightedHeading: "Web3 and Program Analysis",
      subHeading: "Saurabh Joshi",
    },
    {
      id: "1_13",
      time: "14:30 pm - 14:50 pm",
      icon: ClockIcon,
      highlightedHeading:
        "Techniques for IDE-friendly Compiler Construction and Applications in Blockchain",
      subHeading: "Bhavya Bhatt",
    },
    {
      id: "1_14",
      time: "14:50 pm - 15:10 pm",
      icon: ClockIcon,
      highlightedHeading: "Formal verification of smart contracts",
      subHeading: "Vikramaditya Kokil",
    },
    {
      id: "1_15",
      time: "15:10 pm - 15:30 pm",
      icon: ClockIcon,
      highlightedHeading:
        "C–lisp and Flexible Macro Programming with S–expressions",
      subHeading: "Vedanth Padmaraman and Sasank Chilamkurthy",
    },
    {
      id: "1_16",
      time: "15:30 pm - 16:00 pm",
      icon: TeaCupIconSrc,
      event: "Tea break",
    },
    {
      id: "1_17",
      time: "16:00 pm - 16:20 pm",
      icon: ClockIcon,
      highlightedHeading: "What is Dyalog APL and What Can It Do For You?",
      subHeading: "Aarush Bhat",
    },
    {
      id: "1_18",
      time: "16:20 pm - 17:35 pm",
      icon: ClockIcon,
      buttonText: "Invited Talk",
      highlightedHeading:
        "DL4Compilers – Turbo-charging compiler optimizations via Deep Learning",
      subHeading: "Dibyendu Das and Ramakrishna Upadrashta",
    },
  ];

  return (
    <EventDetailsWrapper>
      <TabWrapper>
        {dayTabs.map((tabLabel, tabIdx) => (
          <TabButton
            key={tabLabel}
            selected={selectedDayIndex === tabIdx}
            onClick={() => setSelectedDayIndex(tabIdx)}
            type="button"
          >
            {tabLabel}
          </TabButton>
        ))}
      </TabWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title>Saturday 28 Sep</Title>
          <SubTitle>
            (Displayed time zone: India (Chennai, Kolkata, Mumbai, New Delhi))
          </SubTitle>
        </ContentHeader>
        {scheduleItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <ContentList>
              <LeftContent>
                <LeftContentIcon src={item.icon} /> {item.time}
              </LeftContent>
              <RightContent>
                {item.buttonText ? (
                  <EventButton onClick={() => setIsModalOpen(true)}>
                    {item.buttonText}
                  </EventButton>
                ) : null}
                {item.event ? item.event : null}
                {item.highlightedHeading ? (
                  <HighlightedHeading>
                    {item.highlightedHeading}
                  </HighlightedHeading>
                ) : null}
                {item.subHeading ? (
                  <SubHeading>{item.subHeading}</SubHeading>
                ) : null}
              </RightContent>
            </ContentList>
            {scheduleItems.length - 1 !== index && <Divider />}
          </React.Fragment>
        ))}
      </ContentWrapper>
      <EventDetailModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={{
          name: "Building compilers for AI programming frameworks",
          type: "Keynote",
          datetime: "24th September, 9:00 am - 9:30 am",
          abstract:
            "MLIR is now an inherent part of the LLVM compiler infrastructure, but what connects the two representations? In theory, the conceptual similarity of the core representation. In practice, a highly important, yet often overlooked, module translation subsystem. This talk will present the multi-dialect translation mechanism available in MLIR to target LLVM IR, explain how to use it for a custom dialect, and argue why it may not always be the best idea. It will also discuss interoperability between MLIR and LLVM IR functions, including ABI for built-in types and calling conventions.",
          speakers: "Uday Reddy Bondhugula",
          location: "Pavilion Room",
        }}
      />
    </EventDetailsWrapper>
  );
}

const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #000000;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 0 6rem 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 3rem 4rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
    flex-direction: column;
  }
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #ffffff;
  border-radius: 8px;
  margin: 0px 0 40px;
  max-width: 1500px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 16px 0;
  }
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 16px 0;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(90deg, #367AFF 0%, #FF4DD8 100%)"
      : "transparent"};
  color: ${({ selected, theme }) => (selected ? "#fff" : theme.text)};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-radius 0.2s, box-shadow 0.2s,
    transform 0.2s;
  outline: none;
  z-index: ${({ selected }) => (selected ? 2 : 1)};
  position: relative;

  border: none;
  border-radius: ${({ selected }) => (selected ? "8px" : "0")};
  box-shadow: ${({ selected }) =>
    selected ? "0 2px 8px 0 rgba(60, 60, 130, 0.10)" : "none"};
  transform: ${({ selected }) => (selected ? "scale(1.01, 1.04)" : "none")};
`;

const ContentWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  max-width: 1500px;
`;

const ContentHeader = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  border-radius: 16px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  flex: 4;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
    flex: 1;
  }
`;

const SubTitle = styled.h3`
  color: white;
  margin-left: 20px;
  font-weight: 400;
  font-size: 16px;
  flex: 5.5;
  height: 100%;
  margin-top: auto;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 0px;
    font-size: 14px;
    flex: 1;
  }
`;

const ContentList = styled.div`
  padding: 40px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #09100f;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    padding: 20px;
    font-size: 16px;
    gap: 10px;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    text-align: center;
  }
`;

const RightContent = styled.div`
  flex: 5;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    text-align: center;
  }
`;

const Divider = styled.div`
  width: auto;
  height: 1px;
  margin: 0px 40px;
  background: #000000;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 0px 20px;
  }
`;

const EventButton = styled.button`
  background: transparent;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 24px;
  cursor: pointer;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 8px;
  }
`;

const HighlightedHeading = styled.p`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 125%;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 8px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const SubHeading = styled.p`
  font-weight: 300;
  font-style: Italic;
  font-size: 24px;
  line-height: 100%;
  color: #787878;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
  }
`;

const LeftContentIcon = styled.img`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 24px;
    max-height: 24px;
  }
`;
