import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage/SignUpFormPage";
import HomeFeed from "./components/HomeFeed";
import Navigation from "./components/Navigation";
import "./reset.css"
import "./index.css"

function App() {
  return (
    <div id="home">
      {/* <Navigation /> */}
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/home">
            <HomeFeed/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;