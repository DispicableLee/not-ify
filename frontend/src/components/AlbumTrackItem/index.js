import React from "react";
import './AlbumTrackItem.css'
import * as sessionActions from '../../store/session'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function AlbumTrackItem({id, title, url, listNum}){
    // const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    // console.log(count)
    function loadIntoSession(e){
        e.preventDefault()
        const trackObject = {
            id,
            title,
            url
        }
        dispatch(sessionActions.setCurrentTrack(trackObject))
    }





    return (
        <div id="track-main" onClick={loadIntoSession}>
            <h3>{listNum}</h3>
            <h3>{title}</h3>
        </div>
    )
}

