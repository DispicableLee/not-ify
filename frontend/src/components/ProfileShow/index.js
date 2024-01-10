import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { findUserFromDatabase } from "../../store/user";
import UpdateInfoModal from "./UpdateInfoModal";
import AlbumCard from "../AlbumIndex/AlbumCard";
import "./ProfileShow.css"

export default function ProfileShow(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(store=>store.session.user)
    const shownUser = useSelector(store=>store?.user?.shownUser)
    const {id} = useParams()
    const [user, setUser] = useState(sessionUser); // Lifted state
    const userAlbums = shownUser?.albums
    console.log(userAlbums)
    useEffect(() => {
        dispatch(findUserFromDatabase(id))
    }, [dispatch, user]); // Add 'user' to the dependency array

    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };


    const renderedUserAlbums = userAlbums?.map((album)=>{
        <AlbumCard 
            id={album.id}
            title={album.title}
            description={album.description}
            image={album.imageUrl}
        />
    })

    return (
        <div id="profile-body">
            <h1>{sessionUser.username}</h1>

            <div id="profile-main-content">
                <UpdateInfoModal sessionUser={sessionUser} onUserUpdate={handleUserUpdate}/>
                <h2>{userAlbums?.length} Albums</h2>
                <div id="profile-album-index-div"> 
                    {renderedUserAlbums}
                </div>
            </div>
        </div>
    )
}
