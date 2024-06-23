import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  color: ${({ theme }) => theme.primary};
  font-size: 64px;
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 0.04em;
  text-align: left;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid blue;
`;

const Benefits: React.FC = () => {
  return (
    <Container>
      <Title>CONFERENCE BENEFITS</Title>
      <RowContainer>
        <div>Benefit 1</div>
        <div>Benefit 2</div>
        <div>Benefit 3</div>
      </RowContainer>
    </Container>
  );
};

export default Benefits;
