import csrfFetch from "./csrf";
import { loadPlaylist } from "./session";

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

export const getAlbum = albumId => state => {
    // debugger
      return state?.albums ? state.albums[albumId] : null;
}

export const getAlbums = state => {
  return state?.albums ? Object.values(state.albums) : [];
}

export const fetchAlbums = () => async (dispatch) =>{
    const res = await csrfFetch('/api/albums')
    if(res.ok){
        let data = await res.json()
        dispatch(recieveAlbums(data))
    }
}

export const fetchOneAlbum = (albumId) => async dispatch =>{
    // console.log(albumId.id)
    // debugger
    const res = await fetch(`/api/albums/${albumId}`)
    if(res.ok){
        let data = await res.json()
        if(data.tracks){
            dispatch(loadPlaylist(Object.values(data.tracks)))
        }
        dispatch(recieveAlbum(data))
    }
}

export const updateAlbum = (albumId, body) => async dispatch =>{
    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.ok){
        let data = res.json()
        dispatch(recieveAlbum(data))
    }
}

export const deleteAlbum = (albumId) => async dispatch =>{
    const res = await csrfFetch(`api/albums/${albumId}`, {
        method: "DELETE"
    })
    if(res.ok){
        let data = res.json()
        dispatch(removeAlbum(data))
    }
}

const albumsReducer = (state ={}, action) =>{
    let newState = {...state}
    switch(action.type){
        case RECIEVE_ALBUMS:
            return {...state, albums: action.albums}
        case RECIEVE_ALBUM:
            return { ...state, shownAlbum: action.album };
        default:
            return newState

    }
}

export default albumsReducer




