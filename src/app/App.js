import React, { useState, useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ReduxToastr from "react-redux-toastr";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../scss/app.scss";

import store from "../redux/store";
import { checkAuthState } from "../redux/actions/authActions";
import { config as i18nextConfig } from "../translations";

import ScrollToTop from "./ScrollToTop";
import MainWrapper from "./MainWrapper";
import Routes from "../routes";
import Spinner from "../shared/components/Spinner/Spinner";

i18next.init(i18nextConfig);
export const App = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    store.dispatch(checkAuthState());

    window.addEventListener("DOMContentLoaded", () => {
      setLoading(false);
      setTimeout(() => setLoaded(true), 50);
    });
  }, [store]);

  return (
    <Provider store={store}>
      <Router>
        <I18nextProvider i18n={i18next}>
          <ScrollToTop>
            <Fragment>
              {!loaded && (
                <Spinner className={`load${loading ? "" : " loaded"}`} />
              )}
              <MainWrapper>
                <Routes />
              </MainWrapper>
            </Fragment>
          </ScrollToTop>
        </I18nextProvider>
      </Router>

      <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.notification} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );
};

export default App;
