import React from "react";
import "./LeftBar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
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
                <Link to="/home">
                    <HomeIcon className="home-logo" />
                </Link>
                <Link to="/search">
                    <SearchIcon className="search-logo" />
                </Link>
            </section>
            <section id="playlist-list">

            </section>

        </div>
    )
}