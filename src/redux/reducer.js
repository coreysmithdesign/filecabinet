import axios from "axios";

const initialState = {
  user: {},
  isLoading: true,
  isLoggedIn: false,
};

// Actions dispatchers?? Think of these as messengers
// to communicate with redux (hey redux! I've got some
// information for you!)
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState,
  };
}

export function getUser() {
  const user = axios.get("/api/auth/user");
  return {
    type: GET_USER,
    payload: user,
  };
}

// Redux says ok, when sombody says LOGIN_USER/LOGOUT_USER/ETC,
// this is what I will do...
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, ...action.payload };
    case GET_USER + "_PENDING":
      return { ...state, isLoading: true };
    case GET_USER + "_FULFILLED":
      return {
        ...state,
        ...action.payload.data,
        isLoggedIn: true,
        isLoading: false,
      };
    case GET_USER + "_REJECTED":
      return { ...state, isLoading: false };
    default:
      return initialState;
  }
}
