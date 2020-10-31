import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { Button } from "reactstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import EyeIcon from "mdi-react/EyeOffOutlineIcon";
import EyeIcon2 from "mdi-react/EyeIcon";
import { useTranslation } from "react-i18next";

const logo = `${process.env.PUBLIC_URL}/assets/img/landing/logo.png`;

import { isEmpty } from "../../../shared/helpers/validationHelpers";
import { passwordPattern } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import Input from "../../../shared/components/Form/Input";

const Login = (props) => {
  const [t] = useTranslation("common");
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        passwordPattern,
        "Your password must include uppercase, numbers, letters and a minimum  of 5 characters"
      )
      .required(),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Login error", errorMsg, {
        onHideComplete: () => dispatch(authAction.clearMessages()),
      });
    }
  }, [errorMsg]);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = async (formValues) => {
    await dispatch(authAction.loginUser(formValues));
  };

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__icon mb-3">
          <img src={logo} />
        </div>
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">{t("auth.login.heading")}</h3>
            <h4 className="account__subhead subhead">
              {t("auth.login.subheading")}
            </h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="form login__box">
                  <Input
                    className="input__text--field user-box"
                    name="email"
                    type="email"
                    placeholder={t("auth.email")}
                  />

                  <Input
                    className="input__text--field user-box"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("auth.password")}
                  >
                    <button
                      type="button"
                      className={`form__form-group-button${
                        showPassword ? " active" : ""
                      }`}
                      onClick={(e) => handleShowPassword(e)}
                    >
                      {showPassword ? <EyeIcon2 /> : <EyeIcon />}
                    </button>
                  </Input>

                  <div className="account__btns register__btns mt-1">
                    <Button
                      type="submit"
                      color="primary"
                      className="account__btn account__btn--primary btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Fragment>
                          Loading <span className="loading arrow"></span>
                        </Fragment>
                      ) : (
                        t("auth.login.heading")
                      )}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <div className="account__have-account mt-0">
            <p>
              {t("auth.login.account_not_have")}{" "}
              <Link to="/auth/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
