import csrfFetch from "./csrf";
import { loadPlaylist } from "./session";

export const RECEIVE_ALBUMS = 'albums/RECIEVE_ALBUMS'
const recieveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})


export const RECEIVE_ALBUM = "albums/RECIEVE_ALBUM"

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
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
    try {
        const res = await csrfFetch('/api/albums');

        if (!res.ok) {
            throw new Error('Failed to fetch albums');
        }

        const data = await res.json();
        dispatch(recieveAlbums(data));
    } catch (error) {
        console.error('Error fetching albums:', error);
        // Handle error as needed, e.g., dispatch an action to set an error state in your Redux store.
    }
};

export const fetchOneAlbum = (albumId) => async dispatch =>{
    const res = await csrfFetch(`/api/albums/${albumId}`)
    if(res.ok){
        let data = await res.json()
        if(data.tracks){
            dispatch(loadPlaylist(Object.values(data.tracks)))
        }
        dispatch(receiveAlbum(data))
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
        let data = await res.json()
        dispatch(receiveAlbum(data))
    }
}

export const deleteAlbum = (albumId) => async dispatch =>{
    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: "DELETE"
    })
    if(res.ok){
        let data = await res.json()
        dispatch(removeAlbum(data))
    }
}

const albumsReducer = (state ={}, action) =>{
    let newState = {...state}
    switch(action.type){
        case RECEIVE_ALBUMS:
            return {...state, albums: action.albums}
        case RECEIVE_ALBUM:
            return { ...state, shownAlbum: action.album };
        case REMOVE_ALBUM:
            // debugger
            // action.album.album.id
            delete newState[action.album.album.id]
            return newState;
        default:
            return newState
    }
}

export default albumsReducer




