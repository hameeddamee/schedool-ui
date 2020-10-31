import React from "react";
import AuthMessage from "../../../shared/components/AuthMessage/AuthMessage";

const SignupSuccess = () => {
  return (
    <AuthMessage
      title={"Thank you for signing up"}
      message={
        <span className="message">
          We'll be in touch with you within 24 hours to confirm your account
        </span>
      }
    />
  );
};

export default SignupSuccess;
