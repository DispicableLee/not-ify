import React from "react";
import profileIcon from "../styling/images/navigation/profile.png"
import AlbumIndex from "../AlbumIndex";
import ProfileButton from "../Navigation/ProfileButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./FeedMain.css"


export default function FeedMain({signedInUser}){
    return (
        <div 
            id="feed-main"
        >
                {/* <div id="profile-button-container">
                    <ProfileButton signedInUser={signedInUser}/>
                </div> */}
                <h1 id="white-h1">Good Morning</h1>
                <div className="other-projects">

                    {/* <div className="project-link-card">
                        <h3>LemonChordv3</h3>
                        <a><h4>Github</h4></a>
                        <a><h4>Live</h4></a>

                    </div> */}
                    <a href="https://github.com/DispicableLee"
                        target="_blank"
                        id="social-link" 
                        className="github">
                        <GitHubIcon/>
                            <h2>GitHub</h2>
                    </a>
                    <a href="https://www.linkedin.com/in/robert-lee-webdeveloper/"
                        target="_blank"
                        id="social-link" 
                        className="linkedin">
                        <div>
                            <h2>LinkedIn</h2>
                        </div>
                    </a>





                </div>
                <AlbumIndex/>
        </div>
    )
}