import React from "react";
import { Heading2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface DetailsPageProps {}

export const DetailsPage: React.FC<DetailsPageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>details</Heading2>
    </BaseContainer>
  );
};