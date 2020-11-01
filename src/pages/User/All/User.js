import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as userActions from "../../../redux/actions/userActions";
import UserList from "../components/UserList";

const User = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const users = useSelector((state) => state.user.all);

  useEffect(() => {
    dispatch(userActions.fetchAllUsers());
  }, []);

  const onDeleteRow = (user, e) => {
    e.preventDefault();
    dispatch(userActions.deleteUser(user.id));
  };

  return (
    <Container className="user">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("user.heading")}</h3>
        </Col>
      </Row>
      <Row>
        <UserList users={users} onDeleteRow={onDeleteRow} t={t} />
      </Row>
    </Container>
  );
};

export default User;
