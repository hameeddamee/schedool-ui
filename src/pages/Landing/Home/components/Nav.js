import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { useTranslation } from "react-i18next";

const logo = `${process.env.PUBLIC_URL}/assets/img/landing/logo.png`;

const Nav = () => {
  const [t] = useTranslation("common");

  return (
    <div className="landing__menu">
      <Container>
        <Row>
          <Col md={12}>
            <div className="landing__menu-wrap">
              <p className="landing__menu-logo">
                <img src={logo} alt="logo" />
              </p>
              <nav className="landing__menu-nav">
                <Link className="landing__btn" to="/auth/signup">
                  {t("auth.signup")}
                </Link>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
