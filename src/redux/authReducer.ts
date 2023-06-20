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
