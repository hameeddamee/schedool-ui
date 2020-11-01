import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import successLogo from "../../assets/icon/tick.svg";
import errorLogo from "../../assets/icon/close.svg";

const AuthMessage = ({ title, message, isError, btnProps }) => {
  const showAuthMsg = useSelector((state) => state.auth.showAuthMsg);

  if (!showAuthMsg) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__icon account__icon--small mb-3">
            <img src={isError ? errorLogo : successLogo} />
          </div>
          <div className="account__head">
            <h3 className="account__title text-center">{title}</h3>
            <h4 className="account__subhead subhead">{message}</h4>
          </div>

          <div className="text-center">
            <h4>
              {btnProps && (
                <Link to={btnProps.linkTo} className="btn btn-primary mt-3">
                  {btnProps.text}
                </Link>
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthMessage;
