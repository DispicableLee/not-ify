import React from "react";
import "./LeftBar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import homeLogo from '../styling/images/navigation/home.png'
import searchLogo from '../styling/images/navigation/search-logo.png'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function LeftBar(){
    const history =useHistory()
    function navToHome(){
        // console.log("click");
        history.push("/home")
    }
    return (
        <div id="left-main">
            <section id="home-search">
                    <img src={homeLogo} className="home-logo" onClick={navToHome}/>
                    <img src={searchLogo}/>
            </section>
            <section id="playlist-list">

            </section>

        </div>
    )
}