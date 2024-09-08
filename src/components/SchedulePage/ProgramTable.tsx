import styled from "styled-components";
import { ScheduleTable } from "./Data/DayInterface";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
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
        <div>
          <Text>Displayed time zone: </Text>
          <Timezone>India (Chennai, Kolkata, Mumbai, New Delhi)</Timezone>
        </div>
      </Heading>
      {day.scheduleTableChildren.map((sessionData, index) => (
        <Session key={index} bgColor={sessionData.color}>
          <SessionHeader>
            <SessionTimeWrapper>
              <SessionTime>{sessionData.mainTime}</SessionTime>
            </SessionTimeWrapper>
            <SessionType>{sessionData.leading}</SessionType>
          </SessionHeader>

          {sessionData.subChildren.map((subChild, keyIndex) => (
            <Section key={keyIndex} bgColor={subChild.color}>
              <Duration>
                {subChild.time.split(" ")[0]}{" "}
                <span>{subChild.time.split(" ")[1]}</span>
              </Duration>
              <Content>
                <SectionHeading>{subChild.heading}</SectionHeading>
                <Mentor>
                  {subChild.description}, <span>{subChild.subDescription}</span>
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
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px;
  }
`;
const Date = styled.div`
  font-family: "Bebas Neue";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.48px;
  color: #000;
`;

const Timezone = styled.span`
  color: var(--Black, #3d3d3d);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
`;
const Text = styled.text`
  color: var(--Black, #3d3d3d);
  text-align: justify;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
`;
// Apply StyledProps interface here to inform TypeScript of the expected prop types
const Session = styled.div<StyledProps>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  border-bottom: 1px solid #000;
`;

const Section = styled.div<StyledProps>`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  border-top: 1px solid #000;
  display: flex;
  align-items: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px;
  }
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
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  height: 80px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 4px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 4;
  }
`;

const SessionTimeWrapper = styled.div`
  flex: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 3;
  }
`;

const SessionTime = styled.span`
  padding: 8px 12px;
  color: var(--White, #fafafa);
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.24px;
  background-color: #3d3d3d;
  border-radius: 24px;
  display: inline-flex;
`;

const SessionType = styled.span`
  color: black;
  text-align: justify;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.28px;
  flex: 4;
`;

const Duration = styled.span`
  flex: 1;
  color: var(--Black, #3d3d3d);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.28px;
  span {
    margin-left: 4px;
    color: var(--Black, #3d3d3d);
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.28px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 3;
  }
`;

const SectionHeading = styled.span`
  color: ${({ theme }) => theme.primary};
  text-align: justify;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.28px;
`;

const Mentor = styled.span`
  color: var(--Black, #3d3d3d);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.28px;
  span {
    color: var(--Gray, #787878);
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.28px;
  }
`;
