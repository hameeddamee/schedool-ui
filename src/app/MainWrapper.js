import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const MainWrapper = ({ theme, rtl, children }) => {
  return (
    <div
      className={`${theme.className} ${rtl.direction}-support`}
      dir={rtl.direction}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default withRouter(
  connect((state) => ({
    theme: state.theme,
    rtl: state.rtl,
  }))(MainWrapper)
);
