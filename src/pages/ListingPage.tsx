import React from "react";
import { StyledH2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface ListingPageProps {}

export const ListingPage: React.FC<ListingPageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>listing</StyledH2>
    </BaseContainer>
  );
};