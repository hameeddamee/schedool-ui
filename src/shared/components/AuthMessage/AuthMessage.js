import React from "react";
import successLogo from "../../assets/img/tick.svg";
// import errorLogo from "../../assets/img/close.svg";
import { Link, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthMessage = ({ title, message, isError, btnProps }) => {
  const showAuthMsg = useSelector((state) => state.auth.showAuthMsg);


  if(!showAuthMsg){
    return <Redirect to="/auth/login"/>
  }
  
  return (
    <div className="account account--photo">
      <div className="wrapper__user--select">
        <div className="account__wrapper">
          <div className="account__icon">
            {/* <img src={isError ? errorLogo : successLogo} /> */}
          </div>

          <h2 className="message__header text-center mb-5 mt-5">{title}</h2>
          <p className="text-center mt-3 mb-3 success__text">{message}</p>
          <div className="text-center">
            <h4 >
              {btnProps && <Link to={btnProps.linkTo} className="link__to mt-3">{btnProps.text}</Link>}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthMessage;
