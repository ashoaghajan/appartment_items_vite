import React from "react";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonsWrapper, SocialIcon, SocialIconsWrapper } from "./styles";
import {
  StyledButton,
  StyledForm,
  StyledInput,
} from "../core/styledComponents";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="email" />
      <StyledInput type="password" placeholder="password" />
      <ButtonsWrapper>
        <StyledButton>submit</StyledButton>
        <StyledButton>register</StyledButton>
      </ButtonsWrapper>
      <SocialIconsWrapper>
        <SocialIcon icon={faFacebook} />
        <SocialIcon icon={faGoogle} />
        <SocialIcon icon={faTwitter} />
      </SocialIconsWrapper>
    </StyledForm>
  );
};

export default LoginForm;
