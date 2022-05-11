import React from "react";
import {
  PasswordContainer,
  PasswordWrapper,
  PasswordTitle,
  PasswordText,
} from "./PasswordWidgetStyle";

const PasswordWidget = ({ children, active }) => {
  return (
    <PasswordContainer>
      <PasswordWrapper>
        <PasswordTitle>Password reset</PasswordTitle>
        <PasswordText active={active}>
          In order to reset password, click on Edit button.
        </PasswordText>
      </PasswordWrapper>
      {children}
    </PasswordContainer>
  );
};

export default PasswordWidget;
