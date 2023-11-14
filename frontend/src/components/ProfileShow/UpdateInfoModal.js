import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/user";
import dotdotdot from "../styling/images/navigation/dotdotdot.png"
import "./ProfileShow.css"


export default function UpdateInfoModal(props){
    const dispatch = useDispatch()
    const signedInUser = useSelector(store=>store.session.user)
    const [openModal, setOpenModal] = useState(false)
    const [formUsername, setFormUsername] = useState(signedInUser.username)
    // console.log(openModal)



    useEffect(()=>{
        if (openModal) document.addEventListener("click", ()=>setOpenModal(false))
    },[])

    function handleClick(){
        setOpenModal(!openModal)
        // console.log(openModal)
    }

    function handleSubmit(e){
        e.preventDefault()
        let body = {email: signedInUser.email, username: formUsername}
        dispatch(updateUser(signedInUser.id, body))

    }


    return (
        <div>
            {openModal &&(
                <div id="modal-form">
                    <h3>Profile Details</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={formUsername} onChange={(e)=>setFormUsername(e.target.value)}/>
                        <input type="submit" value="Save"/>
                    </form>
                    <h1>modal</h1>
                </div>
            )}
            <img src={dotdotdot} id="modal-icon" onClick={handleClick}/>
        </div>
    )
}