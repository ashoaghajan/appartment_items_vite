import React from "react";
import { StyledH2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>registration</StyledH2>
    </BaseContainer>
  );
};
