import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../store/album";
import "./AlbumIndex.css"
import AlbumCard from "./AlbumCard";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export default function AlbumIndex(props){
    const [newAlbumModal, setNewAlbumModal] = useState(false)
    let dispatch = useDispatch()
    const albums = useSelector(store=>store?.albums?.albums|| {})
    console.log(Object.values(albums))
    useEffect(()=>{
        dispatch(fetchAlbums())
    },[dispatch])

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
            <div className="new-album">
                <LibraryAddIcon/>
                <h3>Add an album</h3>
            </div>
            {renderedAlbumCard}
        </div>
    )
}