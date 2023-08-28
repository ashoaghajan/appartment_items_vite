import React from "react";
import { Heading2 } from "../components/core/typography";
import { BaseContainer } from "../containers/BaseContainer";

interface CreatePageProps {}

export const CreatePage: React.FC<CreatePageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>create</Heading2>
    </BaseContainer>
  );
};