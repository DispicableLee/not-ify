import csrfFetch from "./csrf";



export const RECIEVE_ALBUMS = 'albums/RECIEVE_ALBUMS'
const recieveAlbums = albums => ({
    type: RECIEVE_ALBUMS,
    albums
})


export const RECIEVE_ALBUM = "albums/RECIEVE_ALBUM"

const recieveAlbum = album => ({
    type: RECIEVE_ALBUM,
    album
})

export const REMOVE_ALBUM = 'albums/REMOVE_ALBUM'
const removeAlbum = album =>({
    type: REMOVE_ALBUM,
    album
})


export const getAlbums = albumId => state =>{
return state?.albums ? Object.values(state.albums) : [];
}


export const fetchAlbums = () => async dispatch =>{
    const res = await fetch()
}



const albumsReducer = (state ={}, action) =>{
    let newState = {...state}
    switch(album.type){
        default:
            return newState

    }
}

export default albumsReducer




