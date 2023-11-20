import React from "react";
import './AlbumTrackItem.css'
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function AlbumTrackItem({id, title, url, count}){
    const dispatch = useDispatch()
    console.log(count)
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
            <img/>
            <h3>{title}</h3>
        </div>
    )
}

