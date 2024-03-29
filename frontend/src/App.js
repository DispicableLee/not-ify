import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage/SignUpFormPage";
import HomeFeed from "./components/HomeFeed";
import ProfileShow from "./components/ProfileShow";
import AlbumShow from "./components/AlbumShow";
import LeftBar from "./components/LeftBar";
import AudioFooter from "./components/AudioFooter";
import Navigation from "./components/Navigation";
import TrackIndex from "./components/TrackIndex/TrackIndex";
import ProfileButton from "./components/Navigation/ProfileButton";
import "./reset.css"
import "./index.css"
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const isSongLoaded = useSelector(store=>!!store.session.currentTrack)
  const signedInUser = useSelector(store=>store.session.user)

  useEffect(()=>{

  })

  const history = useHistory();
  if (!signedInUser) history.push('/login')
  return (
    <div id="home">
      {/* <Navigation /> */}
      {/* {signedInUser ? <LeftBar/> : <></>} */}
      {signedInUser && 
                        <div id="profile-button-container">
                    <ProfileButton signedInUser={signedInUser}/>
                </div>
      }
      {signedInUser && <LeftBar/> }
      {signedInUser &&isSongLoaded && <AudioFooter/>}
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
          <Route exact path="/album/:id">
              <AlbumShow/>
          </Route>
          <Route exact path="/tracks/all">
            <TrackIndex/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;