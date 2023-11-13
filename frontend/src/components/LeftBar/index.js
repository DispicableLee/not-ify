import React from "react";
import "./LeftBar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import homeLogo from '../styling/images/navigation/home.png'
export default function LeftBar(){
    // const navigate = useNavigate()
    return (
        <div id="left-main">
            <section id="home-search">
                <Link to="/home">
                    <img src={homeLogo} className="home-logo"/>
                </Link>
            </section>

        </div>
    )
}