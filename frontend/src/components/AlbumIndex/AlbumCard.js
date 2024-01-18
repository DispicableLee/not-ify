import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './AlbumIndex.css'
export default function AlbumCard({id,title, description, image, uploaderUsername}){
    const history = useHistory()
    function goToShow(){
        console.log("click")
       
    }
    return (
        <Link className="card-box" to={`/album/${id}`}>
            <div onClick={(e)=>goToShow(e)}>
                <div>
                    <img id="card-image" src={image}/>
                    <h4>{title}</h4>
                    <h5>{uploaderUsername}</h5>
                </div>
            </div>
        </Link>
    )
}