import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../store/album";
import "./AlbumIndex.css"
import AlbumCard from "./AlbumCard";


export default function AlbumIndex(props){
    let dispatch = useDispatch()
    const albums = useSelector(store=>store?.albums?.albums|| {})
    console.log(Object.values(albums))
    useEffect(()=>{
        dispatch(fetchAlbums())
    },[dispatch])
    // for(const a of albums) console.log(a)

    const renderedAlbumCard = Object.values(albums).map((a)=>
        <AlbumCard 
            id={a.id}
            title={a.title}
            description={a.description}
            image={a.imageUrl}
            />
    )
    return (
        <div id="index-div">
            {renderedAlbumCard}
        </div>
    )
}