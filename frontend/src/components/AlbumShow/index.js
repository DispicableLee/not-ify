import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchOneAlbum, getAlbum } from "../../store/album";
import './AlbumShow.css'

export default function AlbumShow(){
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    const shownAlbum = useSelector(getAlbum(id))
    console.log(shownAlbum)

    useEffect(()=>{
        dispatch(fetchOneAlbum(id))
    },[dispatch])
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