import React from "react";
import AuthMessage from "../../../shared/components/AuthMessage/AuthMessage";

const ForgetPasswordSuccess = () => {
  return (
    <AuthMessage
      title={"Password Reset Sent"}
      message={
        <span className="message">
          We have just sent you a verification email, please check and click the
          link to reset your password
        </span>
      }
    />
  );
};

export default ForgetPasswordSuccess;
