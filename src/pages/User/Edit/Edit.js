import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Card, CardBody, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { isEmpty } from "../../../shared/helpers/validationHelpers";
import * as userActions from "../../../redux/actions/userActions";

import EditForm from "./components/EditForm";

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedUser = useSelector((state) =>
    !isEmpty(params.userId)
      ? state.user.all.filter((aUser) => aUser.id === params.userId)[0]
      : []
  );
  const isLoading = useSelector((state) => state.user.isLoading);
  const errorMsg = useSelector((state) => state.user.errorMsg);

  useEffect(() => {
    toastr.clean();
    if (!isEmpty(errorMsg)) {
      toastr.error("Signup error", errorMsg, {
        onHideComplete: () => dispatch(userActions.clearMessages()),
      });
    }
  }, [errorMsg]);

  const handleSubmit = (formValues) => {
    dispatch(userActions.editUser(formValues, history));
  };

  if (isEmpty(params.userId)) {
    return <Redirect to="/user" />;
  }

  return (
    <Container className="user">
      <Row>
        <Col md={12} lg={12}>
          <Card>
            {!isEmpty(selectedUser) && (
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Edit {selectedUser.name}</h5>
                </div>
                <EditForm
                  initialValues={selectedUser}
                  isLoading={isLoading}
                  handleSubmit={handleSubmit}
                />
              </CardBody>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
