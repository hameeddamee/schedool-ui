import React from "react";
import AuthMessage from "../../../shared/components/AuthMessage/AuthMessage";
import { classNames } from 'classnames';

const ConfirmPasswordSuccess = () => {
  const btnOptions = {
    text: "Login",
    linkTo: "/auth/login"
  };

  return (
    <AuthMessage
      title={"Your password has been reset"}
      message={<span className="message">Please click the link below to login to your account</span>}
      btnProps={btnOptions} 
       
    />
  );
};

export default ConfirmPasswordSuccess;
