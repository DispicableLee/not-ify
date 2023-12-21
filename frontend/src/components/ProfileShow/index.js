import React from "react";
import LeftBar from "../LeftBar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProfileButton from "../Navigation/ProfileButton";
import UpdateInfoModal from "./UpdateInfoModal";
import "./ProfileShow.css"

export default function ProfileShow(){
    const sessionUser = useSelector(store=>store.session.user)
    console.log(sessionUser)
    const [user, setUser] = useState(sessionUser); // Lifted state
    useEffect(() => {
        console.log("ProfileShow component has rerendered");
    }, [user]); // Add 'user' to the dependency array

    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <div id="profile-body">
            <h1>{sessionUser.username}</h1>

            <div id="profile-main-content">
                <UpdateInfoModal sessionUser={sessionUser} onUserUpdate={handleUserUpdate}/>
            </div>
        </div>
    )
}
