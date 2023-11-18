import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchOneAlbum, getAlbum } from "../../store/album";
import csrfFetch from "../../store/csrf";
import './AlbumShow.css'

export default function AlbumShow(){
    const [tracks, setTracks] = useState()
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    const shownAlbum = useSelector(getAlbum(id))
    // console.log(shownAlbum)

    useEffect(()=>{
        fetch(`/api/albums/${id}`)
        .then((res)=>res.json())
        .then(json=>setTracks(Object.values(json.tracks)))
        dispatch(fetchOneAlbum(id))
    },[dispatch])
    console.log(tracks)
    return (
        <div id="album-show-main">
            <div id="album-show-header">
                <img/>
                <p>Album</p>
                <h1>{shownAlbum.title}</h1>
            </div>
                <div id="track-index">

                </div>
        </div>
    )
}