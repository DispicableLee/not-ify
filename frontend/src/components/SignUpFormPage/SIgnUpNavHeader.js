import React from "react";
import './SignUpFormPage.css'
import logo from "../styling/images/logo/Spotify_Icon_RGB_Black.png"


export default function SignUpNavHeader(){
    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "center",
            margin: "10px",
            height: "70px",
        }}>
            <img src={logo} style={{
                width: "40px",
                height: "40px"
            }}/>
            <h1>Notify</h1>
        </div>
            <hr></hr>
        </>
    )
}