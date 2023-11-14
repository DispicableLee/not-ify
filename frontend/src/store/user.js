import csrfFetch from "./csrf"


export const RECIEVE_USER = "users/RECIEVE_USER"

export const REMOVE_USER = "users/REMOVE_USER"

const recieveUser = user => ({
    type: RECIEVE_USER,
    user
})




// ⁡⁢⁣⁢========== USER CRUD =================================

export const updateUser = (userId, body) => async dispatch=>{
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.ok){
        let data = await res.json()
        dispatch(recieveUser(data))
    }

}



export default function userReducer(state ={}, action){
    const newState = {...state}
    switch(action.type){
        case RECIEVE_USER:
            return {...state, [action.user.id]: action.user}
        default:
            return newState
    }
}