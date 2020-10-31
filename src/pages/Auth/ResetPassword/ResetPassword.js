import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { Button } from "reactstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import EyeIcon from "mdi-react/EyeIcon";
import EyeIcon2 from "mdi-react/EyeOffOutlineIcon";

import logo from "../../../shared/assets/img/fitted-logo.png";
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import Input from "../../../shared/components/Form/Input";
import AuthMessage from "../../../shared/components/AuthMessage/AuthMessage";
import { passwordPattern } from "../../../shared/helpers/validationHelpers";

const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    password: "",
  };
  const btnOptions = {
    text: "Resend",
    linkTo: "/auth/forgot-password",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(
        passwordPattern,
        "Your password must include uppercase, numbers, letters and a minimum  of 5 characters"
      )
      .required(),
  });

  useEffect(() => {
    dispatch(authAction.verifyForgotPassword(params.token));
  }, []);

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Forgot Password Error", errorMsg);
    }
  }, [errorMsg]);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = async (formValues) => {
    await dispatch(authAction.resetPassword(formValues, params.token, history));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isEmpty(errorMsg)) {
    return (
      <AuthMessage
        title={"Reset Token Error"}
        message={errorMsg}
        isError
        btnProps={btnOptions}
      />
    );
  }

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__icon mb-3">
          <img src={logo} />
        </div>
        <h4 className="account__name--text text-center mb-5">Reset Password</h4>
        <p className="account__sub mb-3">Enter a new Password</p>
        <div className="account__card">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="form">
                  <Input
                    className="input__text--field user-box"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  >
                    <button
                      type="button"
                      className={`form__form-group-button${
                        showPassword ? " active" : ""
                      }`}
                      onClick={(e) => handleShowPassword(e)}
                    >
                      {showPassword ? (
                        <EyeIcon className="mdi-icon" />
                      ) : (
                        <EyeIcon2 />
                      )}
                    </button>
                  </Input>
                  <div className="account__btns register__btns">
                    <Button
                      type="submit"
                      className="account__btn account__btn--primary btn"
                      disabled={!formik.isValid}
                    >
                      {isLoading ? (
                        <Fragment>
                          Loading <span className="loading arrow"></span>
                        </Fragment>
                      ) : (
                        "Reset Password"
                      )}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <Link to="/auth/login" className="page__back--link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
