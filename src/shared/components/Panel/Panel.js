import React, { PureComponent } from "react";
import { Badge, Card, CardBody, Col, Collapse } from "reactstrap";
import PropTypes from "prop-types";

export default class AlertComponent extends PureComponent {
  constructor() {
    super();

    this.state = {
      visible: true,
      collapse: true,
    };
  }

  onShow = () => {
    this.setState({ visible: true });
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };

  onCollapse = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  };

  onRefresh = () => {
    // your async logic here
    this.setState((prevState) => ({ refresh: !prevState.refresh }));
    setTimeout(() => this.setState({ refresh: false }), 5000);
  };

  render() {
    const {
      md,
      lg,
      xl,
      sm,
      xs,
      color,
      divider,
      icon,
      title,
      label,
      subhead,
      before,
      panelClass,
      children,
    } = this.props;

    const { collapse, visible } = this.state;

    if (visible) {
      return (
        <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
          <Card
            className={`panel${color ? ` panel--${color}` : ""}
            ${divider ? " panel--divider" : ""}${
              collapse ? "" : " panel--collapse"
            } ${panelClass}`}
          >
            <CardBody className="panel__body">
              <div className="panel__title">
                <h5 className="bold-text">
                  {icon ? (
                    <span className={`panel__icon lnr lnr-${icon}`} />
                  ) : (
                    ""
                  )}
                  {title}
                  <Badge className="panel__label">{label}</Badge>
                </h5>
                <h5 className="subhead">{subhead}</h5>
              </div>
              <Collapse isOpen={collapse}>
                <div className="panel__content">{children}</div>
              </Collapse>
            </CardBody>
          </Card>
          {before}
        </Col>
      );
    }

    return "";
  }
}

export const PanelTitle = ({ title }) => (
  <div className="panel__title">
    <h5 className="bold-text">{title}</h5>
  </div>
);
