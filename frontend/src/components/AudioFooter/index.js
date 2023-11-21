import React from "react";
import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import "./AudioFooter.css";

export default function AudioFooter() {
  const [currentSong, setCurrentSong] = useState();

  const [duration, setDuration] = useState(0);

  const [isReady, setIsReady] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const track = useSelector((store) => store.session.currentTrack);
  let audioRef = useRef(null)

    useEffect(()=>{
        let audioElement = audioRef.current

        if(track && audioElement){
            audioElement.src = track.url
            audioElement.load()
        }
    },[track])



  console.log(audioRef.current)
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div id="audio-footer-main">
      <h3>audio footer</h3>

      {/* ⁡⁢⁣⁢REACT AUDIO PLAYER⁡⁡ */}
      {/* <ReactAudioPlayer
                controls
                src={track?.url}
                autoPlay
            /> */}

      {/* ⁡⁢⁢⁢================== audio element =================================⁡ */}
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          setIsReady(true);
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source type="audio/mpeg" src={track?.url} />
      </audio>
      {/* =============================================== */}
      <div className="text-center mb-1">
        <p className="text-slate-300 font-bold">
          {currentSong?.title ?? "Select a song"}
        </p>
      </div>
      {/* ⁡⁢⁣⁢======== play button =============⁡ */}
      <div style={{
        color: "white"
      }}>
        <div>
          <button
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            size="lg" 
            > 
            <PlayArrowIcon/>
           </button> 
        </div>
      </div> */}

      {/* ⁡⁣⁣⁢parent div⁡ */}
    </div>
  );
}
