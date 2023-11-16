import React from "react";

export default function AlbumCard({title}){
    return (
        <div className="card-box">
            <div className="album-image">

            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    )
}