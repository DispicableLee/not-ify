import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchAllTracks } from "../../store/track";
import AlbumTrackItem from "../AlbumTrackItem";
import './TrackIndex.css'

export default function TrackIndex(){
    const storeTracks = useSelector(store=>store?.tracks?.all)
    const [displayedTracks, setDisplayedTracks] = useState(storeTracks)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAllTracks())
    },[dispatch])


    const renderedTracks = displayedTracks ? displayedTracks.map((track, idx) => (
        <AlbumTrackItem
            id={track.id}
            title={track.title}
            url={track.url}
            image={track.album.imageUrl}
            uploaderUsername={track.uploader.username}
            listNum={idx + 1}
        />
    )) : null;

    return (
        <div id="track-index-main">

            <h1>track Index</h1>
            {renderedTracks}
        </div>
    )
}