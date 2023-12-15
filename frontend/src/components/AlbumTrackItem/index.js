import React from "react";
import './AlbumTrackItem.css'
import * as sessionActions from '../../store/session'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PlayArrow from "@mui/icons-material/PlayArrow";

export default function AlbumTrackItem({id, title, url, listNum}){
    const [hover, setHover] = useState(false)
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
        <div 
            id="track-main" 
            role="button"
            onClick={loadIntoSession} 
            onMouseEnter={() => setHover((prevHover) => !prevHover)}
            onMouseLeave={() => setHover((prevHover) => !prevHover)}
        >

            {hover ? <PlayArrow/> : <h3>{listNum}</h3>}
            <h3>{title}</h3>
        </div>
    )
}

