import React, { useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { Button } from "reactstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import logo from "../../../shared/assets/img/fitted-logo.png";
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import Input from "../../../shared/components/Form/Input";

const ForgotPassword = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
  });

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Forgot Password Error", errorMsg, {
        onHideComplete: () => dispatch(authAction.clearMessages()),
      });
    }
  }, [errorMsg]);

  const onSubmit = async (formValues) => {
    await dispatch(authAction.requestForgotPassword(formValues, history));
  };

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__icon mb-3">
          <img src={logo} />
        </div>
        <h4 className="account__name--text text-center mb-5">
          Forgot Password?
        </h4>
        <p className="account__sub mb-3">
          Enter the email associated with your account to reset your password
        </p>
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
                    className="input__text--field"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
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
                        "Send Reset Link"
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

export default ForgotPassword;
