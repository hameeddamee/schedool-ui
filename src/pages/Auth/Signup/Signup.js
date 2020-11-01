import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { useTranslation } from "react-i18next";

const logo = `${process.env.PUBLIC_URL}/assets/img/landing/logo.png`;
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import RegisterForm from "../../../shared/components/RegisterForm/RegisterForm";

const Signup = () => {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  document.title = t("auth.signup.doc_title");

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
    <div className="account">
      <div className="account__wrapper">
        <div className="account__icon">
          <img src={logo} />
        </div>
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">{t("auth.signup.heading")}</h3>
            <h4 className="account__subhead subhead">
              {t("auth.signup.subheading")}
            </h4>
          </div>
          <RegisterForm handleSubmit={onSubmit} isLoading={isLoading} />
          <div className="account__have-account mt-0">
            <p>
              {t("auth.signup.already_have")}{" "}
              <Link to="/auth/login">{t("auth.login.heading")}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
