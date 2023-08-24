import React from "react";
import { StyledH2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";
import { LoginForm } from "../components/Login/LoginForm";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>log in</StyledH2>
      <LoginForm />
    </BaseContainer>
  );
};
