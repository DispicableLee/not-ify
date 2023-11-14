import React from "react";
import LeftBar from "../LeftBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProfileButton from "../Navigation/ProfileButton";
import UpdateInfoModal from "./UpdateInfoModal";
import "./ProfileShow.css"

export default function ProfileShow(){
    const sessionUser = useSelector(store=>store.session.user)
    return (
        <div id="profile-body">

            <ProfileButton sessionUser={sessionUser}/>
            <h5>Profile</h5>
            <h1>{sessionUser.username}</h1>

            <div id="profile-main-content">
                <UpdateInfoModal/>
            </div>
        </div>
    )
}
