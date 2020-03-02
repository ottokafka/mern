import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Navbar from "./Navbar";
import Alert from "./Alert";

//Business
import RegisterBusiness from "./business/Register";
import LoginBusiness from "./business/Login";
import DashboardBusiness from "./business/DashboardBusiness";
import CreateProfileBusiness from "./business/CreateProfileBusiness";
import AddAvailability from "./business/AddAvailability";
import AddServices from "./business/AddServices";
import PrivateRouteBusiness from "./business/PrivateRouteBusiness";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadBusiness } from "./redux/actions/authBusiness";
import setAuthToken from "./redux/token";

// User
import UserLogin from "./user/UserLogin";
import UserRegister from "./user/UserRegister";
import DashboardUser from "./user/DashboardUser";

// css
import "./App.css";

const App = () => {
  //  redux action in authBusiness if token login axios request for business
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
            <Route exact path="/login_user" component={UserLogin} />
            <Route exact path="/register_user" component={UserRegister} />
            <PrivateRouteBusiness
              exact
              path="/dashboard_user"
              component={DashboardUser}
            />

            <PrivateRouteBusiness
              exact
              path="/dashboard_business"
              component={DashboardBusiness}
            />
            <PrivateRouteBusiness
              exact
              path="/create_profile_business"
              component={CreateProfileBusiness}
            />
            <PrivateRouteBusiness
              exact
              path="/add_availability"
              component={AddAvailability}
            />
            <PrivateRouteBusiness
              exact
              path="/add_services"
              component={AddServices}
            />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};
export default App;
