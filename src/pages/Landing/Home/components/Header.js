import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

const background = `${process.env.PUBLIC_URL}/assets/img/landing/header_bg.png`;

const Header = () => (
  <div
    className="landing__header"
    style={{ backgroundImage: `url(${background})` }}
  >
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__header-title">
            Create Schedools on the fly
            <br />
            <strong> Set Priority</strong> on your tasks
            <br />
            <strong>See others like you</strong> who are getting things done
          </h2>
          <p className="landing__header-subhead">
            Create an account today to get started or login to{" "}
            <Link className="landing__header-subhead-update" to="/auth/login">
              continue
            </Link>
            .
          </p>
          <Link
            className="landing__btn landing__btn--header landing__btn--signup"
            to="/auth/signup"
          >
            Signup
          </Link>
          <Link className="landing__btn landing__btn--header" to="/auth/login">
            Login
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;
