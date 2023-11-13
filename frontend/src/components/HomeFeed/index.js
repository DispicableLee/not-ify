import React from "react";
import LeftBar from "../LeftBar";
import FeedMain from "../FeedMain";
import Navigation from "../Navigation";
import "./HomeFeed.css"

export default function HomeFeed({signedInUser}){
    return (
        <div id="home-body">
            <aside style={{
                float: "left"
            }}>
                <LeftBar/>
            </aside>
            {/* <h1>this is the home Feed</h1> */}
                <FeedMain signedInUser={signedInUser}/>
            {/* <Navigation/> */}
        </div>
    )
}