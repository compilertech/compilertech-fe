import styled from "styled-components";
import { ScheduleTable } from "./Data/DayInterface";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";
import { LuLink } from "react-icons/lu";
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
        <Session key={index} bgColor={sessionData.presenters ? "#F5D6F5" : ""}>
          {sessionData.leading && (
            <SessionHeader>
              <SessionTimeWrapper>
                <SessionTime>{sessionData.mainTime}</SessionTime>
              </SessionTimeWrapper>
              <SessionTypeWrapper>
                {sessionData.presenters && (
                  <div>
                    <Pill>Invited talk</Pill>
                  </div>
                )}
                <SessionType>
                  {sessionData.leading}
                  {sessionData.sessionLink && (
                    <SessionLink href={sessionData.sessionLink}>
                      <LuLink size="14px" />
                    </SessionLink>
                  )}
                </SessionType>
                <SessionDescription>
                  {sessionData.presenters?.length &&
                    sessionData.presenters.map((presenter, currentIdx) =>
                      Presenter(
                        presenter,
                        sessionData.presenters?.length ?? 0,
                        currentIdx
                      )
                    )}
                </SessionDescription>
              </SessionTypeWrapper>
            </SessionHeader>
          )}

          {sessionData.subChildren.map((subChild, keyIndex) => (
            <Section key={keyIndex} bgColor="white">
              <Duration>{subChild.time}</Duration>
              <Content>
                <SectionHeading>
                  {subChild.heading}
                  {subChild.YTLink && (
                    <SessionLink href={subChild.YTLink}>
                      <LuLink size="14px" />
                    </SessionLink>
                  )}
                </SectionHeading>
                <div>
                  {subChild.presenters?.map((presenter, currentIdx) =>
                    Presenter(
                      presenter,
                      subChild.presenters?.length ?? 0,
                      currentIdx
                    )
                  )}
                </div>
              </Content>
            </Section>
          ))}
        </Session>
      ))}
    </Wrapper>
  );
}

function Presenter(
  presenter: { name: string; link?: string },
  count: number,
  currentIdx: number
) {
  let suffix = "";
  if (count === 1 || count - 1 === currentIdx) {
    suffix = "";
  } else if ((count === 2 && currentIdx === 0) || currentIdx + 2 === count) {
    suffix = " and ";
  } else {
    suffix = ", ";
  }
  console.log({ suffix, presenter, count, currentIdx });
  return (
    <>
      {presenter.link ? (
        <Mentor>
          {presenter.name}
          <a href={presenter.link}>
            <LuLink color="#a93d9d" size={"12px"} />
          </a>
          {suffix}
        </Mentor>
      ) : (
        <Mentor>
          {presenter.name}
          {suffix}
        </Mentor>
      )}
    </>
  );
}

export default ProgramTable;

// New styled components for links
const SessionLink = styled.a`
  display: inline-block;
  margin-left: 4px;
  color: inherit;
`;

const Pill = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background-color: #f5d6f5;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 24px;
  color: black;
  font-size: 14px;
  font-weight: 700;
`;

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

const SessionTypeWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SessionType = styled.span`
  color: black;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.28px;
`;

const SessionDescription = styled.p`
  color: var(--Black, #3d3d3d);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.28px;
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
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 3;
  }
`;

const SectionHeading = styled.span`
  color: ${({ theme }) => theme.primary};
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
  a {
    display: inline-block;
    margin-left: 2px;
  }
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
