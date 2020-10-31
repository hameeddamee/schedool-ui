import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";
import { Button } from "reactstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import EyeIcon from "mdi-react/EyeOffOutlineIcon";
import EyeIcon2 from "mdi-react/EyeIcon";

// import logo from "../../../shared/assets/img/fitted-logo.png";

import { isEmpty } from "../../../shared/helpers/validationHelpers";
import { passwordPattern } from "../../../shared/helpers/validationHelpers";
import * as authAction from "../../../redux/actions/authActions";

import Input from "../../../shared/components/Form/Input";
import AuthGoogleBtn from "../../../shared/components/AuthBtn/GoogleAuthBtn";
import FBAuthBtn from "../../../shared/components/AuthBtn/FBAuthBtn";

const Login = (props) => {
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
  const history = useHistory();
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
          {/* <img src={logo} /> */}
        </div>
        <p className="account__sub mb-3">
          Welcome to <span id="fitted__bold">Fitted</span> the best tailoring management solution
        </p>
        <div className="account__card">
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
                    placeholder="Email"
                  />

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
                        <EyeIcon2 />
                      ) : (
                        <EyeIcon/>
                      )}
                    </button>
                  </Input>

                  <div className="account__forgot-password">
                    <Link
                      to="/auth/forgot-password"
                      className="forgot__password--text"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="account__btns register__btns">
                    <Button
                      type="submit"
                      color="primary"
                      className="account__btn account__btn--primary btn"
                      disabled={!formik.isValid || isLoading}
                    >
                      {isLoading ? (
                        <Fragment>
                          Loading <span className="loading arrow"></span>
                        </Fragment>
                      ) : (
                        "Sign in"
                      )}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div className="account__have-account mt-0">
          <div
              to="/auth/signup"
              className="mb-2 mt-3 account__already--text"
            >
              Don't have an account? <span> <strong className="login__link--text"><Link to="/auth/signup">Sign up</Link></strong> instead.</span>
            </div>
            <div className="account__social">
              <span className="account__social-text">
                Or{" "}
                <strong className="account__social-text--bold">Login</strong>{" "}
                with
              </span>
              <AuthGoogleBtn isLogin />
              <FBAuthBtn isLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
