import styled from "styled-components";
import { ScheduleTable } from "./Data/DayInterface";

// Define the interface for props
interface StyledProps {
  bgColor: string;
}

interface ProgramTableProps {
  day: ScheduleTable;
}

function ProgramTable({ day }: ProgramTableProps) {
  return (
    <Wrapper>
      <Heading>
        <Date>{day.date}</Date>
        <Text>Displayed time zone: </Text>
        <Timezone>India(Chennai, Kolkata, Mumbai, New Delhi) </Timezone>
        change
      </Heading>
      {day.scheduleTableChildren.map((sessionData, index) => (
        <Session key={index} bgColor={sessionData.color}>
          <SessionHeader>
            <IntialContent>
              <SessionTime>{sessionData.mainTime}</SessionTime>
              <SessionType>{sessionData.leading}</SessionType>
            </IntialContent>
            <SessionCategory>{sessionData.trailing}</SessionCategory>
          </SessionHeader>

          {sessionData.subChildren.map((subChild, keyIndex) => (
            <Section key={keyIndex} bgColor={subChild.color}>
              <Duration>{subChild.time}</Duration>
              <Content>
                <SectionHeading>{subChild.heading}</SectionHeading>
                <Mentor>
                  {subChild.description}, {subChild.subDescription}
                </Mentor>
              </Content>
            </Section>
          ))}
        </Session>
      ))}
    </Wrapper>
  );
}

export default ProgramTable;

const Heading = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #000;
`;
const Date = styled.div`
  font-family: "Bebas Neue";
  font-size: 25px;
  margin: 15px;
`;

const Timezone = styled.span`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
`;
const Text = styled.text`
  margin-left: 15px;
`;
// Apply StyledProps interface here to inform TypeScript of the expected prop types
const Session = styled.div<StyledProps>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  border-bottom: 1px solid #000;
`;

const Section = styled.div<StyledProps>`
  background-color: ${(props) => props.bgColor};
  height: 80px;
  border-top: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 101px;
`;

const IntialContent = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
`;
// Other styled-components without props
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Satoshi", sans-serif;
  align-items: center;
  background-color: #f0f0f0;
  border: 4px solid #3d3d3d;
`;

const SessionHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  height: 80px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const SessionTime = styled.span`
  width: 114px;
  height: 50px;
  background-color: #3d3d3d;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 10px;
  font-weight: 200;
`;

const SessionType = styled.span`
  text-align: start;
`;

const SessionCategory = styled.span`
  text-align: right;
`;

const Duration = styled.span`
  margin-left: 25px;
`;

const SectionHeading = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const Mentor = styled.span`
  color: #555;
`;
