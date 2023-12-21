import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchOneAlbum, getAlbum, updateAlbum, deleteAlbum } from "../../store/album";
import { loadPlaylist } from "../../store/session";
import csrfFetch from "../../store/csrf";
import AlbumTrackItem from "../AlbumTrackItem";
import './AlbumShow.css'

export default function AlbumShow(){
    const history = useHistory()
    const dispatch = useDispatch()
    const {id} = useParams()
    const shownAlbum = useSelector(store=>store.albums?.shownAlbum?.album)
    const shownAlbumArtist = useSelector(store=>store?.albums?.shownAlbum?.album?.uploader?.username)
    const currentUser = useSelector(store=> store?.session?.user)
    const authorizedUser = shownAlbum?.uploaderId === currentUser?.id
    const [tracks, setTracks] = useState()
    const [canEdit, setCanEdit] = useState(false)
    const [canDelete, setCanDelete] = useState(false)
    const [formAlbumName, setFormAlbumName] = useState(shownAlbum?.title)

    useEffect(() => {
        fetch(`/api/albums/${id}`)
            .then((res) => res.json())
            .then((json) => {
                if(json.tracks) setTracks(Object.values(json.tracks)); // Use an empty array if tracks are undefined
            })
        dispatch(fetchOneAlbum(id));
    }, [dispatch, setTracks]);

    
    const renderedTracks = tracks ? Object.values(tracks).map((track, idx) => (
        <AlbumTrackItem
            id={track.id}
            title={track.title}
            url={track.url}
            image={track.album.imageUrl}
            uploader={track.uploader.username}
            listNum={idx + 1}
        />
    )) : null;


    function handleUpdate(){
        const updateAlbumObj = {
            title: formAlbumName
        }
        dispatch(updateAlbum(id, updateAlbumObj))
        setCanEdit(false)
    }


   function confirmDelete(){
        dispatch(deleteAlbum(id))
        history.push("/home")
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
                        <>
                            <h1>{shownAlbum?.title}</h1>
                            <p>{shownAlbumArtist}</p>
                        </>
                    }
                    {authorizedUser && <button onClick={()=>setCanEdit(!canEdit)}>Edit Album</button>}
                    {canEdit && <button onClick={handleUpdate}>Save Changes</button>}
                    {authorizedUser ? <button onClick={()=>setCanDelete(true)}>Delete Album</button> : <></>}
                </div>
                {canDelete && <div className="confirm-delete-div">
                        <h2>Are you sure you want to delete this album?</h2>
                        <section className="bottom-bar"> 
                            <button className="cancel-delete-button" onClick={()=>setCanDelete(false)}>Cancel</button>
                            <button className="confirm-delete-button"
                                onClick={confirmDelete}
                            >
                                Delete this Album</button>
                        </section>
                    </div>}
            </div>
            <br/>
            <br/>
            <div id="track-index">
                {renderedTracks}
            </div>
        </div>
    )
}