import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const MainWrapper = ({ theme, children }) => {

  return (
    <div className={`${theme.className}`}>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default withRouter(
  connect((state) => ({
    theme: state.theme,
  }))(MainWrapper)
);
