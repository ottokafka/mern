import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Navbar from "./Navbar";
import Alert from "./Alert";

//Business
import RegisterBusiness from "./business/RegisterBusiness";
import LoginBusiness from "./business/LoginBusiness";
import DashboardBusiness from "./business/DashboardBusiness";
import CreateProfileBusiness from "./business/CreateProfileBusiness";
import AddAvailability from "./business/AddAvailability";
import AddServices from "./business/AddServices";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadBusiness } from "./redux/actions/authBusiness";

// User
import UserLogin from "./user/UserLogin";
import UserRegister from "./user/UserRegister";
import DashboardUser from "./user/DashboardUser";
import CreateProfileUser from "./user/CreateProfileUser";
import Search from "./user/Search";

// css
import "./App.css";
import { loadUser } from "./redux/actions/authActions";

const App = () => {
  // in redux action loadBusiness by token and run api to get user data back
  useEffect(() => {
    store.dispatch(loadBusiness());
    store.dispatch(loadUser());
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
            <Route exact path="/dashboard_user" component={DashboardUser} />
            <Route exact path="/search" component={Search} />
            <Route
              exact
              path="/create_profile_user"
              component={CreateProfileUser}
            />

            <Route
              exact
              path="/dashboard_business"
              component={DashboardBusiness}
            />
            <Route
              exact
              path="/create_profile_business"
              component={CreateProfileBusiness}
            />
            <Route exact path="/add_availability" component={AddAvailability} />
            <Route exact path="/add_services" component={AddServices} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};
export default App;
