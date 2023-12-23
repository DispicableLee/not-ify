import csrfFetch from "./csrf";


export const RECIEVE_TRACKS = "tracks/RECIEVE_TRACKS"
const recieveTracks = tracks =>({
    type: RECIEVE_TRACKS,
    tracks
})

export const fetchAllTracks = () => async dispatch=>{
    try{
        const res = await csrfFetch('/api/tracks')
        if(!res.ok){
            throw new Error('Failed to fetch Tracks')
        }
        const data = await res.json()
        dispatch(recieveTracks(data))
    } catch(error){
        console.error('Error fetching Tracks:', error)
    }
}







const tracksReducer = (state = {}, action) =>{
    let newState = {...state}

    switch(action.type){
        case RECIEVE_TRACKS:
            newState = {...newState, all: action.tracks}
            return newState
        default:
            return newState
    }
}

export default tracksReducer