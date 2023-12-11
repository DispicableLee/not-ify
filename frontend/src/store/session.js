import csrfFetch from './csrf';
// ================= login/auth stuff ===============================
const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';
export const RECIEVE_UPDATED_USER = "session/RECIEVE_UPDATED_USER"

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}


// ======================= auth actions ==============================⁡
// frontend/src/store/session.js
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password
    })
  });
  const data = await response.json();
  dispatch(setCurrentUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    })
  });
  const data = await response.json();
  // debugger
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
};

export const updateUser = (userId, body) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      let data = await res.json();
      dispatch(setCurrentUser(data.user)); // Dispatch the success action
    }
  } catch (error) {
    console.error("Error updating user:", error);
    // Handle error if needed
  }
};



// ⁡⁢⁢⁡⁣⁣⁢======================== session track actions ===============================⁡⁡
// ⁡⁣⁣⁢for when the user plays a track, the track's information needs to be loaded into the store⁡
// ⁡⁣⁣⁢so that the AudioFooter component can use it⁡

const SET_CURRENT_TRACK = "session/setCurrentTrack"

export const setCurrentTrack = track => ({
  type: SET_CURRENT_TRACK,
  payload: track
})

// session.currentTrack


// ⁡⁢⁣⁢============= restoreSession ===========================⁡
export const restoreSession = () => async dispatch => {
  // debugger
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case RECIEVE_UPDATED_USER:
      return {...state, user: action.user}
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    case SET_CURRENT_TRACK:
      return {...state, currentTrack: action.payload}
    default:
      return state;
  }
};

export default sessionReducer;