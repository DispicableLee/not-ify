import React from "react";
import profileIcon from "../styling/images/navigation/profile.png"
import AlbumIndex from "../AlbumIndex";
import ProfileButton from "../Navigation/ProfileButton";
import "./FeedMain.css"


export default function FeedMain({signedInUser}){
    return (
        <div 
            id="feed-main"
            >
                {/* <div id="profile-button-container">
                    <ProfileButton signedInUser={signedInUser}/>
                </div> */}
                <h2>Good Morning</h2>
                <div className="other-projects">

                    <div className="project-link-card">
                        <h3>LemonChordv3</h3>
                        <a><h4>Github</h4></a>
                        <a><h4>Live</h4></a>

                    </div>






                    
                </div>
                <AlbumIndex/>
        </div>
    )
}