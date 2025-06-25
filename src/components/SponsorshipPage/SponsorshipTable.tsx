import styled from "styled-components";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

import YesMarkIconSrc from "../../assets/common/YesMarkIcon.svg";
import CrossMarkIconSrc from "../../assets/common/CrossIcon.svg";
import GradientBlob1 from "../../assets/common/SponsorTableBackgroundDesing1.svg";
import GradientBlob2 from "../../assets/common/SponsorTableBackgroundDesing2.svg";

interface TableHeaderProps {
  isLast?: boolean;
}
interface TableRowProps {
  isLast?: boolean;
}
interface TableCellProps {
  isLast?: boolean;
}
interface SponsorshipTier {
  name: string;
  key: string;
}

const sponsorshipData = [
  {
    feature:
      "Opportunity to nominate a keynote speaker (Subject to Program Committee's discretion)",
    premium: true,
    gold: false,
    silver: false,
    bronze: false,
  },
  {
    feature: "Logo featured across all event materials",
    premium: "Extra Large",
    gold: "Large",
    silver: "Medium",
    bronze: "Small",
  },
  {
    feature: "Promotional video screened before keynote sessions",
    premium: "3 Mins",
    gold: "2 Mins",
    silver: "90 Sec",
    bronze: "60 Sec",
  },
  {
    feature: "Access to opt-in contact list of student attendees",
    premium: true,
    gold: true,
    silver: true,
    bronze: true,
  },
  {
    feature: "Opportunity to distribute promotional material via welcome email",
    premium: true,
    gold: true,
    silver: true,
    bronze: true,
  },
];

const tiers: SponsorshipTier[] = [
  { name: "Premium", key: "premium" },
  { name: "Gold", key: "gold" },
  { name: "Silver", key: "silver" },
  { name: "Bronze", key: "bronze" },
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
    border: none;
    margin-top: 0px;
  }
`;

const TableContainer = styled.div`
  max-width: 80rem;
  border-radius: 2rem;
  overflow-x: auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: none;
    box-shadow: none;
    background: transparent;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const MobileTableRow = styled.tr<{ isLast?: boolean }>`
  border-bottom: ${(props) => (props.isLast ? "none" : "2px solid #45504C")};
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th<TableHeaderProps>`
  padding: 40px;
  text-align: left;
  font-weight: 400;
  font-size: 1.125rem;
  color: #fff;
  border-right: 1px solid #2d3748;
  border-top: none;
  border-bottom: none;
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

const TableRow = styled.tr<TableRowProps>`
  border-bottom: 1px solid #2d3748;
  ${(props) =>
    props.isLast &&
    `
    border-bottom: none;
  `}
`;

const TableCell = styled.td<TableCellProps>`
  padding: 40px 20px;
  vertical-align: top;
  color: #cfcbc4;
  border: 1px solid #2d3748;
  border-collapse: collapse;
  font-family: inherit;
  align-items: center;
  justify-content: center;

  &.feature-detail-cell {
    text-align: center;
    align-content: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.25rem 1rem;
  }
`;

const MobileCardsContainer = styled.div`
  display: none;
  flex-direction: column;
  max-width: 500px;
  margin-top: 2rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
`;

const MobileTierCard = styled.div`
  margin-bottom: 2rem;
  overflow: hidden;
  font-family: inherit;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileTierHeader = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
  padding: 1.25rem 0;
  font-size: 24px;
  font-family: inherit;
`;

const MobileTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: inherit;
  border: 2px solid #45504c;
  border-radius: 60px;
`;

const MobileTableHeader = styled.th`
  padding: 40px 20px;
  border-bottom: 2px solid #45504c;
  border-right: 2px solid #45504c;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  font-family: inherit;
  background: transparent;
  &:last-child {
    border-right: none;
  }
`;

const MobileTableCell = styled.td<{ isLast?: boolean }>`
  padding: 1.5rem;
  color: #cfcbc4;
  font-size: 14px;
  border-right: 2px solid #45504c;
  border-bottom: ${(props) => (props.isLast ? "none" : "2px solid #45504C")};
  font-family: inherit;
  background: transparent;
  &:last-child {
    border-right: none;
  }
  &.feature-description {
    font-weight: 400;
    width: 60%;
    font-family: inherit;
  }
  &.feature-detail {
    text-align: center;
    align-content: center;
  }
`;

const Title = styled.h2`
  color: white;
  font-family: Satoshi, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h3`
  color: #fb4dd8;
  margin-top: 5px;
  font-family: serif;
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 36px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
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
  position: relative;
  margin: 10px 80px 80px;
  padding: 60px 80px;
  border-radius: 16px;
  background: #151b1a;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 10px 80px;
    width: 100%;
    padding: 50px 24px;
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

const SponsorshipTable = () => {
  const renderIcon = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <img src={YesMarkIconSrc} />
      ) : (
        <img src={CrossMarkIconSrc} />
      );
    }
    return value;
  };

  return (
    <>
      <AbsoluteDecorWrapper>
        <DecorImage src={GradientBlob1} top="80px" left="0px" width="165px" />
        <DecorImage
          src={GradientBlob2}
          bottom="10px"
          right="0px"
          width="260px"
        />

        <ContentWrapper>
          <Title>Sponsorship</Title>
          <Subtitle>Tier and Benefits</Subtitle>
          <TableWrapper>
            <TableContainer>
              <StyledTable>
                <thead>
                  <tr>
                    <TableHeader>Sponsorship Benefits</TableHeader>
                    {tiers.map((tier, index) => (
                      <TableHeader
                        key={tier.key}
                        isLast={index === tiers.length - 1}
                      >
                        {tier.name}
                      </TableHeader>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipData.map((row, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      isLast={rowIndex === sponsorshipData.length - 1}
                    >
                      <TableCell className="feature-description">
                        {row.feature}
                      </TableCell>
                      {tiers.map((tier, index) => (
                        <TableCell
                          className="feature-detail-cell"
                          key={tier.key}
                          isLast={index === tiers.length - 1}
                        >
                          {renderIcon(row[tier.key as keyof typeof row])}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </tbody>
              </StyledTable>
              <MobileCardsContainer>
                {tiers.map((tier) => (
                  <MobileTierCard key={tier.key}>
                    <MobileTierHeader>{tier.name}</MobileTierHeader>
                    <MobileTable>
                      <thead>
                        <MobileTableRow>
                          <MobileTableHeader>
                            Sponsorship Benefits
                          </MobileTableHeader>
                          <MobileTableHeader>{tier.name}</MobileTableHeader>
                        </MobileTableRow>
                      </thead>
                      <tbody>
                        {sponsorshipData.map((row, rowIndex) => (
                          <MobileTableRow
                            key={rowIndex}
                            isLast={rowIndex === sponsorshipData.length - 1}
                          >
                            <MobileTableCell
                              isLast={rowIndex === sponsorshipData.length - 1}
                              className="feature-description"
                            >
                              {row.feature}
                            </MobileTableCell>
                            <MobileTableCell
                              isLast={rowIndex === sponsorshipData.length - 1}
                              className="feature-detail"
                            >
                              {renderIcon(row[tier.key as keyof typeof row])}
                            </MobileTableCell>
                          </MobileTableRow>
                        ))}
                      </tbody>
                    </MobileTable>
                  </MobileTierCard>
                ))}
              </MobileCardsContainer>
            </TableContainer>
          </TableWrapper>
        </ContentWrapper>
      </AbsoluteDecorWrapper>
    </>
  );
};

export default SponsorshipTable;
