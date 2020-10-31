import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";

import logo from "../../../shared/assets/img/fitted-logo.png";
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import RegisterForm from "../../../shared/components/RegisterForm/RegisterForm";
import AuthGoogleBtn from "../../../shared/components/AuthBtn/GoogleAuthBtn";
import FBAuthBtn from "../../../shared/components/AuthBtn/FBAuthBtn";

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Signup error", errorMsg, {
        onHideComplete: () => dispatch(authAction.clearMessages()),
      });
    }
  }, [errorMsg]);

  const onSubmit = async (formValues) => {
    await dispatch(authAction.registerUser(formValues, history));
  };

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__icon mb-3">
          <img src={logo} />
        </div>
        <h3 className="account__name--signup mb-3 text-center">Sign up</h3>
        <div className="account__card">
          <RegisterForm handleSubmit={onSubmit} isLoading={isLoading} />
          <div className="account__have-account mt-0">
            <div
              to="/auth/login"
              className="mb-2 mt-3 account__already--text"
            >
              Already have an account? <span> <strong className="login__link--text"><Link to="/auth/login">Login</Link></strong> instead.</span>
            </div>
            <div className="account__social">
              <span className="account__social-text">
                Or{" "}
                <strong className="account__social-text--bold">Sign up</strong>{" "}
                with
              </span>
              <AuthGoogleBtn />
              <FBAuthBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
