import React from "react";
import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import "./AudioFooter.css";

export default function AudioFooter() {
    const track = useSelector((store) => store.session.currentTrack);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const [isReady, setIsReady] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);

    let audioRef = useRef(null)

    useEffect(()=>{
        let audioElement = audioRef.current
        if(track && audioElement){
            audioElement.src = track.url
            audioElement.load()
        }

        const updateProgress = () => {
            const currentProgress = (audioElement?.currentTime / audioElement?.duration) * 100;
            setProgress(currentProgress);
        };
        audioElement.addEventListener('timeupdate', updateProgress);
        return () => {
    // Remove the event listener when the component unmounts
            audioElement.removeEventListener('timeupdate', updateProgress);
        };
    },[track])


// ====== toggles whether or not the song is playing ====================
    const togglePlayPause = () => {
        if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
        } else {
        audioRef.current?.play();
        setIsPlaying(true);
        }
    };
//   console.log((audioRef?.current.duration / 100).toFixed(2))

    const handleSeek = (e) => {
        const seekPosition = (e.nativeEvent.offsetX / e.target.clientWidth) * audioRef?.current.duration;
        audioRef.current.currentTime = seekPosition;
    };
    return (
        <div id="audio-footer-main">
            <section id="track-info">
                <h4>{track?.title}</h4>

            </section>

        {/* ⁡⁢⁣⁢REACT AUDIO PLAYER⁡⁡ */}
        {/* <ReactAudioPlayer
                    controls
                    src={track?.url}
                    autoPlay
                /> */}

        {/* ⁡⁣⁢⁣================== audio element =================================⁡⁡ */}
        <audio
            id="audio"
            ref={audioRef}
            preload="metadata"
            onDurationChange={(e) => setDuration(e.currentTarget.duration)}
            onCanPlay={(e) => {
            setIsReady(true);
            }}
            // autoPlay
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
            <source type="audio/mpeg" src={track?.url} />
        </audio>
        {/* =============================================== */}
        {/* ⁡⁢⁣⁢======== play button =============⁡ */}
            <div id="controls-progress">
            <button
                disabled={!isReady}
                onClick={togglePlayPause}
                > 
                    {isPlaying ? <PauseIcon/> :<PlayArrowIcon/>}
            </button> 
            <section className="progress-bar-holder">
                    <h4>{(audioRef.current?.currentTime/10).toFixed(1)}</h4>
                    <div
                        className="progress-bar"
                        onClick={handleSeek}
                        // style={{ width: `${progress}%` }}
                    ></div>
                    <h4>{(audioRef.current?.duration / 100).toFixed(2)}</h4>

            </section>
            </div>

        </div>
    );
}
