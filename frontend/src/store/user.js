import csrfFetch from "./csrf"


export const RECIEVE_USER = "users/RECIEVE_USER"

export const REMOVE_USER = "users/REMOVE_USER"

const recieveUser = user => ({
    type: RECIEVE_USER,
    user
})

export const findUserFromDatabase = userId => async dispatch => {
  const res = await csrfFetch(`/api/users/${userId}`)
  const data = await res.json()
  dispatch(recieveUser(data.user))
}




// ⁡⁢⁣⁢========== USER CRUD =================================



const userReducer = (state = {}, action) =>{
  switch (action.type) {
    case RECIEVE_USER:
      return { ...state, shownUser: action.user };
    default:
      return state;
  }
}

export default userReducer