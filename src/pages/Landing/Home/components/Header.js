import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

const background = `${process.env.PUBLIC_URL}/assets/img/landing/header_bg.png`;

const Header = () => {
  const [t] = useTranslation("common");

  return (
    <div
      className="landing__header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="landing__header-title">
              <Trans i18nKey="landing.heading" t={t}></Trans>
            </h2>
            <p className="landing__header-subhead">
              {t("landing.subheading")}{" "}
              <Link className="landing__header-subhead-update" to="/auth/login">
                {t("landing.subheading_continue")}
              </Link>
            </p>
            <Link
              className="landing__btn landing__btn--header landing__btn--signup"
              to="/auth/signup"
            >
              {t("auth.signup")}
            </Link>
            <Link
              className="landing__btn landing__btn--header"
              to="/auth/login"
            >
              {t("auth.login")}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
