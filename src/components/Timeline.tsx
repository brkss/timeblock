import React from "react";
import styled from "@emotion/styled";

export const TimeLine: React.FC = () => {
  return (
    <Container>
      <MainLine></MainLine>
    </Container>
  );
};

const Container = styled.div``;

const MainLine = styled.div`
  width: 100%;
  height: 41px;
  background: #272727;
  border-radius: 10px;
`;
