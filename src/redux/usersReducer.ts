export type UserType = {
    id: number, photos: {small: string, large: string} , followed: boolean, name: string, status: string, location: { city: string, county: string }
}

export type InitialState = {
    users: UserType[]
}

const initialState: InitialState = {
    users: [] as Array<UserType>
}

// export type initialStateType = typeof initialState

type ActionsType = FollowType | UnFollowType | SetUsersType

export const usersReducer = (state: InitialState = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: !el.followed}
                    : el)
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: !el.followed}
                    : el)
            }
        }
        case 'SET-USERS' : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

type UnFollowType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
