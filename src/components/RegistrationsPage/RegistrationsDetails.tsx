import styled from "styled-components";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

import GradientBlob1 from "../../assets/common/SponsorTableBackgroundDesing1.svg";
import GradientBlob2 from "../../assets/common/SponsorTableBackgroundDesing2.svg";

import AttendeeIcon from "../../assets/common/Attendee.svg";
import FoodIcon from "../../assets/common/Food-outline.svg";

const feeTableData = [
  ["ACM Student", "₹700"],
  ["Student", "₹800"],
  ["ACM Professional Member", "₹1000"],
  ["Professional Member", "₹1200"],
];

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #ffffff;
  font-family: "Satoshi", sans-serif;
  border: 1px solid #4a5568;
  border-radius: 2rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 0px;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  border-radius: 2rem;
  overflow-x: auto;
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    border-radius: 0.75rem;
    border: none;
    box-shadow: none;
    background: transparent;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 1080px;
  border: 1px solid #4a5568;
  border-collapse: collapse;
  background: transparent;
  border-radius: 2rem;
  overflow: hidden;
  font-family: inherit;
  table-layout: fixed;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    min-width: 70%;
    table-layout: auto;
  }
`;

const TableHeader = styled.th<{ isLast?: boolean }>`
  padding: 40px;
  font-weight: 400;
  font-size: 1.125rem;
  color: #fff;
  border-right: 1px solid #2d3748;
  font-family: inherit;
  text-align: center;

  &:first-child {
    border-top-left-radius: 2rem;
  }
  ${(props) =>
    props.isLast &&
    `
    border-top-right-radius: 2rem;
    border-right: none;
  `}
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.25rem 1rem;
  }
`;

const TableRow = styled.tr<{ isLast?: boolean }>`
  border-bottom: 1px solid #2d3748;
  ${(props) =>
    props.isLast &&
    `
    border-bottom: none;
  `}
`;

const TableCell = styled.td<{ isLast?: boolean }>`
  padding: 40px 20px;
  color: #cfcbc4;
  border: 1px solid #2d3748;
  font-family: inherit;
  text-align: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.25rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-family: Satoshi, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
  }
`;

const SectionSubtitle = styled.h3`
  color: #fb4dd8;
  margin-top: 5px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const AbsoluteDecorWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 160px);
  max-width: 1200px;
  position: relative;
  padding: 60px 80px;
  border-radius: 16px;
  background: #151b1a;
  margin-top: 150px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 10px 80px;
    width: 100%;
    padding: 40px 24px 50px;
  }
`;

const DesktopHeader = styled.div`
  position: relative;
  margin: 0px 80px 80px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 80px 20px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  margin: 40px auto;
  gap: 40px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    gap: 30px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const LeftCol = styled.div`
  flex: 0 0 40%;
  align-items: flex-start;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    margin-bottom: 1.5rem;
  }
`;

const RightCol = styled.div`
  flex: 0 0 55%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
  }
`;

const SectionHeading = styled.h3`
  color: #d14ed5;
  font-style: italic;
  font-family: serif;
  font-weight: 500;
  font-size: 36px;
  margin-left: 0px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    margin-left: 0px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 0;
  }
`;

const NoteText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 120%;
  text-wrap: wrap;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`;

const DecorImage = styled.img<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
}>`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  ${(props) => props.width && `width: ${props.width};`}
  user-select: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #ffffff;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

const IconCircle = styled.div`
  font-size: 1.5rem;
  margin-right: 0.75rem;
  background-color: #232928;
  width: 45px;
  height: 45px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 40px;
    height: 40px;
  }
`;

const Highlight = styled.span`
  font-weight: 500;
`;

const IconImg = styled.img`
  max-width: 80%;
`;

const GradientButton = styled.button`
  padding: 0.75rem 3.75rem;
  color: #ffffff;
  border-radius: 8px;
  background: linear-gradient(95.98deg, #3779fe -7.3%, #fc4dd8 113.41%);
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 3%;
`;

const QueryWrapper = styled.div`
  width: calc(100% - 160px);
  max-width: 1200px;
  position: relative;
  padding: 10px 80px;
  border-radius: 16px;
  background: #151b1a;
  margin: 40px 0px 80px;
  border: 1px solid rgba(152, 149, 144, 0.69);
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 40px auto 60px;
    width: 86%;
    padding: 10px 24px;
  }
`;

const Divider = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  }
`;

// Common Table rendering function
const FeeTable = () => (
  <TableWrapper>
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Tier</TableHeader>
            <TableHeader isLast>Early Bird</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {feeTableData.map(([tier, price], idx) => (
            <TableRow key={tier} isLast={idx === feeTableData.length - 1}>
              <TableCell>{tier}</TableCell>
              <TableCell isLast>{price}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  </TableWrapper>
);

const RegistrationsDetails = () => {
  return (
    <>
      <AbsoluteDecorWrapper>
        <DecorImage src={GradientBlob1} top="80px" left="0px" width="165px" />
        <DecorImage src={GradientBlob2} bottom="400px" right="0px" width="260px" />
        <MobileHeader>
          <SectionTitle>Early Bird</SectionTitle>
          <SectionSubtitle>Fee Structure</SectionSubtitle>
        </MobileHeader>
        <ContentWrapper>
          <DesktopHeader>
            <SectionTitle>Early Bird</SectionTitle>
            <SectionSubtitle>Fee Structure</SectionSubtitle>
          </DesktopHeader>
          <FeeTable />
          <FlexRow>
            <LeftCol>
              <SectionHeading>Note</SectionHeading>
            </LeftCol>
            <RightCol>
              <NoteText>
                <span>Amounts are excluding 18% GST.</span>
                <br />
                <br />
                <Highlight>
                  To avail the ACM member discount, please enter your ACM membership ID in the registration form
                </Highlight>
              </NoteText>
            </RightCol>
          </FlexRow>
          <FlexRow>
            <LeftCol>
              <SectionHeading>Ticket Includes</SectionHeading>
            </LeftCol>
            <RightCol>
              <IconRow>
                <IconCircle>
                  <IconImg src={AttendeeIcon} alt="Icon" />
                </IconCircle>
                <span>Two workshop days: 27th – 28th September 2025</span>
              </IconRow>
              <IconRow>
                <IconCircle>
                  <IconImg src={FoodIcon} alt="Icon" />
                </IconCircle>
                <span>Daily light breakfast, lunch & snacks</span>
              </IconRow>
              <GradientButton
                onClick={() =>
                  window.open(
                    "https://in.explara.com/e/innovations-in-compiler-technology-2025-iict-2025/",
                    "_blank"
                  )
                }
              >
                Register
              </GradientButton>
            </RightCol>
          </FlexRow>
        </ContentWrapper>
        <QueryWrapper>
          <FlexRow>
            <LeftCol>
              <SectionHeading>For queries</SectionHeading>
            </LeftCol>
            <RightCol>
              <NoteText>
                <Highlight>
                  Reach out to support@compilertech.org with any queries about the event, or the registration process
                </Highlight>
              </NoteText>
            </RightCol>
          </FlexRow>
        </QueryWrapper>
      </AbsoluteDecorWrapper>
      <Divider />
    </>
  );
};

export default RegistrationsDetails;
