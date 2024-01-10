import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums, createAlbum } from "../../store/album";
import "./AlbumIndex.css"
import AlbumCard from "./AlbumCard";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AlbumIndex(props){
    const [newAlbumModal, setNewAlbumModal] = useState(false)
    let dispatch = useDispatch()
    const history = useHistory()
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
                <div className="x" onClick={()=>setNewAlbumModal(false)}>X</div>
                <form onSubmit={(e)=>handleCreateNewAlbum(e)}>
                    <input type="text"
                        onChange={(e)=>setNewAlbumTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <input type="text"
                        onChange={(e)=>setNewAlbumDescription(e.target.value)}
                        placeholder="Description"
                    />
                    <input type="text"
                        onChange={(e)=>setNewAlbumImage(e.target.value)}
                        placeholder="Image Url (optional)"
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

        dispatch(createAlbum(newAlbumObj))
        setNewAlbumModal(false)
        history.push("/home")
    }



    return (
        <div id="index-div">

            {newAlbumModal && renderedNewAlbumModal()}



            <div className="new-album"
                onClick={()=>setNewAlbumModal(true)}
            >
                <LibraryAddIcon/>
                <h3>Add an album</h3>
            </div>
            {renderedAlbumCard}
        </div>
    )
}