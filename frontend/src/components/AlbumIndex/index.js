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
    const currentUser = useSelector(store=>store.session.user)
    const albums = useSelector(store=>store?.albums?.albums|| {})
// ⁡⁢⁣⁣==================== new album form fields =================================⁡
    const [newAlbumTitle, setNewAlbumTitle] = useState()
    const [newAlbumDescription, setNewAlbumDescription] = useState()
    const [newAlbumImage, setNewAlbumImage] = useState()
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

    const renderedNewAlbumModal = () =>{
        return (
            <div id="new-album-modal">
                {/* title, imageUrl, uploaderId, description */}
                <form>
                    <input type="text"
                        onChange={(e)=>setNewAlbumTitle(e.target.value)}
                    />
                    <input type="text"
                        onChange={(e)=>setNewAlbumDescription(e.target.value)}
                    />
                    <input type="text"
                        onChange={(e)=>setNewAlbumImage(e.target.value)}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    function handleCreateNewAlbum(e){
        e.preventDefault()
        const newAlbumObj = {
            title: newAlbumTitle,
            uploaderId: currentUser.id,
            description: newAlbumDescription,
            imageUrl: newAlbumImage
        }



        
    }



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