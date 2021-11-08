import React from "react";
import { Heading, Container } from "../utils/ui";
import { TimeLine } from "../components";

export const Time: React.FC = () => {
  return (
    <Container>
      <Heading>Magic Time Line</Heading>
      <TimeLine />
    </Container>
  );
};
