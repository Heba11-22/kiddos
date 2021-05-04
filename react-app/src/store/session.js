// Constants: the type of actions thet are gonna happen.
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";


// Action Creators: retun objects which will be passing into the reducer.

// Set a user into the store:
 const setUser = (user) => ({
    type: SET_USER,
    payload: user
 })


 // Remove a user from the store:
 const removeUser = () => ({
     type: REMOVE_USER
 })

//Thunks: return functions themselves.

//thunk1:  authenticate
export const authenticate = () => async(dispatch) => {

    //fetch from the backend
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // put the data coming from the database into data variable
    const data = await response.json();
    if (data.errors) {
        return;
    }

    // dispatch the action creator and pass the data coming from the database
    dispatch(setUser(data));
  }

  
  //thunk2: login
  export const login = (email, password)=> async(dispatch) => {

    // fetch from the backend
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    // assign the data coming from the bachend into a variable
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(setUser(data))
    return {}
  }
  

  //thunk3:  logout
  export const logout = () => async(dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    dispatch(removeUser())
  };
  
  //thunk3:  signUp
  export const signUp = (username, email, password) => async(dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    dispatch(setUser(data))
  }


//Reducer

const initialState = {user: null}

//useSelector(state => state.session.user)  = null if there is no logged in user

export default function reducer (state=initialState, action) {
    switch(action.type) {
        case SET_USER:
            return { user: action.payload };  // or if I want all of the previous state also return { ...state, user: acton.payload }
        
        case REMOVE_USER:
            return { user: null };

        default:
            return state;
    }
} 