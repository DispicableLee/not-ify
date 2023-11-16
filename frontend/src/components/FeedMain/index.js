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
                <div id="profile-button-container">
                    <ProfileButton signedInUser={signedInUser}/>
                </div>
                <h1>Good Morning</h1>
                <AlbumIndex/>
        </div>
    )
}