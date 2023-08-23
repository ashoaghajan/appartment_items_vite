import React from "react";
import { StyledH2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface CreatePageProps {}

export const CreatePage: React.FC<CreatePageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>create</StyledH2>
    </BaseContainer>
  );
};