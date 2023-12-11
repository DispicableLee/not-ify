import csrfFetch from "./csrf"


export const RECIEVE_USER = "users/RECIEVE_USER"

export const REMOVE_USER = "users/REMOVE_USER"

const recieveUser = user => ({
    type: RECIEVE_USER,
    user
})




// ⁡⁢⁣⁢========== USER CRUD =================================




export default function userReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USER:
        console.log(action)
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
}