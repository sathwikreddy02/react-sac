import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Register from "./Menu/Register";
import Mediafeed from "./Menu/media-feed";
import Student from "./Menu/student";
import OurCrew from "./Our-Crew";
import WebApps from "./Clubs/WebApps";
import Login from "./Login";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/Home" />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Menu/Register" component={Register} />
        <Route exact path="/Menu/Media-Feed" component={Mediafeed} />
        <Route exact path="/Menu/Council" component={Student} />
        <Route exact path="/Our-Crew" component={OurCrew} />
        <Route exact path="/Clubs/WebApps" component={WebApps} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
