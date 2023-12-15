import React from "react";
import LeftBar from "../LeftBar";
import FeedMain from "../FeedMain";
import Navigation from "../Navigation";
import AudioFooter from "../AudioFooter";
import "./HomeFeed.css"

export default function HomeFeed({signedInUser}){
    return (
        <div id="home-body">
            
            {/* <h1>this is the home Feed</h1> */}
                <FeedMain signedInUser={signedInUser}/>
            {/* <Navigation/> */}


        </div>
    )
}