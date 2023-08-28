import React from "react";
import { Heading2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>log in</Heading2>
    </BaseContainer>
  );
};
