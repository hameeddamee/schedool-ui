import React from "react";
import AuthMessage from "../../../shared/components/AuthMessage/AuthMessage";

const btnOptions = {
  text: "Login",
  linkTo: "/auth/login",
};

const SignupSuccess = () => {
  return (
    <AuthMessage
      title={"Thank you for signing up"}
      message={
        <span className="message">
          You can click the login to start using your account
        </span>
      }
      btnProps={btnOptions}
    />
  );
};

export default SignupSuccess;
