import React from "react";
import './AlbumTrackItem.css'

export default function AlbumTrackItem({id, title, url}){

    function loadIntoSession(e){
        e.preventDefault()
        const trackObject = {
            id,
            title,
            url
        }
    }





    return (
        <div id="track-main">
            <img/>
            <h3>{title}</h3>
        </div>
    )
}

