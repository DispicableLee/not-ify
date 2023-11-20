import React from "react";
import { useRef } from "react";
import ReactAudioPlayer from 'react-audio-player'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import "./AudioFooter.css"


export default function AudioFooter(){
    const [currentSong, setCurrentSong] = useState()
    let track = useSelector(store=>store.session.currentTrack)
    // useEffect(()=>{
    //     setCurrentSong(track)
    // }, [currentSong])
    console.log(track.url)
    return (
        <div id="audio-footer-main">
            <h3>audio footer</h3>
            <ReactAudioPlayer
                controls
                src={track.url}
                autoPlay
            />
        </div>
    )
}