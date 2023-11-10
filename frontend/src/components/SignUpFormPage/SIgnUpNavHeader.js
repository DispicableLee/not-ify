import React from "react";
import './SignUpFormPage.css'
import logo from "../images/logo/Spotify_Icon_RGB_Black.png"


export default function SignUpNavHeader(){
    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            margin: "10px",
            height: "70px",
        }}>
            <div style={{
                // backgroundColor: "black"
            }}>
                <div id="nav-image"/>

            </div>
            <h1>Notify</h1>
        </div>
            <hr></hr>
        </>
    )
}