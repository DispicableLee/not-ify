import React from "react";
import LeftBar from "../LeftBar";
import Navigation from "../Navigation";
import "./HomeFeed.css"

export default function HomeFeed(){
    return (
        <div style={{
            backgroundColor: "black",
            color: "white",
            height: "100vh",
            width: "100vw"

        }}>
            <Navigation/>
            <h1>this is the home Feed</h1>
        </div>
    )
}