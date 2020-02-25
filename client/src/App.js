import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Navbar from "./Navbar";
import Alert from "./Alert";

//Business
import RegisterBusiness from "./business/Register";
import LoginBusiness from "./business/Login";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadBusiness } from "./redux/actions/authBusiness";
import setAuthToken from "./redux/token";

// css
import "./App.css";

// if browser local storage has token load it
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // fun loadBusiness in redux actions when app starts. checks if token present. if token auto login
  useEffect(() => {
    store.dispatch(loadBusiness());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Alert />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/register_business"
              component={RegisterBusiness}
            />
            <Route exact path="/login_business" component={LoginBusiness} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};
export default App;
