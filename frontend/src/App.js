import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage/SignUpFormPage";
import HomeFeed from "./components/HomeFeed";
import ProfileShow from "./components/ProfileShow";
import LeftBar from "./components/LeftBar";
import AudioFooter from "./AudioFooter";
import Navigation from "./components/Navigation";
import "./reset.css"
import "./index.css"

function App() {
  const signedInUser = useSelector(store=>store.session.user)
  const history = useHistory();
  if (!signedInUser) history.push('/login')
  return (
    <div id="home">
      {/* <Navigation /> */}
      {/* {signedInUser ? <LeftBar/> : <></>} */}
      {signedInUser && <LeftBar/> }
      {/* {signedInUser && <AudioFooter/>} */}
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/home">
            <HomeFeed signedInUser={signedInUser}/>
          </Route>
          <Route exact path="/profile/:id">
              <ProfileShow/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;