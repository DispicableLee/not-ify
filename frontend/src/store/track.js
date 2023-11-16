export const RECIEVE_TRACKS = "tracks/RECIEVE_TRACKS"
const recieveTracks = tracks =>({
    type: RECIEVE_TRACKS,
    tracks
})

export const RECIEVE_TRACK = "tracks/RECIEVE_TRACK"






const tracksReducer = (state = {}, action) =>{
    let newState = {...state}

    switch(action.type){

        default:
            return newState
    }
}