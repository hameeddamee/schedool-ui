import React, { useState, Fragment } from "react";
import EyeIcon from "mdi-react/EyeOffOutlineIcon";
import EyeIcon2 from "mdi-react/EyeIcon";
import { Button } from "reactstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { passwordPattern } from "../../helpers/validationHelpers";

import Input from "../Form/Input";

const RegisterForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, isLoading } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required(),
    lastName: Yup.string().min(2).max(20).required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().required(),
    password: Yup.string()
      .matches(
        passwordPattern,
        "Your password must include uppercase, numbers, letters and a minimum  of 5 characters"
      )
      .required(),
  });

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form className="form">
            <Input
              className="input__text--field"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <Input
              className="input__text--field"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <Input
              className="input__text--field"
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              className="input__text--field"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
            />
            <Input
              className="input__text--field"
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
              {showPassword ? <EyeIcon2 className="mdi__icon"/> : <EyeIcon />}
              </button>
            </Input>
            <div className="account__btns register__btns">
              <Button
                type="submit"
                color="primary"
                className="account__btn account__btn--primary "
                disabled={!formik.isValid || isLoading}
              >
                {isLoading ? (
                  <Fragment>
                    Loading <span className="loading arrow"></span>
                  </Fragment>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
