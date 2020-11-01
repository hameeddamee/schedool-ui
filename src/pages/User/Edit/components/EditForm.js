import React, { useState, Fragment } from "react";
import { Button, ButtonToolbar } from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "../../../../shared/components/Form/Input";

const EditForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, isLoading, initialValues } = props;

  const validationSchema = Yup.object({
    name: Yup.string().min(5).max(20),
    email: Yup.string().email(),
    avatar: Yup.string().url(),
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
              name="name"
              type="text"
              placeholder={"name"}
            />
            <Input
              className="input__text--field"
              name="email"
              type="email"
              placeholder={"email"}
            />

            <Input
              className="input__text--field"
              name="avatar"
              type="text"
              placeholder={"avatar"}
            />

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                {isLoading ? (
                  <Fragment>
                    Loading <span className="loading arrow"></span>
                  </Fragment>
                ) : (
                  "Submit"
                )}
              </Button>
              <Link className="btn btn-secondary" to="/user">
                Cancel
              </Link>
            </ButtonToolbar>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditForm;
