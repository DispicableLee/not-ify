import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../store/album";
import "./AlbumIndex.css"
import AlbumCard from "./AlbumCard";


export default function AlbumIndex(props){
    // const [albums, setAlbums] = useState([])
    let dispatch = useDispatch()
    let albums = useSelector(getAlbums)
    useEffect(()=>{
        dispatch(fetchAlbums())
    },[dispatch])
    console.log(albums)
    // for(const a of albums) console.log(a)

    const renderedAlbumCard = albums.map((a)=>
        <AlbumCard title={a.title}/>
    )
    return (
        <div id="index-div">
            {renderedAlbumCard}
        </div>
    )
}