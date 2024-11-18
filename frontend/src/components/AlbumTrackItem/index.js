import React from "react";
import './AlbumTrackItem.css'
import * as sessionActions from '../../store/session'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PlayArrow from "@mui/icons-material/PlayArrow";

export default function AlbumTrackItem({id, title, url, image, listNum, uploaderUsername}){
    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    // console.log(count)
    function loadIntoSession(e){
        e.preventDefault()
        const trackObject = {
            id,
            title,
            url,
            image,
            uploaderUsername
        }
        dispatch(sessionActions.setCurrentTrack(trackObject))
    }





    return (
        <div 
            id="track-main" 
            role="button"
            onMouseEnter={() => setHover((prevHover) => !prevHover)}
            onMouseLeave={() => setHover((prevHover) => !prevHover)}
        >
            <div className="playbtn-num">
                {hover ? <PlayArrow onClick={loadIntoSession} /> : <h4 className="track-number">{listNum}</h4>}
            </div>
            <img src={image}/>
            <div className="title-artist">
                <h3 className="track-title">{title}</h3>
                <h4>{uploaderUsername}</h4>
            </div>
        </div>
    )
}

