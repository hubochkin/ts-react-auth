import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from "../types";
const fakeUser = {
    "email": "example@example.com",
    "password": "1234"
}
const initialUser = { 
    "email": "example@example.com",
    "password": "1234",
    "name": "Dima Hubi"
}
const fakeToken = "SomeToken";
export const loginUser = (userData: any, history: any) => (dispatch: any) => {
   
    dispatch({ type: LOADING_UI })
    if (JSON.stringify(userData) === JSON.stringify(fakeUser)) {
        const token = `Bearer ${fakeToken}`;
        localStorage.setItem("token", token);//setting token to local storage

        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
 
        history.push("/"); // redirecting to index page after login success}
    } else {
   
        dispatch({ 
            type: SET_ERRORS,
            payload: { "error": "Email or password are incorrect"}
        })
    }

}
//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    dispatch({
        type: SET_USER,
        payload: initialUser
    });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem("token");
    
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = "/login"; // redirect to login page
};

