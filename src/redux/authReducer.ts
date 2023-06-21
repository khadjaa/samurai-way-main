import {Dispatch} from "redux";
import axios from "axios";

export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: UserDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type initialStateType = typeof initialState

type ActionsTypes = setAuthUserDataType

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: UserDataType) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}

export const getAuthMe = () => (dispatch: Dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if( response.data.resultCode === 0){
                dispatch(setAuthUserData(response.data.data))
            }
        })
}