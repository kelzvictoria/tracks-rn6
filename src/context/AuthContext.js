import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
    switch(action.type) {
        case 'sign_up':
        case 'sign_in':
            return {
                error: "",
                token: action.payload,
            }
        case 'sign_out':
            return {
                error: "",
                token: null
            }
        case 'error':
            return {
                ...state,
                error: action.payload
            }
        case 'clear_error': {
            return {
                ...state,
                error: ""
            }
        }
        default:
            return state
    }
}

 const getUserToken = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    //console.log({token});
   return token
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    //console.log({token});
    if (token) {
        dispatch({
            type: 'sign_in',
            payload: token
        })
        //navigate('TrackList')
    } else {
        //navigate('SignIn')
    }
}

const signUp = ( dispatch ) => async (email, password) => {
    try {
        const response = await trackerApi.post("/signup", { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: "sign_up", payload: response.data.token })
       // navigate('TrackList')
    } catch (err) {
        dispatch({ type: "error", payload: err.response.data })
    }
}

const signIn = dispatch => async (email, password) => {
    console.log({email, password});
    try {
        const response = await trackerApi.post("/signin", { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: "sign_in", payload: response.data.token })
        //navigate('TrackList')
    } catch (err) {
        console.log(err.response.data);
        dispatch({ type: "error", payload: err.response.data })
    }
}

const signOut = ( dispatch ) => async () => {
 await AsyncStorage.removeItem('token');
 dispatch({
    type: 'sign_out'
 })
 //navigate('SignIn')
}

const clearError = (dispatch) => {
    return () => {
        dispatch({
            type: 'clear_error'
        })
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signUp, signIn, signOut, clearError, tryLocalSignin, getUserToken
    }, 
    {
        token: null,
        error: ""
    }
)