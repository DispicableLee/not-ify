import React from "react";
import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import { skipForward, skipBackward } from "../../store/session";
import { useDispatch } from "react-redux";

import "./AudioFooter.css";

export default function AudioFooter() {
    const dispatch = useDispatch()
    const track = useSelector((store) => store.session.currentTrack);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const [isReady, setIsReady] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);

    let audioRef = useRef(null)

      // New function for formatting time
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleSkipForward = () => {
        dispatch(skipForward());
    };

    const handleSkipBackward = () => {
        dispatch(skipBackward());
    };


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

    const handleSeek = (e) => {
        const seekPosition = (e.nativeEvent.offsetX / e.target.clientWidth) * audioRef?.current.duration;
        audioRef.current.currentTime = seekPosition;
    };
    return (
        <div id="audio-footer-main">
            <section id="track-info">
                <img src={track?.image}/>
                <h4>{track?.title}</h4>
            </section>
        {/* ⁡⁣⁢⁡⁢⁣⁢================== audio element =================================⁡⁡⁡ */}
        <audio
            id="audio"
            ref={audioRef}
            preload="metadata"
            onDurationChange={(e) => setDuration(e.currentTarget.duration)}
            onCanPlay={(e) => setIsReady(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            autoPlay
        >
            <source type="audio/mpeg" src={track?.url} />
        </audio>
        {/* =============================================== */}
        {/* ⁡⁢⁣⁢======== play button =============⁡ */}
        {track && 
            <div id="controls-progress">
                <div className="backwards-pause-forwards">
                    <IconButton onClick={handleSkipBackward} disabled={!isReady} style={{color: "white"}}>
                        <SkipPreviousIcon />
                    </IconButton>
                    <button
                        disabled={!isReady}
                        onClick={togglePlayPause}
                    > 
                            {isPlaying ? <PauseIcon/> :<PlayArrowIcon/>}
                    </button> 
                    <IconButton onClick={handleSkipForward} disabled={!isReady} style={{color: "white"}}>
                        <SkipNextIcon />
                    </IconButton>
                </div>

                <section className="progress-bar-holder">
                    {/* Use the formatTime function for displaying time */}
                    <h4>{formatTime(audioRef.current?.currentTime)}</h4>
                    {/* Dynamically set the width based on the progress */}
                    <div className="progress-bar-wrapper" onClick={handleSeek}>
                        <div
                            className="progress-bar"
                        
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    {/* Use the formatTime function for displaying duration */}
                    <h4>{formatTime(audioRef.current?.duration)}</h4>
                        
                </section>
            </div>
        }
        </div>
    );
}
