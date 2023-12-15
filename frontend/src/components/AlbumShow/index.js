import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchOneAlbum, getAlbum, updateAlbum } from "../../store/album";
import { loadPlaylist } from "../../store/session";
import AlbumTrackItem from "../AlbumTrackItem";
import csrfFetch from "../../store/csrf";
import './AlbumShow.css'

export default function AlbumShow(){
    const {id} = useParams()
    const shownAlbum = useSelector(store=>store.albums?.shownAlbum?.album)
    const shownTracks = useSelector(store=>store.albums?.shownAlbum?.tracks)
    const [tracks, setTracks] = useState(Object.values(shownTracks))
    const [canEdit, setCanEdit] = useState(false)
    const [formAlbumName, setFormAlbumName] = useState(shownAlbum?.title)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchOneAlbum(id))
    },[dispatch])


    const renderedTracks = tracks.map((track, idx)=>{
        return (
            <AlbumTrackItem
                id={track.id}
                title={track.title}
                url={track.url}
                listNum={idx+1}
            />
        )
    })

    function handleUpdate(){
        const updateAlbumObj = {
            title: formAlbumName
        }
        dispatch(updateAlbum(id, updateAlbumObj))
        setCanEdit(false)
    }




    return (
        <div id="album-show-main">
            <div id="album-show-header">
                <img src={shownAlbum?.imageUrl}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px"
                }}>
                    <p>Album</p>
                    {canEdit ? 
                        <input type="text"
                        defaultValue={shownAlbum?.title}
                        onChange={(e)=>setFormAlbumName(e.target.value)}
                        />
                    : 
                        <h1>{shownAlbum?.title}</h1>
                    }
                    <button onClick={()=>setCanEdit(!canEdit)}>Edit Album</button>
                    {canEdit && <button onClick={handleUpdate}>Save Changes</button>}
                </div>
            </div>
            <br/>
            <br/>
            <div id="track-index">
                {renderedTracks}
            </div>
        </div>
    )
}